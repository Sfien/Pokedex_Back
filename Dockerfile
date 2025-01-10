# Utiliser l'image officielle de Node.js
FROM node:16 AS builder

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port
EXPOSE 3000

# Lancer l'application
CMD ["node", "index.js"]
