import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterApp from './CounterApp';

const initialState = {
    counter: 0,
    name: 'John',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'INCREASE_COUNTER':
        return{ counter: state.counter+1, name: 'Josh' };
    case 'DECREASE_COUNTER': 
        return{ counter: state.counter-1, name: 'Chioma' };
    case 'NAME_CHANGE': 
        return{ counter: state.counter + 1 * 2, name: 'Obinna' };
    }
    return state;
};

const store = createStore(reducer);

class Counter extends React.Component {
    
    render() {
        return(
            <Provider store={store }>
                <CounterApp />
            </Provider>
        );
    }
}

export default Counter;
