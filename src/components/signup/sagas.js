import { effects } from 'redux-saga';
import { SIGNUP_REQUEST } from './actionTypes';
import { SIGNUP_URL } from './constants';
<<<<<<< HEAD
import { setCookie } from '../app/actions';
=======
>>>>>>> master
import { signupFail, signupSuccess } from './actions';
import Auth from '../../auth0/Auth';

const auth = new Auth();

/**
 * Makes a request to sign up a user
 *
 * @param {object} [action] The data passed from the watcher generator
 *
 * @return {object} An object containing either "data" or "error"
 */
function* signupUser(action) {
    try {
        const { payload } = action;
        const response = yield fetch(SIGNUP_URL, {
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

<<<<<<< HEAD
        if (response.ok) {
            const data = yield response.json();
            yield effects.put(signupSuccess());
            yield effects.put(setCookie(data));
        } else {
=======
        if(response.ok){
            yield effects.put(signupSuccess()) && auth.login();
        } else { 
>>>>>>> master
            const data = yield response.json();
            yield effects.put(signupFail(data));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.SIGNUP_REQUEST SIGNUP_REQUEST} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */
function* watchSignupUser() {
    try {
        yield effects.takeEvery(SIGNUP_REQUEST, signupUser);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(Error);
    }
}

export default function*() {
    yield effects.all([watchSignupUser()]);
}
