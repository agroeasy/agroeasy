import express from 'express';

import helpers from './products';

const router = express.Router();
const { searchProducts } = helpers;

router.get('/:q', searchProducts);

export default router;
