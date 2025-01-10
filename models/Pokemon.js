const mongoose = require('mongoose');

// Définir le schéma du Pokémon
const statsSchema = new mongoose.Schema({
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    special_attack: { type: Number, required: true },
    special_defense: { type: Number, required: true },
    speed: { type: Number, required: true }
}, { _id: false });  // Pas besoin de champ _id pour le sous-schéma

const pokemonSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    type: [{ type: String, required: true }],
    stats: statsSchema  // Utilisation du sous-schéma pour les statistiques
});

// Créer le modèle à partir du schéma
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

// Exporter le modèle pour l'utiliser ailleurs dans le code
module.exports = Pokemon;
