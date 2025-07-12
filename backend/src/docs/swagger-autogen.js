const swaggerAutogen = require('swagger-autogen')();


const outputFile = './swagger_output.json'; // Path to save the generated JSON
const routes = ['../routes/battle.routes.js','../routes/pokemon.routes.js']; // Array of paths to your route files

    const doc = {
        info: {
            version: '1.0.0',
            title: 'Pokémon API',
            description: 'API documentation for my Node.js application',
        },
        host: 'localhost:3000', // Your API host
        basePath: '/',
        schemes: ['http', 'https'],
        // Add more configurations like securityDefinitions, tags, etc.
    };

    swaggerAutogen(outputFile, routes, doc);