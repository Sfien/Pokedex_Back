const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: [String],
    stats: {
        hp: Number,
        attack: Number,
        defense: Number,
        speed: Number
    },
    image: String
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
