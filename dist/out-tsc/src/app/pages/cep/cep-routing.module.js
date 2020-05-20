import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CepPage } from './cep.page';
const routes = [
    {
        path: '',
        component: CepPage
    }
];
let CepPageRoutingModule = class CepPageRoutingModule {
};
CepPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CepPageRoutingModule);
export { CepPageRoutingModule };
//# sourceMappingURL=cep-routing.module.js.map