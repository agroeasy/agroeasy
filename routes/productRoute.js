const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const productsController = require('../controllers/productsController');

const { productCreate,
  productDetails,
  allProductsDetails,
  productDelete,
  productUpdate } = productsController;

// the end point to create product and save to database
router.post('/create', productCreate);

// the end point to find products saved in database
router.get('/:id', productDetails);

router.get('/', allProductsDetails);

router.delete('/:id', productDelete);

router.put('/:productsId', productUpdate);

module.exports = router;
