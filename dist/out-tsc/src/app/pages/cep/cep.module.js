import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CepPageRoutingModule } from './cep-routing.module';
import { CepPage } from './cep.page';
let CepPageModule = class CepPageModule {
};
CepPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CepPageRoutingModule,
        ],
        declarations: [CepPage]
    })
], CepPageModule);
export { CepPageModule };
//# sourceMappingURL=cep.module.js.map