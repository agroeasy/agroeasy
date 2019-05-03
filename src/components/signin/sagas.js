import { effects } from 'redux-saga';
import { setCookie } from '../app/actions';
import { SIGNIN_REQUEST } from './actionTypes';
import { SIGNIN_URL } from './constants';
import { signinSuccess, signinFail } from './actions';

/**
 * Makes a request to sign in a user
 *
 * @param {object} [action] The data passed from the watcher generator
 *
 * @return {object} An object containing either "data" or "error"
 */
function* signinUser(action) {
    const { payload } = action;
    try {
        const response = yield fetch(SIGNIN_URL, {
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        if (response.ok) {
            const data = yield response.json();
            yield effects.put(signinSuccess());
            yield effects.put(setCookie(data));
        } else {
            const data = yield response.json();
            yield effects.put(signinFail(data));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}
/**
 * @function
 * Watches for the {@link actionTypes.SIGNIN_REQUEST SIGNIN_REQUEST} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */
function* watchSigninUser() {
    try {
        yield effects.takeLatest(SIGNIN_REQUEST, signinUser);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function*() {
    yield effects.all([watchSigninUser()]);
}
