/* Il s'agit d'une variable JavaScript à laquelle est assignée la valeur du module `mongoose`. */
const mongoose = require('mongoose');


/* Mongoose est un outil de modélisation d'objet MongoDB conçu pour fonctionner dans un environnement
asynchrone. */
mongoose.connect(
    /*  Le premier argument est la chaîne de connexion.
        Le deuxième argument est un objet qui spécifie les options pour la connexion.
        Le troisième argument est une fonction de rappel appelée lorsque la connexion est établie. */
    'mongodb://localhost:27017/api-pres',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log('Erreur de connexion à la base de données');
        } else {
            console.log('Connexion à la base de données réussie');
        }
    }
);
