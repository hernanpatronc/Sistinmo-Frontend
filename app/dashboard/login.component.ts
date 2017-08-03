import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AuthenticationService} from '../authentication.service';
import initNotify = require('../../assets/js/notify.js');

@Component({
    selector: 'my-login',
    templateUrl: 'app/dashboard/login.component.html',
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
            .subscribe(
                data => {
                    if (localStorage.getItem('currentUser')){
                        console.log("Redirect");
                        this.router.navigate(['./dashboard']);
                        initNotify("Bienvenido " + JSON.parse(localStorage.getItem('currentUser')).alias, 2);
                    }
                },
                error => {
                    
                });
    }
}
