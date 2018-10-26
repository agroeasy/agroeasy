const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const producersController = require('../controllers/producersController');

const { producerCreate,
  producerDetails,
  allProducersDetails,
  producerDelete,
  producerUpdate } = producersController;

// the end point to create products in the database
router.post('/create', producerCreate);

// the end point to find producers saved in database using id
router.get('/:id', producerDetails);

router.get('/', allProducersDetails); // find all

router.delete('/:id', producerDelete);// delete by id

router.put('/:producersId', producerUpdate);// update by id

module.exports = router;
