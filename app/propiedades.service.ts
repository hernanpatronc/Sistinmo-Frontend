import { Injectable } from '@angular/core';
import { Property } from './property';
import { User } from './dashboard/user/user-model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import initNotify = require('../assets/js/notify.js');
import { Statistics } from './estadisticas';
import { Fields } from './fields';

@Injectable()
export class PropiedadesService {
    constructor(private http: Http) { }
    getProperties(): Promise<Property[]> {
        return this.http.get("http://localhost:3002/propiedades")
             .toPromise()
             .then(response => response.json() as Property[])
             .catch(this.handleError);
    } // stub
    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        initNotify("Error de conexión con base de datos", 4);
        return Promise.reject(error.message || error);
    }
    getStatistics():Promise<Statistics>{
        return this.http.get("http://localhost:3002/api/estadisticas")
             .toPromise()
             .then(response => response.json() as Statistics)
             .catch(this.handleError);
    }
    getProperty(legajo): Promise<Property[]> {
        return this.http.get("http://localhost:3002/propiedades/" + legajo)
             .toPromise()
             .then(response => response.json() as Property[])
             .catch(this.handleError);
    }
    getUsers() : Promise<User[]> {
        return this.http.get("http://localhost:3002/api/user")
             .toPromise()
             .then(response => response.json().users as User[])
             .catch(this.handleError);
    }
    getFields() : Promise<Fields> {
        return this.http.get("http://localhost:3002/api/fields")
             .toPromise()
             .then(response => response.json()[0] as Fields)
             .catch(this.handleError);
    }
}