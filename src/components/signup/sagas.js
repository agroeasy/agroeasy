import { call, put, takeLatest } from 'redux-saga/effects';
import { userConstants } from './actionTypes';
const { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } = userConstants;

// The url derived from our .env file
const signupUrl = 'http://localhost:4000/account/signup';

function signupApi (email, password) {
    // call to the "fetch".  this is a "native" function for browsers
    // that's conveniently polyfilled in create-react-app if not available
    return fetch(signupUrl, {
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    })
        .then(response => response.json())
        .then(json => json)
        .catch(error => { throw error; });
}

// This will be run when the SIGNUP_REQUESTING
// Action is found by the watcher
function* signupFlow (action) {
    try {
        const { email, password } = action;

        // pulls "calls" to our signupApi with our email and password
        // from our dispatched signup action, and will PAUSE
        // here until the API async function, is complete!
        const response = yield call(signupApi, email, password);

        // when the above api call has completed it will "put",
        // or dispatch, an action of type SIGNUP_SUCCESS with
        // the successful response.
        yield put({ response, type: REGISTER_SUCCESS });
    } catch (error) {
    // if the api call fails, it will "put" the SIGNUP_ERROR
    // into the dispatch along with the error.
        yield put({ error, type: REGISTER_FAILURE });
    }
}

// Watches for the SIGNUP_REQUESTING action type
// When it gets it, it will call signupFlow()
// WITH the action we dispatched
function* signupWatcher () {
    // takeLatest() takes the LATEST call of that action and runs it
    // if we we're to use takeEvery, it would take every single
    // one of the actions and kick off a new task to handle it
    // CONCURRENTLY!!!
    yield takeLatest(REGISTER_REQUEST, signupFlow);
}

export default signupWatcher;
