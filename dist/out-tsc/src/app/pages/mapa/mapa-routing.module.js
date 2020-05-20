import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapaPage } from './mapa.page';
const routes = [
    {
        path: '',
        component: MapaPage
    }
];
let MapaPageRoutingModule = class MapaPageRoutingModule {
};
MapaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MapaPageRoutingModule);
export { MapaPageRoutingModule };
//# sourceMappingURL=mapa-routing.module.js.map