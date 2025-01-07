const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: [String], required: true },
  stats: {
    hp: { type: Number },
    attack: { type: Number },
    defense: { type: Number },
    speed: { type: Number },
  },
  image: { type: String, required: true },
});

// Création du modèle avec nom unique 'Pokemon'
module.exports = mongoose.model('Pokemon', PokemonSchema);
