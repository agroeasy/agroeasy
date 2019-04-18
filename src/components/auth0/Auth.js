import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
      clientID: 'vAkAOPDvC9MNzvi4EU-0pW9DSuiOP1w8',
      domain: 'agroeasy.auth0.com',
      redirectUri: 'http://localhost:4000/profile',
      responseType: 'token id_token',
      scope: 'openid profile',
  });

  login() {
      this.auth0.authorize();
  }
  parseTokens() {
      return new Promise((resolve, reject) => this.auth0.parseHash((err,
          result) => {
          if (err) {
              reject(err);
          } else {
              resolve({ ...result, expiresAt: (result.expiresIn * 1000) + new 
              Date().getTime() });
          }
      }
      ));
  }

  logout(){
      this.auth0.logout();
  }
}
