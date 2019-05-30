import auth0 from 'auth0-js';
import history from '../history/History';
import jwtDecode from 'jwt-decode';

export default class Auth {

    accessToken;
    idToken;
    expiresAt;

    auth0 = new auth0.WebAuth({
        audience: "https://agroeasy.auth0.com/userinfo",
        clientID: 'vAkAOPDvC9MNzvi4EU-0pW9DSuiOP1w8',
        domain: 'agroeasy.auth0.com',
        redirectUri: 'http://localhost:4000/callback',
        responseType: 'token id_token',
        scope: 'openid email meta_data profile',
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
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    getUserProfile(){
        const idToken = this.getIdToken();
        if(idToken){
            return jwtDecode(idToken);
        }else {
            return {};
        }
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
                alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
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
        // console.log(expiresAt);
        return new Date().getTime() < expiresAt;
    }
}
