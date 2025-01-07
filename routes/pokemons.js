const express = require('express');
const Pokemon = require('../models/Pokemon');

const router = express.Router();

// Route 1 : Récupérer tous les Pokémon (nom, image, type)
router.get('/', async (req, res) => {
    try {
        const pokemons = await Pokemon.find({}, 'name type image');
        res.json(pokemons);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

// Route 2 : Récupérer les détails d’un Pokémon par ID
router.get('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ id: req.params.id });
        if (!pokemon) {
            return res.status(404).json({ message: 'Pokemon not found' });
        }
        res.json(pokemon);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

//Route 3 test
app.get('/api/test', (req, res) => {
    res.json({ message: 'Test route is working!' });
});


module.exports = router;
