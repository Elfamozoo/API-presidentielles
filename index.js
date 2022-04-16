const express = require('express')
const app = express();
require('./models/dbConfig');
const candidatRoutes = require('./controllers/candidatController');
const voteRoutes = require('./controllers/voteController');
const swaggerUi = require('swagger-ui-express'),
   swaggerDocument = require('./swagger.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/candidats', candidatRoutes);

app.use('/votes', voteRoutes);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)

);

app.listen(5500, () => console.log('Server running on port 5500'));
