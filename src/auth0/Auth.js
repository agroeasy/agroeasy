import auth0 from 'auth0-js';
import { message } from 'antd';
import Cookies from 'js-cookie';

import history from '../components/history/History';
import { AUTH0 }from './constants';

const { AUDIENCE, CLIENTID, DOMAIN, REDIRECTURI, RESPONSETYPE, SCOPE } = AUTH0;

export default class Auth {

    auth0 = new auth0.WebAuth({
        audience: AUDIENCE,
        clientID: CLIENTID,
        domain: DOMAIN,
        redirectUri: REDIRECTURI,
        responseType: RESPONSETYPE,
        scope: SCOPE,
    });

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                history.replace('/');
                message(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    getTokens() {
        return Cookies.getJSON('tokens');
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        const expiresAt = new Date((authResult.expiresIn * 1000) + new Date().getTime());
        //The Access Token is a credential that can be used by an application to access an API.
        const accessToken = authResult.accessToken;
        //The id_token contains user profile attributes represented in the form of claims. 
        //The ID Token is consumed by the application and used to get user information like 
        //the user's name, email, and so forth, typically used for UI display.
        const idToken = authResult.idToken;

        Cookies.set('tokens', { accessToken, idToken }, { expires: expiresAt });
        // navigate to the profile route
        history.replace('/profile');
    }
   
    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.logout();
                message(`Could not get a new token (${err.error}: ${err.error_description}).`);
            }
        });
    }

    logout() {
        // Remove tokens
        Cookies.remove('tokens');

        this.auth0.logout();

        // navigate to the home route
        history.replace('/');
    }

    isAuthenticated() {
        const tokens = this.getTokens();
        return tokens !== undefined;
    }
}
