# Utilise une image officielle Node.js
FROM node:16

# Définit le répertoire de travail
WORKDIR /usr/src/app

# Copie les fichiers et installe les dépendances
COPY package*.json ./
RUN npm install

# Copie le reste des fichiers
COPY . .

# Expose le port sur lequel l'API fonctionne
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]
