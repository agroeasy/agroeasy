import { signupSagas } from '../signup';

export default function* rootSaga () {
    yield [
        signupSagas(),
    ];
}
