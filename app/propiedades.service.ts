import { Injectable } from '@angular/core';
import { Property } from './property';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PropiedadesService {
    constructor(private http: Http) { }
    getProperties(): Promise<Property[]> {
        return this.http.get("http://localhost:3001/propiedades")
             .toPromise()
             .then(response => response.json() as Property[])
             .catch(this.handleError);
    } // stub
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getProperty(legajo): Promise<Property[]> {
        return this.http.get("http://localhost:3001/propiedades/" + legajo)
             .toPromise()
             .then(response => response.json() as Property[])
             .catch(this.handleError);
    }
}