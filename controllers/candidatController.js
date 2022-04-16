const express = require('express')
/* Création d'un nouvel objet routeur. */
const router = express.Router();
/* Importation du type ObjectID à partir de la bibliothèque mongoose. */
const ObjectID = require('mongoose').Types.ObjectId;
/* Importation du modèle à partir du dossier des modèles. */
const candidatModel = require('../models/candidatModel')


router.get('/', (req, res) => {
    candidatModel.find((err, candidats) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(candidats)
        }
    })
});

router.post('/', (req, res) => {
    const candidat = new candidatModel(req.body)
    candidat.save((err, candidat) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).json(candidat)
        }
    })
});

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID Invalide : " + req.params.id)

    const updateRecord = {
        prenom: req.body.prenom,
        nom: req.body.nom,
        parti: req.body.parti,
        image: req.body.image

    };

    candidatModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, candidat) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json(candidat)
            }
        });

});

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID Invalide : " + req.params.id)

    candidatModel.findByIdAndRemove(req.params.id, (err, candidat) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(candidat)
        }
    });

});


module.exports = router;
