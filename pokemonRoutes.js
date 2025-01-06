const express = require('express');
const Pokemon = require('./pokemonModel'); // Importez le modèle Pokémon
const router = express.Router();

// Route pour récupérer tous les Pokémon (affichage sur la page d'accueil)
router.get('/pokemons', async (req, res) => {
  try {
    // Récupère tous les Pokémon mais avec uniquement les informations nécessaires pour la page d'accueil
    const pokemons = await Pokemon.find({}, 'id name image'); // Sélectionne uniquement id, name et image
    res.json(pokemons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour récupérer un Pokémon spécifique par son ID (pour la page de détails)
router.get('/pokemons/:id', async (req, res) => {
  try {
    // Recherche un Pokémon par son 'id' dans la base de données
    const pokemon = await Pokemon.findOne({ id: req.params.id });
    if (!pokemon) {
      return res.status(404).json({ message: 'Pokémon non trouvé' });
    }
    // Retourne tous les détails du Pokémon sélectionné
    res.json(pokemon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
