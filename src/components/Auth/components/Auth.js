import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
      domain: 'agroeasy.auth0.com',
      clientID: 'vAkAOPDvC9MNzvi4EU-0pW9DSuiOP1w8',
      redirectUri: 'http://localhost:4000',
      responseType: 'token id_token',
      scope: 'openid',
  });

  login() {
      this.auth0.authorize();
  }
}
