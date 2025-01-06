const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://sofientalbi2:CA8VC8zuxfpxElhk@clusterpokedex.2refs.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPokedex';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connexion à MongoDB Atlas réussie');
})
.catch((error) => {
  console.log('Erreur de connexion à MongoDB Atlas :', error);
});
