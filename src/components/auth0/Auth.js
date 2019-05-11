import auth0 from 'auth0-js';
import history from '../history/History';

// export default class Auth {
//   auth0 = new auth0.WebAuth({
//       clientID: 'vAkAOPDvC9MNzvi4EU-0pW9DSuiOP1w8',
//       domain: 'agroeasy.auth0.com',
//       redirectUri: 'http://localhost:4000/profile',
//       responseType: 'token id_token',
//       scope: 'openid profile',
//   });

//   login() {
//       this.auth0.authorize();
//   }
//   parseTokens() {
//       return new Promise((resolve, reject) => this.auth0.parseHash((err, result) => {
//           if (err) {
//               reject(err);
//           } else {
//               resolve({ ...result, expiresAt: (result.expiresIn * 1000) + new 
//               Date().getTime() });
//           }
//       }
//       ));
//   }

//   logout(){
//       this.auth0.logout();
//   }
// }

// src/Auth/Auth.js

// ...
export default class Auth {
    accessToken;
    idToken;
    expiresAt;

    auth0 = new auth0.WebAuth({
        clientID: 'vAkAOPDvC9MNzvi4EU-0pW9DSuiOP1w8',
        domain: 'agroeasy.auth0.com',
        redirectUri: 'http://localhost:4000/profile',
        responseType: 'token id_token',
        scope: 'openid profile',
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
            console.log(authResult);
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                history.replace('/');
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    getAccessToken() {
        return this.accessToken;
    }

    getIdToken() {
        return this.idToken;
    }

    setSession(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Set the time that the Access Token will expire at
        const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = expiresAt;

        console.log(expiresAt);
        // navigate to the home route
        history.replace('/profile');
    }

    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.logout();
                console.log(err);
                alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
            }
        });
    }

    logout() {
        // Remove tokens and expiry time
        this.accessToken = null;
        this.idToken = null;
        this.expiresAt = 0;

        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');

        this.auth0.logout();

        // navigate to the home route
        history.replace('/');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = this.expiresAt;
        return new Date().getTime() < expiresAt;
    }
}
