const router = require('../router');

const { signUpUser } = require('./helper');

router.post('/signup', signUpUser);

module.exports = router;
