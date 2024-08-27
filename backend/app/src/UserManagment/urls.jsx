const express = require('express');
const router = express.Router();

const authentication = require('Authentication')

router.post('/', authentication.create_user)
router.post('/:id', authentication.connect_user)




router.get('/', (request, results) => {
    console.log("GET ALL USER");
})

router.delete('/', (request, results) => {
    console.log("DELETE ALL USER");
})


router.get('/:id', (request, results) => {
    console.log("GET SPECIFIC USER");
})

router.delete('/:id', (request, results) => {
    console.log("DELETE SPECIFIC USER");
})

router.put('/:id', (request, results) => {
    console.log("MODIFY SPECIFIC USER");
})
