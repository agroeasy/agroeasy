const router = require('../router');

const {
    productCreate,
    productDetails,
    allProductsDetails,
    productDelete,
    productUpdate,
} = require('./helper');

router.get('/findAll', allProductsDetails);
// the end point to find products saved in database
router.get('/:id', productDetails);
// the end point to create product and save to database
router.post('/create', productCreate);
router.put('/:productsId', productUpdate);
router.delete('/:id', productDelete);

module.exports = router;
