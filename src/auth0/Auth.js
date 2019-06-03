import auth0 from 'auth0-js';
import { message } from 'antd';

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

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.renewSession = this.renewSession.bind(this);
    }

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

    getExpiresAt() {
        return localStorage.getItem("expiresAt");
    }

    getAccessToken() {
        return localStorage.getItem("accessToken");
    }

    getIdToken() {
        return localStorage.getItem("idToken");
    }

    setSession(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Set the time that the Access Token will expire at
        const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        const accessToken = authResult.accessToken;
        const idToken = authResult.idToken;

        localStorage.setItem('expiresAt', expiresAt);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('idToken', idToken);
        
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

        // Remove tokens and expiry time
        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('idToken');
        localStorage.removeItem('expiresAt');
        
        this.auth0.logout();

        // navigate to the home route
        history.replace('/');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem("expiresAt"));
        return new Date().getTime() < expiresAt;
    }
}
