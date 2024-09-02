const express = require('express');
const router = express.Router();

const authentication = require('./Authentication');

router.post('/', authentication.create_user);
router.post('/:id', authentication.connect_user);

router.get('/', (request, response) => {
    console.log("GET ALL USER");
    response.send("GET ALL USER");
});

router.delete('/', (request, response) => {
    console.log("DELETE ALL USER");
    response.send("DELETE ALL USER");
});

router.get('/:id', (request, response) => {
    console.log("GET SPECIFIC USER");
    response.send("GET SPECIFIC USER");
});

router.delete('/:id', (request, response) => {
    console.log("DELETE SPECIFIC USER");
    response.send("DELETE SPECIFIC USER");
});

router.put('/:id', (request, response) => {
    console.log("MODIFY SPECIFIC USER");
    response.send("MODIFY SPECIFIC USER");
});

module.exports = router;