const mongoose = require('mongoose');

/* Création d'un nouveau modèle nommé `candidatModel` avec les propriétés suivantes :
- `prénom` : string
- 'nom' : string
- 'parti' : string
- `image` : string */
const candidatModel = mongoose.model(
    "candidats",
    {
        prenom: {
            type: String,
            required: true
        },
        nom: {
            type: String,
            required: true
        },
        parti: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },

);

/* Exportation du modèle vers le reste de l'application. */
module.exports = candidatModel;
