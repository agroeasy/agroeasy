import express from 'express';

import helpers from './helpers';

const router = express.Router();
const { cartCreate, cartDeleteAll, cartDeleteOne, cartUpdate, getCartsByUserId } = helpers;

router.post('/add', cartCreate);
router.delete('/clear', cartDeleteAll);
router.delete('/remove', cartDeleteOne);
router.put('/:id', cartUpdate);
router.get('/fetch', getCartsByUserId);

export default router;
