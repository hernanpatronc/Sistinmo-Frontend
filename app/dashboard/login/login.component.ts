import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AuthenticationService} from '../../services/authentication.service';
import initNotify = require('../../../assets/js/notify.js');

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
    user : string;
    password : string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

    }
    onLogin() {
        this.authenticationService.login(this.user, this.password)
            .then(
                data => {
                    if (localStorage.getItem('currentUser')){
                        this.router.navigate(['./dashboard']);
                        initNotify("Bienvenido " + JSON.parse(localStorage.getItem('currentUser')).alias, 2);
                    }
                }).catch(error => {
                    this.user = "";
                    this.password = "";
                });
    }
}
