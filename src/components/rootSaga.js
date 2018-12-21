import { effects } from 'redux-saga';

import signUp  from './signup';

export default function* rootSaga(){
    yield effects.all([
        signUp.sagas(),
    ]);
}
