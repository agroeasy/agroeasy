import express from 'express';

import parser from '../uploadParser';
import helpers from './helpers';

const router = express.Router();
const { imageCreate } = helpers;

router.post('/createImage', parser.single('image'), imageCreate);

export default router;
