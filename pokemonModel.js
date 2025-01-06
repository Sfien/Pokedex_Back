const mongoose = require('mongoose');

// Définition du schéma pour un Pokémon
const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  type: {
    type: [String],
    required: true
  },
  stats: {
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    special_attack: { type: Number, required: true },
    special_defense: { type: Number, required: true },
    speed: { type: Number, required: true }
  }
});

// Création du modèle à partir du schéma
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
