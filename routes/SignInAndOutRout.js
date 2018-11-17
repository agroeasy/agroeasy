const express = require('express');
const router = express.Router();

const { signInUser, logout, allUsers } = require('../controllers/signInAndOutController');

router.post('/signin', signInUser);

router.get('/logout', logout);

router.get('/findusers', allUsers);

module.exports = router;
