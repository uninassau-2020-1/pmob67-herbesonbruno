import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapaPageRoutingModule } from './mapa-routing.module';
import { MapaPage } from './mapa.page';
let MapaPageModule = class MapaPageModule {
};
MapaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MapaPageRoutingModule
        ],
        declarations: [MapaPage]
    })
], MapaPageModule);
export { MapaPageModule };
//# sourceMappingURL=mapa.module.js.map