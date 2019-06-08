import { effects } from 'redux-saga';

import App from '../app';
import { fetchUserData } from './actions';
import { REQUEST_FETCH_USER_DATA } from './actionTypes';

const { selectors: { getUserData } } = App;

function* findUserData(){
    try {
        const user = yield effects.select(getUserData);
        // eslint-disable-next-line no-console
        console.log(user);
        if (user) {
            yield effects.put(fetchUserData(user));
        } else {
            // eslint-disable-next-line no-console
            console.log("User data not fetched");
        }
    } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

function* watchFetchUserData(){
    try {
        yield effects.takeEvery(REQUEST_FETCH_USER_DATA, findUserData);
    } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* (){
    yield effects.all([
        watchFetchUserData(),
    ]);
}
