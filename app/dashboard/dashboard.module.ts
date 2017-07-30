import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        CommonModule
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
