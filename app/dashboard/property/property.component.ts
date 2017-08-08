import { Component,state,style,animate,transition, trigger, keyframes } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Property } from '../../models/property';
import { PropiedadesService } from '../../services/propiedades.service';
import { FormsModule } from '@angular/forms';
import initNotify = require('../../../assets/js/notify.js');

@Component({
    moduleId: module.id,
    selector: 'prop-cmp',
    templateUrl: 'property.component.html',
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ]),
        trigger('cardprofile', [
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
            ])
        ]
    })

    export class PropertyComponent{ 
        constructor(private router : Router, private activatedRoute : ActivatedRoute, private propiedadesService:PropiedadesService){}
        legajo:string;
        propiedad = new Property();
        traders= [];
        tipo_inmus = [];
        estados = [];
        paises = [];
        provincias = [];
        fechaString = "";
        ngOnInit(){
            this.propiedadesService.getFields().then(data => {
                this.traders = data.TRADER.split(",");
                this.tipo_inmus = data.TIPO_INMU.split(",");
                this.estados = data.ESTADO.split(",");
                this.paises = data.PAIS.split(",");
                this.provincias = data.ZONA.split(",");
            }).catch(err => this.router.navigate(["/login"]));
            this.legajo = this.activatedRoute.snapshot.params['legajo'];
            if (this.legajo != "new"){
                this.propiedadesService.getProperty(this.legajo).then(propiedad => {
                    this.propiedad = propiedad[0];
                    this.fechaString = (this.propiedad.FECHA).toString().substr(0,this.propiedad.FECHA.toString().length-2);
                });

            }
                
        }
    }
