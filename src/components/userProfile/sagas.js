import { effects } from 'redux-saga';
import { REQUEST_AUTH_USER_JWT, REQUEST_USER_UPDATE } from './actionTypes';
import { SIGN_URL } from './constants';
import app from '../app';

const {
    actions: { userDataNotFound, setUserData },
} = app;

/**
 * Makes a request to sign up a user
 *
 * @param {object} [action] The data passed from the watcher generator
 */
function* getAllUserInfo(action) {
    try {
        const { idToken } = action.payload;
        const response = yield fetch(`${SIGN_URL}?idToken=${idToken}`, {
            method: 'GET',
        });

        if (response.ok) {
            const data = yield response.json();
            yield effects.put(setUserData(data));
        } else {
            const data = yield response.json();
            yield effects.put(userDataNotFound(data));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

function* updateUserData(action) {
    try {
        const { user, userId } = action.payload;

        const response = yield fetch(`/account/updateUser?userId=${userId}`, {
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
        });

        if (response.ok) {
            const data = yield response.json();
            yield effects.put(setUserData(data));
        } else {
            //    TODO: create the user because there is record for him. maybe he joined with google
            const data = yield response.json();
            yield effects.put(userDataNotFound(data));
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_AUTH_USER_MAIL REQUEST_AUTH_USER_MAIL} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */
function* watchgetAllUserInfo() {
    try {
        yield effects.takeLatest(REQUEST_AUTH_USER_JWT, getAllUserInfo);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(Error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_USER_UPDATE REQUEST_USER_UPDATE} action.
 * Triggers request to update user data
 *
 * @return {void}
 */
function* watchupdateUserData() {
    try {
        yield effects.takeLatest(REQUEST_USER_UPDATE, updateUserData);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(Error);
    }
}

export default function*() {
    yield effects.all([watchgetAllUserInfo(), watchupdateUserData()]);
}
