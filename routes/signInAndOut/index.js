const router = require('../router');

const { allUsers, logout, signInUser } = require('./helper');

router.post('/signin', signInUser);
router.get('/logout', logout);
router.get('/findusers', allUsers);

module.exports = router;
