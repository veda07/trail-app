const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    long: Number,
    review: String
})

const Trail = mongoose.model('Trail', trailSchema)

module.exports = Trail;