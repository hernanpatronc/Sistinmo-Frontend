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
var initDemo = require('../../../assets/js/charts.js');
var propiedades_service_1 = require('../../services/propiedades.service');
var router_1 = require('@angular/router');
var HomeComponent = (function () {
    function HomeComponent(propiedadesService, router) {
        this.propiedadesService = propiedadesService;
        this.router = router;
        this.tasks = []; //["Unfollow 5 enemies from twitter", "Read \"Following makes Medium better\"", "Create 4 Invisible User Experiences you Never Knew About","Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit","Lines From Great Russian Literature? Or E-mails From My Boss?","Sign contract for \"What are conference organizers afraid of?\""];
        this.colors = ["#1DC7EA", "#9368E9", "#FB404B", "#87CB16", "#FFA534", "#1F77D0", "#5e5e5e", "#3b5998", "#55acee", "#cc2127", "#dd4b39"];
        this.tipos_inmu = [];
    }
    HomeComponent.prototype.deleteTask = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    };
    HomeComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/bootstrap-checkbox-radio-switch.js');
        // $.getScript('../../../assets/js/light-bootstrap-dashboard.js');
        var _this = this;
        $('[data-toggle="checkbox"]').each(function () {
            if ($(this).data('toggle') == 'switch')
                return;
            var $checkbox = $(this);
            $checkbox.checkbox();
        });
        this.propiedadesService.getStatistics().then(function (objeto) {
            initDemo(objeto.TIPO_INMU[1], objeto.TIPO_INMU[0], null, null, [objeto.PRODUCTORES[1], objeto.PRODUCTORES[2], objeto.PRODUCTORES[3]], objeto.PRODUCTORES[0]);
            _this.tipos_inmu = objeto.TIPO_INMU[0];
        });
        this.minutos = new Date();
    };
    HomeComponent.prototype.getCurrentTime = function () {
        var now = new Date();
        return Math.round((now.getTime() - this.minutos.getTime()) / 60000);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-cmp',
            templateUrl: 'home.component.html',
            animations: [
                core_1.trigger('cardemail', [
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
                        core_1.animate('0.3s 0s ease-out')
                    ])
                ]),
                /*trigger('carduser', [
                    state('*', style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform':'translate3D(0px, 0px, 0px)',
                        transform:'translate3D(0px, 0px, 0px)',
                        opacity: 1})),
                        transition('void => *', [
                            style({opacity: 0,
                                '-ms-transform': 'translate3D(0px, 150px, 0px)',
                                '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                                '-moz-transform': 'translate3D(0px, 150px, 0px)',
                                '-o-transform':'translate3D(0px, 150px, 0px)',
                                transform:'translate3D(0px, 150px, 0px)',
                            }),
                            animate('0.3s 0.25s ease-out')
                        ])
                ]),*/
                core_1.trigger('card2014sales', [
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
                        core_1.animate('0.3s 0.5s ease-out')
                    ])
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [propiedades_service_1.PropiedadesService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map