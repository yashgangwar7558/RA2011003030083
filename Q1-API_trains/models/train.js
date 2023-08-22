const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    trainName: {
        type: String,
        required: true,
    },
    trainNumber: {
        type: Number,
        required: true,
    },
    departureTime: {
        Hours: { type: Number, required: true },
        Minutes: { type: Number, required: true },
        Seconds: { type: Number, required: true }
    },
    seatsAvailable: {
        sleeper: { type: Number, required: true },
        AC: { type: Number, required: true }
    },
    price: {
        sleeper: { type: Number, required: true },
        AC: { type: Number, required: true }
    },
    delayedBy: {
        type: Number,
        required: true,
    },
})

// created a model and collection
const Trains = new mongoose.model("Trains", trainSchema);

module.exports = Trains;