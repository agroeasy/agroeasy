import helpers from './helpers';
import router from '../router';

const { allUsers, logout, signInUser } = helpers;

router.get('/findusers', allUsers);
router.get('/logout', logout);
router.post('/signin', signInUser);

export default router;
