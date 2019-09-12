import express from 'express';

import helpers from './searchProducts';

const router = express.Router();
const { searchProducts } = helpers;

router.get('/searching', searchProducts);

export default router;
