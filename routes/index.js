import express from 'express';
import cart from './cart';
import signInAndOut from './signInAndOut';
import signUp from './signUp';
import producer from './producer';
import product from './product';
import contactUs from './contactUs';
import productImage from './productImage';

const router = express.Router();

router.use('/cart', cart);
router.use('/api', signInAndOut);
router.use('/account', signUp);
router.use('/account', contactUs);
router.use('/producer', producer);
router.use('/product', product);
router.use('/api', productImage);

export default router;
