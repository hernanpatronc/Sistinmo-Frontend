"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var notifications_component_1 = require('./notifications/notifications.component');
var typography_component_1 = require('./typography/typography.component');
var maps_component_1 = require('./maps/maps.component');
var login_component_1 = require('./login.component');
var property_component_1 = require('./property/property.component');
var auth_guard_1 = require('../auth.guard');
exports.MODULE_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'property/:legajo', component: property_component_1.PropertyComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'table', component: table_component_1.TableComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'icons', component: icons_component_1.IconsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_guard_1.AdminGuard] },
    { path: 'maps', component: maps_component_1.MapsComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    maps_component_1.MapsComponent,
    login_component_1.LoginComponent,
    property_component_1.PropertyComponent
];
//# sourceMappingURL=dashboard.routes.js.map