const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const productsController = require('../controllers/productsController');

// the end point to create product and save to database
router.post('/create',productsController.productCreate);

// the end point to find products saved in database
router.get('/:id', productsController.productDetails);

router.get('/', productsController.allProductsDetails);

router.delete('/:id', productsController.productDelete);

router.put('/:id', productsController.productUpdate);



module.exports = router;