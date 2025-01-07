const mongoose = require('mongoose');

// Remplace par ton URI
const uri = "mongodb+srv://pokedex_user:CaWjES5osrpNVKvD@clusterpokedex.2refs.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPokedex";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        mongoose.connection.close();
    })
    .catch(err => console.log("Failed to connect to MongoDB", err));
