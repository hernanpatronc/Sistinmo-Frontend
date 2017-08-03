import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import initNotify = require('../assets/js/notify.js');

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        initNotify("Error de conexión con base de datos", 4);
        return Promise.reject(error.message || error);
    }
    login(username: string, password: string) : Promise<any>{
        return this.http.post("http://localhost:3002/api/user", { username: username, password: password }).toPromise()
            .then((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user.success) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.user));
                    localStorage.setItem('token', JSON.stringify(user.token));
                }
                else {
                    initNotify(user.message,4);
                }
            }).catch(this.handleError)
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}