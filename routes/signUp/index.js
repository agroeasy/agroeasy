import express from 'express';

import helpers from './helpers';

const router = express.Router();
const { signUpUser } = helpers;

router.post('/signup', signUpUser);

export default router;
