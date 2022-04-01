const express = require('express')
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
/* Importation du modèle à partir du dossier des modèles. */
const candidatModel = require('../models/candidatModel')


/* C'est la route pour obtenir tous les candidats. */
router.get('/', (req, res) => {
    candidatModel.find((err, candidats) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(candidats)
        }
    })
});

/* C'est la route pour ajouter un nouveau candidat. */
router.post('/', (req, res) => {
    /* Créer une nouvelle instance de la classe `candidatModel` et transmettre l'objet `req.body` au
    constructeur. */
    const candidat = new candidatModel(req.body)
    /* Enregistrement du nouveau candidat dans la base de données. */
    candidat.save((err, candidat) => {
        /* Il s'agit d'un modèle standard de gestion des erreurs. Si une erreur se produit, l'erreur est
        renvoyée au client. Dans le cas contraire, le nouveau candidat est renvoyé au client. */
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).json(candidat)
        }
    })
});

router.put('/:id', (req, res) => {
    /* Vérifier que l'identifiant du candidat est bien un identifiant valide. */
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID Invalide : " + req.params.id)


    /* Création d'un nouvel objet qui sera utilisé pour mettre à jour l'enregistrement. */
    const updateRecord = {
        prenom: req.body.prenom,
        nom: req.body.nom,
        parti: req.body.parti,
        image: req.body.image

    };

    /* Une méthode de mongoose. Il est utilisé pour mettre à jour un candidat dans la base de
    données. */
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


    /* Une méthode de mongoose. Il est utilisé pour supprimer un candidat de la base de données. */
    candidatModel.findByIdAndRemove(req.params.id, (err, candidat) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(candidat)
        }
    });

});

/* Exportation de l'objet routeur vers l'application principale. */
module.exports = router;
