import { effects } from 'redux-saga';

import signin  from './signin';
import signUp  from './signup';
import contactus from './contactUs';

export default function* rootSaga(){
    yield effects.all([
        contactus.sagas(),
        signin.sagas(),
        signUp.sagas(),
    ]);
}
