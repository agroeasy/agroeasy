import express from 'express';
import signInAndOut from './signInAndOut';
import signUp from './signUp';
import producer from './producer';
import product from './product';
import contactUs from './contactUs';

const router = express.Router();

router.use('/api', signInAndOut);
router.use('/account', signUp);
router.use('/account', contactUs);
router.use('/producer', producer);
router.use('/product', product);

export default router;
