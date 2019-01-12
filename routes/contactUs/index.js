import express from 'express';

import helpers from './helpers';

const router = express.Router();
const { contactUsmail } = helpers;

router.post('/sendmail', contactUsmail);

export default router;
