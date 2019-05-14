const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
    name: String,
    lat: String,
    log: String,
    review: String
})

const Trail = mongoose.model('Trail', trailSchema)

module.exports = Trail;