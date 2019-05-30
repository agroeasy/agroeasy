import React from 'react';

import Auth from '../../auth0';
import { SIGNIN_BUTTON } from '../constants';

export default class Signin extends React.Component {

    handleAuth = () => {
        const auth = new Auth();
        auth.login();
    };

    render() {
        return (
            <div>
                <button className = {SIGNIN_BUTTON} onClick = {this.handleAuth}>{"Signin"}</button>
            </div>
        );
    }
}
