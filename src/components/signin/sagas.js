import { effects } from 'redux-saga';
import {  SIGNIN_REQUEST } from './actionTypes';
import { SIGNIN_URL } from './constants';
import { signinSuccess, signinFailure } from './actions';

function* signinUser(action){
    const { email, password } = action;
    try {
        const response = yield fetch(SIGNIN_URL, {
            body: JSON.stringify(email, password),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        if(response.ok){
            const data = yield response.json();
            yield effects.put(signinSuccess(data));
        }
    } catch(error){
        yield effects.put(signinFailure(error));
    }
}

function* watchSigninUser(){
    try {
        yield effects.takeLatest(SIGNIN_REQUEST, signinUser);
    } catch(error){
        console.log(error);
    }
}

export default function* (){
    yield effects.all([
        watchSigninUser(),
    ]);
}
