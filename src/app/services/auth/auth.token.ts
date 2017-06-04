import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AUTH_TOKEN_KEY';

@Injectable()
export class AuthToken {
  private authToken: string;

  isAuthenticated() {
    return !!this.getToken();
  }

  getToken() {
    this.authToken = localStorage.getItem(TOKEN_KEY);
    return this.authToken;
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    return this.getToken();
  }

  removeToken() {
    this.authToken = null;
    localStorage.removeItem(TOKEN_KEY);
  }
}
