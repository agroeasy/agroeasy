import express from 'express';

import helpers from './searchProducts';

const router = express.Router();
const { searchProducts } = helpers;

router.post('/searching', searchProducts);

export default router;
