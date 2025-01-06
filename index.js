const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./pokemonRoutes'); // Importez les routes Pokémon

const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Activer CORS pour permettre les requêtes depuis le front-end
app.use(cors());

// Utilisation des routes
app.use('/api', pokemonRoutes); // Toutes les routes seront accessibles via /api

// Démarrer le serveur
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
