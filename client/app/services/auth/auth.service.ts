import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  public user = window['user'];
  private _loginURL = 'api/auth/login';
  private _logoutURL = 'api/auth/signout';
  private _signupURL = 'api/auth/signup';

  constructor(private http: HttpClient) {

  }

  isAuthenticated(): boolean {
    return (!!this.user);
  }

  login(credentials: any): Promise<any> {
    const body = JSON.stringify(credentials);

    return this.http.post(this._loginURL, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .toPromise()
      .then(res => { this.user = res; return this.user; })
      .catch(this.handleError);
  }

  signup(user: any): Promise<any> {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this._signupURL, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .toPromise()
      .then(res => { this.user = res; return this.user; })
      .catch(this.handleError);
  }

  logout(): Promise<any> {

    return this.http.get(this._logoutURL, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .toPromise()
      .then(res => { return res })
      .catch(this.handleError);
  }

  private handleError(res) {
    console.error(res.error.message);
    return Promise.reject(res.error.message || 'Server error');
  }
}
