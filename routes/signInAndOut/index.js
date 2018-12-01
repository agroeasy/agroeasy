const router = require('../router');

const { signInUser, logout, allUsers } = require('./helper');

router.post('/signin', signInUser);

router.get('/logout', logout);

router.get('/findusers', allUsers);

module.exports = router;
