import express from 'express';
import signInAndOut from './signInAndOut';
import signUp from './signUp';
import producer from './producer';
import product from './product';
import contactUs from './contactUs';
import productImage from './productImage';

const router = express.Router();

router.use('/account', signInAndOut);
router.use('/account', signUp);
router.use('/account', contactUs);
router.use('/producer', producer);
router.use('/product', product);
router.use('/api', productImage);

export default router;
