import helpers from './helpers';
import router from '../router';

const {
    allProductsDetails,
    productCreate,
    productDetails,
    productDelete,
    productUpdate,
} = helpers;

router.get('/findAll', allProductsDetails);
// the end point to find products saved in database
router.get('/:id', productDetails);
// the end point to create product and save to database
router.post('/create', productCreate);
router.put('/:productsId', productUpdate);
router.delete('/:id', productDelete);

export default router;
