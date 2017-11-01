import { Component, OnInit, AfterViewInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { User, PRIVILEGES } from '../../models/user-model';
import { PropiedadesService } from '../../services/propiedades.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import initNotify = require('../../../assets/js/notify.js');
import { FormsModule } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    animations: [
        trigger('cardtable1', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform': 'translate3D(0px, 0px, 0px)',
                transform: 'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform': 'translate3D(0px, 150px, 0px)',
                    transform: 'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out')
            ])
        ]),
        trigger('cardtable2', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform': 'translate3D(0px, 0px, 0px)',
                transform: 'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform': 'translate3D(0px, 150px, 0px)',
                    transform: 'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0.25s ease-out')
            ])
        ])
    ]
})

export class UserComponent implements OnInit {
    user : User;
    ngOnInit(){
        this.user = {
            username : "",
            password : "",
            privileges : 0,
            alias : ""
        }
    }

    constructor(private propiedadesService: PropiedadesService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.getUsers();
    }
    getUsers(): void {
        this.propiedadesService.getUsers().then(users => this.users = users);
    }

    isAdmin = JSON.parse(localStorage.getItem('currentUser')).privileges == -1
    newUser(){
        console.log(this.user)
            this.propiedadesService.postUser(this.user).then(resp => initNotify("Usuario creado", 2))
    }
    users: User[];
    updateUserPriv(user): void {
        //this.router.navigate(['../user', property.LEGAJO],{relativeTo : this.activatedRoute});
    }
}
