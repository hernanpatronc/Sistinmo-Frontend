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
var router_1 = require('@angular/router');
var property_1 = require('../../models/property');
var propiedades_service_1 = require('../../services/propiedades.service');
var PropertyComponent = (function () {
    function PropertyComponent(router, activatedRoute, propiedadesService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.propiedadesService = propiedadesService;
        this.propiedad = new property_1.Property();
        this.traders = [];
        this.tipo_inmus = [];
        this.estados = [];
        this.paises = [];
        this.provincias = [];
        this.fechaString = "";
    }
    PropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.propiedadesService.getFields().then(function (data) {
            _this.traders = data.TRADER.split(",");
            _this.tipo_inmus = data.TIPO_INMU.split(",");
            _this.estados = data.ESTADO.split(",");
            _this.paises = data.PAIS.split(",");
            _this.provincias = data.ZONA.split(",");
        }).catch(function (err) { return _this.router.navigate(["/login"]); });
        this.legajo = this.activatedRoute.snapshot.params['legajo'];
        if (this.legajo != "new") {
            this.propiedadesService.getProperty(this.legajo).then(function (propiedad) {
                _this.propiedad = propiedad[0];
                _this.fechaString = (_this.propiedad.FECHA).toString().substr(0, _this.propiedad.FECHA.toString().length - 2);
            });
        }
    };
    PropertyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'prop-cmp',
            templateUrl: 'property.component.html',
            animations: [
                core_1.trigger('carduserprofile', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1
                    })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0s ease-out'),
                    ])
                ]),
                core_1.trigger('cardprofile', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0.25s ease-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, propiedades_service_1.PropiedadesService])
    ], PropertyComponent);
    return PropertyComponent;
}());
exports.PropertyComponent = PropertyComponent;
//# sourceMappingURL=property.component.js.map