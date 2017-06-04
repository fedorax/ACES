import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    public user = window['user'];
    private _loginURL = 'api/auth/login';
    private _logoutURL = 'api/auth/signout';
    private _signupURL = 'api/auth/signup';

    constructor(private http: Http) {

    }

    isAuthenticated(): boolean {
        return (!!this.user);
    }

    login(credentials: any): Promise<any> {
        const body = JSON.stringify(credentials);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this._loginURL, body, options)
            .toPromise()
            .then(res => { this.user = res.json(); return this.user; })
            .catch(this.handleError);
    }

    signup(user: any): Promise<any> {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this._signupURL, body, options)
                        .toPromise()
                        .then(res => { this.user = res.json(); return this.user; })
                        .catch(this.handleError);
    }

    logout(): Promise<any> {
        const body = '';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.get(this._logoutURL, options)
            .toPromise()
            .then(res => { return res.json(); })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Promise.reject(error.json().message || 'Server error');
    }
}
