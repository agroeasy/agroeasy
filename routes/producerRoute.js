const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const producersController = require('../controllers/producersController');

// the end point to create products in the database
router.post('/create',producersController.producerCreate);

// the end point to find producers saved in database using id
router.get('/:id', producersController.producerDetails);

router.get('/', producersController.allProducersDetails); // find all

router.delete('/:id', producersController.producerDelete);// delete by id

router.put('/:id', producersController.producerUpdate);//update by id

module.exports = router;