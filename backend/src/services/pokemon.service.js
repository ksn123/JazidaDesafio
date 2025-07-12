const db = require('../utils/database/pg');

exports.create = async (type, trainer) => {
  const result = await db.query(
    'INSERT INTO pokemons (tipo, treinador) VALUES ($1, $2) RETURNING *',
    [type, trainer]
  );
  return result.rows[0];
};

exports.update = async (id, trainer) => {
  await db.query('UPDATE pokemons SET treinador = $1 WHERE id = $2', [trainer, id]);
};

exports.delete = async (id) => {
  await db.query('DELETE FROM pokemons WHERE id = $1', [id]);
};

exports.searchById = async (id) => {
  const result = await db.query('SELECT * FROM pokemons WHERE id = $1', [id]);
  return result.rows[0];
};

exports.getList = async () => {
  const result = await db.query('SELECT * FROM pokemons');
  return result.rows;
};