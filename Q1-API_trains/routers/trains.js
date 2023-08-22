const express = require('express');
const router = new express.Router();
const AllTrains = require('../models/train');

router.post('/train/trains', async (req, res) => {
    try {
        const addingTrain = new AllTrains(req.body);
        const result = await addingTrain.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/train/trains', async (req, res) => {
    try {
        const getTrains = await AllTrains.find() 
        res.send(JSON.stringify(getTrains, null, 2));
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/train/trains/:trainCode', async (req, res) => {
    try {
        const trainCode = req.params.trainCode
        const getTrain = await AllTrains.find({ trainNumber: trainCode })
        res.send(getTrain);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;