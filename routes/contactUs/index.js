import express from 'express';

import { contactUsmail } from './helpers';

const router = express.Router();

router.post('/sendmail', contactUsmail);

export default router;
