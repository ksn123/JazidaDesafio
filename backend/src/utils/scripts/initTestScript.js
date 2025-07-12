const pool = require('../database/pg');



(async () => {
  try {
    await pool.connectPostgres()
    console.log('Table Created');
    process.exit(0);
  } catch (err) {
    console.error('Error try to Create table', err);
    process.exit(1);
  }
})();