const express = require('express');
const router = express.Router();

const {
    producerCreate,
    producerDetails,
    allProducersDetails,
    producerDelete,
    producerUpdate,
} = require('../controllers/producersController');

router.get('/', allProducersDetails); // find all

// the end point to find producers saved in database using id
router.get('/:id', producerDetails);

// the end point to create products in the database
router.post('/create', producerCreate);

router.put('/:producersId', producerUpdate);// update by id

router.delete('/:id', producerDelete);// delete by id

module.exports = router;
