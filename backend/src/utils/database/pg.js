const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL
const pool = new Pool({
  connectionString,
});

async function connectPostgres() {
  await pool.query(`CREATE TABLE IF NOT EXISTS pokemons (
    id SERIAL PRIMARY KEY,
    tipo TEXT NOT NULL CHECK (tipo IN ('pikachu', 'charizard', 'mewtwo')),
    treinador TEXT NOT NULL,
    nivel INTEGER NOT NULL DEFAULT 1
  )`)
}

module.exports = {
  query: (text, params) => pool.query(text, params),
  connectPostgres,
};
