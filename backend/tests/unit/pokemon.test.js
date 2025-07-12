const request = require('supertest');
const app = require('../../src/app');


describe('Pokemon CRUD', () => {
  it('Need to create a valid pokemon', async () => {
    const res = await request(app).post('/pokemons').send({ tipo: 'pikachu', treinador: 'Ash' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('Need to create a invalid pokemon', async () => {
    const res = await request(app).post('/pokemons').send({ tipo: 'lucario', treinador: 'Ash' });
    expect(res.statusCode).toEqual(400);
  });

  it('Need to update a valid pokemon', async () => {
    const pokeList = (await request(app).get('/pokemons')).body
    const res = await request(app).put(`/pokemons/${pokeList[0].id}`).send({ treinador: 'Brock' });
    expect(res.statusCode).toEqual(204);
  });

  it('Need to delete a valid pokemon', async () => {
    const pokeList = (await request(app).get('/pokemons')).body
    const res = await request(app).delete(`/pokemons/${pokeList[0].id}`).send();
    expect(res.statusCode).toEqual(204);
  });

  it('Need to get a valid pokemon', async () => {
    const pokeList = (await request(app).get('/pokemons')).body
    const res = await request(app).get(`/pokemons/${pokeList[0].id}`).send();
    expect(res.statusCode).toEqual(200);
  });

  it('Need to get  a valid pokemon List', async () => {
    const res = await request(app).get('/pokemons')
    expect(res.statusCode).toEqual(200);
  });
});
