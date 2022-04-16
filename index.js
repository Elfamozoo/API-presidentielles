/* C'est la première ligne de code que nous allons utiliser pour créer notre serveur. Il s'agit d'une
variable JavaScript à laquelle est affectée la valeur du module "express". Le module `express` est
une bibliothèque JavaScript utilisée pour créer des serveurs Web. */
const express = require('express')
const app = express();
require('./models/dbConfig');
/* Importation des routes définies dans le fichier `candidatController.js`. */
const candidatRoutes = require('./controllers/candidatController');
/* Importation des routes définies dans le fichier `voteController.js`. */
const voteRoutes = require('./controllers/voteController');
/* Un middleware qui analyse le corps de la requête et le rend disponible dans l'objet de la requête. */
app.use(express.urlencoded({ extended: true }));
/* Un middleware qui sert l'interface utilisateur Swagger liée à votre document Swagger. */
const swaggerUi = require('swagger-ui-express'),
    /* Importation du fichier swagger.json que nous avons créé précédemment. */
    swaggerDocument = require('./swagger.json');


app.use(express.json())

/* Ajout des routes définies dans `candidatRoutes.js` à l'application express. */
/* `app.use` est une méthode qui ajoute un middleware à l'application. */
app.use('/candidats', candidatRoutes);
/* Ajout des routes définies dans `voteRoutes.js` à l'application express. */
app.use('/votes', voteRoutes);


/* Ajout de l'interface utilisateur Swagger à l'application express. */
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);



/* Création d'un serveur qui écoute sur le port 5500 et lorsqu'une demande est faite au serveur, il
exécutera le code dans la fonction de rappel. */
app.listen(5500, () => console.log('Server running on port 5500'));
