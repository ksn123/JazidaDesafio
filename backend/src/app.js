const express = require('express');
const pokemonRoutes = require('./routes/pokemon.routes');
const battleRoutes = require('./routes/battle.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger_output.json');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/pokemons', pokemonRoutes);
app.use('/batalhar', battleRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;