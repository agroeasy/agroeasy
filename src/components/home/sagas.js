import { effects } from 'redux-saga';
import {  REQUEST_SENDMAIL } from './actionTypes';
import { CONTACT_URL } from './constants';
import { mailSent, failedToSendmail } from './actions';

/**
 * Makes a request to send mail
 *
 * @param {object} [action] The data passed from the watcher generator
 *
 * @return {object} An object containing either "data" or "error"
 */
function* contactMail(action){
    const { payload } = action;
    try {
        const response = yield fetch(CONTACT_URL, {
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        if(response.ok){
            const data = yield response.json();
            yield effects.put(mailSent(data));
        }
    } catch(error){
        yield effects.put(failedToSendmail(error));
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_SENDMAIL REQUEST_SENDMAIL} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */
function* watchContactMail(){
    try {
        yield effects.takeLatest(REQUEST_SENDMAIL, contactMail);
    } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* (){
    yield effects.all([
        watchContactMail(),
    ]);
}
