import express from 'express';

import helpers from './helpers';

const router = express.Router();
const { cartCreate, cartDeleteAll, cartDeleteOne, cartUpdate, getCartsByUserId } = helpers;

router.post('/add', cartCreate);
router.delete('/clear/:userId', cartDeleteAll);
router.delete('/remove/:id', cartDeleteOne);
router.put('/:id', cartUpdate);
router.get('/fetch/:userId', getCartsByUserId);

export default router;
