import { effects } from 'redux-saga';
import {  SIGNUP_REQUEST } from './actionTypes';
import { SIGNUP_URL } from './constants';
import { signupSuccess, signupFailure } from './actions';
// The url derived from our .env file

/* const signupApi = user => {
    // call to the "fetch".  this is a "native" function for browsers
    // that's conveniently polyfilled in create-react-app if not available
    fetch(signupUrl, {
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    })
        .then(response => response.json())
        .then(json => json)
        .catch(error => { throw error; });
}; */

function* signupUser(action) {
    try {
        const { user } = action;
        const response = yield fetch(SIGNUP_URL, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        if(response.ok){
            const data = yield response.json();
            console.log(data);
            yield effects.put(signupSuccess(data));
        }
    } catch (error) {
        console.log(error);
        yield effects.put(signupFailure(error));
    } 
}

function* watchSignupUser() {
    try {
        yield effects.takeEvery(SIGNUP_REQUEST, signupUser);
    } catch (error) {
        console.log(error);
    }
}

export default function* () {
    yield effects.all([
        watchSignupUser(),
    ]);
}
