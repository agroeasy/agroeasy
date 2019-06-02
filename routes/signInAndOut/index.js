import express from 'express';

import helpers from './helpers';

const router = express.Router();
const { allUsers, signInUser } = helpers;

router.get('/findusers', allUsers);
router.get('/signin', signInUser);

export default router;
