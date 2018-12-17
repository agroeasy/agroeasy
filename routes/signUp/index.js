import helpers from './helpers';
import router from '../router';

const { signUpUser } = helpers;

router.post('/signup', signUpUser);

export default router;
