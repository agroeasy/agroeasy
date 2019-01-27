import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Favicon from 'react-favicon';

import router from './components/router';
import store from './store';

const { Routes: App } = router.components;

ReactDOM.render(
    <Provider store={store}>
        <Favicon url="/favicon.png" />
        <App />
    </Provider>,
    document.getElementById('app')
);
