# Utiliser une image de base Node.js
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json ./

# Installer les dépendances
RUN npm install

COPY . .

RUN npm install
# Construire l'application React
RUN npm run build

# Exposer le port sur lequel l'application va tourner
EXPOSE 4000

# Démarrer le serveur Node.js
CMD ["node", "src/server.js"]