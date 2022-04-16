const express = require('express')
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const voteModel = require('../models/voteModel')

router.get('/', (req, res) => {
    voteModel.find((err, votes) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(votes)
        }
    })
})

router.post('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID Invalide : " + req.params.id)

    const vote = new voteModel({
        date: Date.now(),
        ip: req.headers['X-Forwarded-For'] || req.socket.remoteAddress,
        id_candidat: req.params.id
    })

    vote.save((err, vote) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(vote)
        }
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID Invalide : " + req.params.id)

    voteModel.findByIdAndRemove(req.params.id, (err, vote) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(vote)
        }
    })
})

module.exports = router;
