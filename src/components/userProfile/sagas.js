import { effects } from 'redux-saga';
import {  REQUEST_AUTH_USER_JWT } from './actionTypes';
import { SIGN_URL } from './constants';
import app from '../app';

const { actions: { userDataNotFound, getUserData } } = app;

/**
 * Makes a request to sign up a user
 *
 * @param {object} [action] The data passed from the watcher generator
 *
 * @return {object} An object containing either "data" or "error"
 */
function* getAllUserInfo(action) {
    try {
        const { payload } = action;
        const response = yield fetch(`${SIGN_URL}?idToken=${payload}`, {
            method: 'GET',
        });

        if(response.ok){
            const data = yield response.json();
            yield effects.put(getUserData(data));
        } else { 
            const data = yield response.json();
            yield effects.put(userDataNotFound(data));
        }

    } catch (error) {
        // eslint-disable-next-line no-console
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

export default function* () {
    yield effects.all([
        watchgetAllUserInfo(),
    ]);
}