const {
    allProducersDetails,
    producerCreate,
    producerDetails,
    producerDelete,
    producerUpdate,
} = require('./helper');
const router = require("../router");

router.get('/findAll', allProducersDetails); // find all
// the end point to find producers saved in database using id
router.get('/:id', producerDetails);
// the end point to create products in the database
router.post('/create', producerCreate);
router.put('/:producersId', producerUpdate);// update by id
router.delete('/:id', producerDelete);// delete by id

module.exports = router;
