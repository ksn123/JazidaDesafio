const app = require('./app');
const { connectPostgres } = require('./utils/database/pg');
const { connectMongo } = require('./utils/database/mongo');
const PORT = process.env.PORT;

async function init(){

  await connectPostgres();
  await connectMongo();
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));

}

init();
