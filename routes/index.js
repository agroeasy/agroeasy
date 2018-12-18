import express from 'express';
import signInAndOut from './signInAndOut';
import signUp from './signUp';
import producer from './producer';
import product from './product';

const router = express.Router();

router.use('/account', signInAndOut);
router.use('/account', signUp);
router.use('/producer', producer);
router.use('/product', product);

export default router;
