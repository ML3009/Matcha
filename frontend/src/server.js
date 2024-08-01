const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware pour servir les fichiers statiques de l'application React
app.use(express.static('/app/build'));

// Route pour servir l'application React
app.get('*', (req, res) => {
    res.sendFile('/app/build/index.html');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});