import { effects } from 'redux-saga';

import producerItems from './producerItems';
import contactus from './contactUs';
import signin  from './signin';
import signUp  from './signup';
import home  from './home';

export default function* rootSaga(){
    yield effects.all([
        contactus.sagas(),
        producerItems.sagas(),
        signin.sagas(),
        home.sagas(),
        signUp.sagas(),
    ]);
}
