import React, { Component } from 'react';
import Auth from './Auth';

class Callback extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <div >
                <h1>Loading</h1> <h1>Loading</h1>
                <h1>Loading</h1> <h1>Loading</h1>
            </div>
        );
    }
}

export default Callback;
