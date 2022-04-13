/* C'est la première ligne de code que nous allons utiliser pour créer notre serveur. Il s'agit d'une
variable JavaScript à laquelle est affectée la valeur du module "express". Le module `express` est
une bibliothèque JavaScript utilisée pour créer des serveurs Web. */
const express = require('express')
const app = express();
require('./models/dbConfig');
const candidatRoutes = require('./controllers/candidatController');
const voteRoutes = require('./controllers/voteController');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

/* Ajout du middleware bodyParser.json() à l'application. */
app.use(bodyParser.json());



/* Ajout des itinéraires définis dans `candidatRoutes.js` à l'application express. */
app.use('/candidats', candidatRoutes);
/* Ajout des routes définies dans `voteRoutes.js` à l'application express. */
app.use('/votes', voteRoutes);


/* Un middleware qui sert l'interface utilisateur Swagger liée à votre document Swagger. */
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);



/* Création d'un serveur qui écoute sur le port 5500 et lorsqu'une demande est faite au serveur, il
exécutera le code dans la fonction de rappel. */
app.listen(5500, () => console.log('Server running on port 5500'));
