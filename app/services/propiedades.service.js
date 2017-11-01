"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var initNotify = require('../../assets/js/notify.js');
var router_1 = require('@angular/router');
var PropiedadesService = (function () {
    function PropiedadesService(http, router, activatedRoute) {
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PropiedadesService.prototype.getProperties = function () {
        var _this = this;
        return this.http.get("http://localhost:3002/api/propiedades?token=" + localStorage.getItem('token').replace(/"/g, ''))
            .toPromise()
            .then(function (response) {
            if (response.json()["success"])
                return response.json()["data"];
            else {
                initNotify("Token vencido", 4);
                _this.router.navigate(["../login"], { relativeTo: _this.activatedRoute });
            }
        })
            .catch(this.handleError);
    }; // stub
    PropiedadesService.prototype.getStatistics = function () {
        var _this = this;
        return this.http.get("http://localhost:3002/api/estadisticas?token=" + localStorage.getItem('token').replace(/"/g, ''))
            .toPromise()
            .then(function (response) {
            if (response.json()["success"])
                return response.json()["data"];
            else {
                initNotify("Token vencido", 4);
                _this.router.navigate(["../login"], { relativeTo: _this.activatedRoute });
            }
        })
            .catch(this.handleError);
    };
    PropiedadesService.prototype.getProperty = function (legajo) {
        var _this = this;
        return this.http.get("http://localhost:3002/api/propiedades/" + legajo + "?token=" + localStorage.getItem('token').replace(/"/g, ''))
            .toPromise()
            .then(function (response) {
            if (response.json()["success"])
                return response.json()["data"];
            else {
                initNotify("Token vencido", 4);
                _this.router.navigate(["../login"], { relativeTo: _this.activatedRoute });
            }
        })
            .catch(this.handleError);
    };
    PropiedadesService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get("http://localhost:3002/api/user?token=" + localStorage.getItem('token').replace(/"/g, ''))
            .toPromise()
            .then(function (response) {
            if (response.json()["success"])
                return response.json()["data"];
            else {
                initNotify("Token vencido", 4);
                _this.router.navigate(["../login"], { relativeTo: _this.activatedRoute });
            }
        })
            .catch(this.handleError);
    };
    PropiedadesService.prototype.postUser = function (user) {
        return this.http.post("http://localhost:3002/api/user/new?token=" + localStorage.getItem('token').replace(/"/g, ''), {
            new_user: user,
            user: localStorage.getItem('currentUser')
        })
            .toPromise()
            .then(function (response) {
            if (response.json()["success"])
                return true;
            else {
                initNotify(response.json()["message"], 4);
            }
        })
            .catch(this.handleError);
    };
    PropiedadesService.prototype.getFields = function () {
        var _this = this;
        return this.http.get("http://localhost:3002/api/fields?token=" + localStorage.getItem('token').replace(/"/g, ''))
            .toPromise()
            .then(function (response) {
            if (response.json()["success"])
                return response.json()["data"][0];
            else {
                initNotify("Token vencido", 4);
                _this.router.navigate(["../login"], { relativeTo: _this.activatedRoute });
            }
        })
            .catch(this.handleError);
    };
    PropiedadesService.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        initNotify("Error de conexión con base de datos", 4);
        return Promise.reject(error.message || error);
    };
    PropiedadesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, router_1.ActivatedRoute])
    ], PropiedadesService);
    return PropiedadesService;
}());
exports.PropiedadesService = PropiedadesService;
//# sourceMappingURL=propiedades.service.js.map