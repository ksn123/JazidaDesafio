const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL
const pool = new Pool({
  connectionString,
});

async function connectPostgres() {
  for (let i = 0; i < 5; i++) {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS pokemons (
        id SERIAL PRIMARY KEY,
        tipo TEXT NOT NULL CHECK (tipo IN ('pikachu', 'charizard', 'mewtwo')),
        treinador TEXT NOT NULL,
        nivel INTEGER NOT NULL DEFAULT 1
        )`)
      console.log('Postgres Connected');
      return pool;
    } catch (err) {
      console.log(`Attempt ${i + 1} failed: ${err.message}`);
      await new Promise((res) => setTimeout(res, 2000));
    }
  }

  

}

module.exports = {
  query: (text, params) => pool.query(text, params),
  connectPostgres,
};
