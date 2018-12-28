import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PracticeApp from './PracticeApp';

const initialState = {
    email: 'Joshuaobinna93@gmail.com',
    gender: 'Male',
    name: 'Josh',
    phone: '+2347061589692',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'NEXT_PERSON':
        return {
            ...state,
            email: 'simpcy93@gmail.com',
            gender: "Female",
            name: 'Simpcy',
            phone: '+23470825261762',
        };

    case 'PREVIOUS_PERSON':
        return {
            email: 'Joshuaobinna93@gmail.com',
            gender: 'Male',
            name: 'Josh',
            phone: '+2347061589692',
        };
        
    default:
        return state;
    }
};

const store = createStore(reducer);

class Practice extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <div style={{ backgroundImage: 'url(/images/imagecollection.gif)', backgroundRepeat: 'no-repeat',  left: 350, marginTop: 40, padding: 20,
                    position: 'relative', width: 1500 }}
                >
                    <PracticeApp />
                </div>
            </Provider>
        );
    }
}

export default Practice;
