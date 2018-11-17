const express = require('express');
const router = express.Router();

const {
    productCreate,
    productDetails,
    allProductsDetails,
    productDelete,
    productUpdate,
} = require('../controllers/productsController');

router.get('/', allProductsDetails);

// the end point to find products saved in database
router.get('/:id', productDetails);

// the end point to create product and save to database
router.post('/create', productCreate);

router.put('/:productsId', productUpdate);

router.delete('/:id', productDelete);

module.exports = router;
