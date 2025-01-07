const express = require('express');
const Pokemon = require('../models/Pokemon');

const router = express.Router();

// Route 1 : Récupérer tous les Pokémon (nom, image, type)
router.get('/', async (req, res) => {
    try {
      console.log("Fetching all pokemons...");
      const pokemons = await Pokemon.find({}, 'name type image');
      console.log("Pokemons found:", pokemons); // Vérifiez que des Pokémon sont retournés
      res.json(pokemons);
    } catch (err) {
      console.error("Error fetching pokemons:", err); // Affiche l'erreur si nécessaire
      res.status(500).json({ message: 'Server error', error: err });
    }
  });
  

// Route 2 : Récupérer les détails d’un Pokémon par ID
router.get('/:id', async (req, res) => {
    try {
      const pokemonId = Number(req.params.id); // Convertir l'id en Number pour la recherche
      console.log(`Fetching pokemon with id: ${pokemonId}`);
      const pokemon = await Pokemon.findOne({ id: pokemonId });  // Recherche avec le champ 'id'
      
      if (!pokemon) {
        return res.status(404).json({ message: 'Pokemon not found' });
      }
  
      console.log("Pokemon found:", pokemon);
      res.json(pokemon);
    } catch (err) {
      console.error("Error fetching pokemon by id:", err);
      res.status(500).json({ message: 'Server error', error: err });
    }
  });

//Route 3 test
router.get('/api/test', (req, res) => {
    res.json({ message: 'Test route is working!' });
});


module.exports = router;
