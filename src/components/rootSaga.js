import { effects } from 'redux-saga';

import signin  from './signin';
import signUp  from './signup';
import home from './home';

export default function* rootSaga(){
    yield effects.all([
        home.sagas(),
        signin.sagas(),
        signUp.sagas(),
    ]);
}
