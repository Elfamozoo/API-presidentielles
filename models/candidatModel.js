const mongoose = require('mongoose');

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

module.exports = candidatModel;
