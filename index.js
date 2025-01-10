const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // 导入 CORS
const Pokemon = require('./models/Pokemon');
const app = express();
const port = process.env.PORT || 3000;

// 使用 CORS 中间件，允许所有域名访问（可以根据需要限制访问的域名）
app.use(cors());

// Middleware pour analyser le corps de la requête JSON
app.use(express.json());

// Connexion à MongoDB
const MONGO_URL = 'mongodb://localhost:27017/pokedex';  // Remplacez par votre URL MongoDB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie');
  })
  .catch(err => {
    console.error('Erreur de connexion à MongoDB', err);
  });

// Route pour récupérer tous les Pokémon
app.get('/pokemon', async (req, res) => {
    try {
        const pokemonList = await Pokemon.find();
        res.json({ success: true, data: pokemonList });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Erreur serveur' });
    }
});

// Route pour récupérer un Pokémon par son ID
app.get('/pokemon/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ id: req.params.id });
        if (!pokemon) {
            return res.status(404).json({ success: false, message: 'Pokémon non trouvé' });
        }
        res.json({ success: true, data: pokemon });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Erreur serveur' });
    }
});

// Route pour ajouter un nouveau Pokémon
app.post('/pokemon', async (req, res) => {
    const { id, name, image, type, stats } = req.body;

    try {
        const newPokemon = new Pokemon({ id, name, image, type, stats });
        await newPokemon.save();
        res.status(201).json({ success: true, message: 'Pokémon ajouté avec succès' });
    } catch (err) {
        res.status(400).json({ success: false, message: 'Erreur lors de l\'ajout du Pokémon' });
    }
});

// Route pour mettre à jour un Pokémon par son ID
app.put('/pokemon/:id', async (req, res) => {
    const { name, image, type, stats } = req.body;
    
    try {
        const updatedPokemon = await Pokemon.findOneAndUpdate(
            { id: req.params.id },
            { name, image, type, stats },
            { new: true }
        );
        
        if (!updatedPokemon) {
            return res.status(404).json({ success: false, message: 'Pokémon non trouvé' });
        }
        
        res.json({ success: true, data: updatedPokemon });
    } catch (err) {
        res.status(400).json({ success: false, message: 'Erreur lors de la mise à jour du Pokémon' });
    }
});

// Route pour supprimer un Pokémon par son ID
app.delete('/pokemon/:id', async (req, res) => {
    try {
        const deletedPokemon = await Pokemon.findOneAndDelete({ id: req.params.id });
        
        if (!deletedPokemon) {
            return res.status(404).json({ success: false, message: 'Pokémon non trouvé' });
        }
        
        res.json({ success: true, message: 'Pokémon supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Erreur serveur' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
