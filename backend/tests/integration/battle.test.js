const request = require('supertest');
const app = require('../../src/app');
const { connectMongo } = require('../../src/utils/database/mongo');

describe('Battle', () => {
  let pokemonA, pokemonB;

  beforeAll(async () => {
    await connectMongo();
    pokemonA = (await request(app).post('/pokemons').send({ tipo: 'pikachu', treinador: 'Ash' })).body;
    pokemonB = (await request(app).post('/pokemons').send({ tipo: 'charizard', treinador: 'Gary' })).body;
    });
   


  it('Must do a battle between to pokemons', async () => {
    const res = await request(app).post(`/batalhar/${pokemonA.id}/${pokemonB.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('winner');
    expect(res.body).toHaveProperty('loser');
  });
});
