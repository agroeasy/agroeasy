import configureStore from './configStore';
import rootSaga from '../sagas';

const store = configureStore();
store.runSaga(rootSaga);

export default store;
