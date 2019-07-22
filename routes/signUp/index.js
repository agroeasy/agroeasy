import express from 'express';

import helpers from './helpers';

const router = express.Router();
const { signUpUser, updateUser } = helpers;

router.post('/signup', signUpUser);
router.put('/updateUser', updateUser);

export default router;
