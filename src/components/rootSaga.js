import { effects } from 'redux-saga';

import signin  from './signin';
import signUp  from './signup';

export default function* rootSaga(){
    yield effects.all([
        signin.sagas(),
        signUp.sagas(),
    ]);
}
