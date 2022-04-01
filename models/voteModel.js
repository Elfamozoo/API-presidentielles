const mongoose = require('mongoose');

/* C'est la création d'un modèle. */
const voteModel = mongoose.model(
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
