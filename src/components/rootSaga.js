import { effects } from 'redux-saga';

import producerItems from './producerItems';
import contactus from './contactUs';
import signUp  from './signup';
import userProfile from './userProfile';

export default function* rootSaga(){
    yield effects.all([
        contactus.sagas(),
        producerItems.sagas(),
        signUp.sagas(),
        userProfile.sagas(),
    ]);
}
