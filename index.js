const express = require('express');
const { MongoClient } = require('mongodb');

// Crée une instance d'application Express
const app = express();

// URL de connexion à MongoDB
const url = 'mongodb+srv://pokedex_user:CaWjES5osrpNVKvD@clusterpokedex.2refs.mongodb.net/';
const dbName = 'poke_Pokedex';

// Crée une instance de client MongoDB
const client = new MongoClient(url);

// Middleware pour se connecter à la base de données MongoDB
app.use(async (req, res, next) => {
  try {
    await client.connect();
    console.log('Connexion à MongoDB réussie');
    req.db = client.db(dbName); // Met la base de données dans l'objet `req`
    next();
  } catch (err) {
    console.error('Erreur de connexion à MongoDB', err);
    res.status(500).send('Erreur de connexion à MongoDB');
  }
});

// Route pour récupérer tous les Pokémon du Pokedex
app.get('/', async (req, res) => {
  try {
    const pokemonsCollection = req.db.collection('Pokedex');
    const pokemons = await pokemonsCollection.find().toArray();
    res.json(pokemons);
  } catch (err) {
    res.status(500).send('Erreur du serveur');
  }
});


// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur le port 3000');
});

