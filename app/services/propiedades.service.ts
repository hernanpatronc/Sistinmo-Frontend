import { Injectable } from '@angular/core';
import { Property } from '../models/property';
import { User } from '../models/user-model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import initNotify = require('../../assets/js/notify.js');
import { Statistics } from '../models/estadisticas';
import { Fields } from '../models/fields';
import {Router,ActivatedRoute} from '@angular/router';

@Injectable()
export class PropiedadesService {
    constructor(private http: Http, private router : Router, private activatedRoute : ActivatedRoute) { }
    getProperties(): Promise<Property[]> {
        return this.http.get("http://localhost:3002/api/propiedades?token=" + localStorage.getItem('token').replace(/"/g,''))
             .toPromise()
             .then(response => 
                {
                    if (response.json()["success"])
                        return response.json()["data"] as Property[];
                    else{
                        initNotify("Token vencido", 4);
                        this.router.navigate(["../login"], { relativeTo : this.activatedRoute});
                        //return this.handleError(response.json()["message"])
                    }
                })
             .catch(this.handleError);
    } // stub
    getStatistics():Promise<Statistics>{
        return this.http.get("http://localhost:3002/api/estadisticas?token=" + localStorage.getItem('token').replace(/"/g,''))
             .toPromise()
             .then(response => 
                {
                    if (response.json()["success"])
                        return response.json()["data"] as Statistics;
                    else{
                        initNotify("Token vencido", 4);
                        this.router.navigate(["../login"], { relativeTo : this.activatedRoute});
                        //return this.handleError(response.json()["message"])
                    }
                        
                })
             .catch(this.handleError);
    }
    getProperty(legajo): Promise<Property[]> {
        return this.http.get("http://localhost:3002/api/propiedades/" + legajo + "?token=" + localStorage.getItem('token').replace(/"/g,''))
             .toPromise()
             .then(response => 
                {
                    if (response.json()["success"])
                        return response.json()["data"] as Property[];
                   else{
                       initNotify("Token vencido", 4);
                        this.router.navigate(["../login"], { relativeTo : this.activatedRoute});
                        //return this.handleError(response.json()["message"])
                    }
                })
             .catch(this.handleError);
    }
    getUsers() : Promise<User[]> {
        return this.http.get("http://localhost:3002/api/user?token=" + localStorage.getItem('token').replace(/"/g,''))
             .toPromise()
             .then(response => 
                {
                    if (response.json()["success"])
                        return response.json()["data"] as User[];
                    else{
                        initNotify("Token vencido", 4);
                        this.router.navigate(["../login"], { relativeTo : this.activatedRoute});
                        //return this.handleError(response.json()["message"])
                    }
                })
             .catch(this.handleError);
    }
    getFields() : Promise<Fields> {
        return this.http.get("http://localhost:3002/api/fields?token=" + localStorage.getItem('token').replace(/"/g,''))
             .toPromise()
             .then(response => 
                {
                    if (response.json()["success"])
                        return response.json()["data"][0] as Fields;
                    else{
                        initNotify("Token vencido", 4);
                        this.router.navigate(["../login"], { relativeTo : this.activatedRoute});
                        //return this.handleError(response.json()["message"])
                    }
                })
             .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        initNotify("Error de conexión con base de datos", 4);
        return Promise.reject(error.message || error);
    }
}