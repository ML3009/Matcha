# Utiliser une image de base Node.js
FROM node:lts-alpine

# Définir le répertoire de travail dans le conteneur
RUN mkdir /app
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package.json

# Installer les dépendances
RUN npm i
RUN apk --update --no-cache add curl

COPY src src
COPY public public

COPY vite.config.js vite.config.js
COPY index.html index.html

# Construire l'application React
RUN npm run build


# Démarrer le serveur Node.js
CMD npm run dev