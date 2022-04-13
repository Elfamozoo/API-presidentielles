const mongoose = require('mongoose');

/* C'est la création d'un modèle. */
const voteModel = /* Mongoose est une bibliothèque ODM (Object Data Modeling) pour MongoDB et Node.js.
Il gère les relations entre les données, fournit une validation de schéma et est
utilisé pour traduire entre les objets dans le code et la représentation de ces
objets dans MongoDB. */
mongoose.model(
    "votes",
    {
        date: {
            type: Date,
            required: true
        },
        ip: {
            type: String,
            required: true
        },
        id_candidat: {
            type: String,
            required: true
        },
    },

);


module.exports = voteModel;
