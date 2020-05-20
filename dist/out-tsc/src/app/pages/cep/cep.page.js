import * as tslib_1 from "tslib";
import { ViacepService } from './../../servicos/viacep.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
let CepPage = class CepPage {
    constructor(navCtrl, viacep) {
        this.navCtrl = navCtrl;
        this.viacep = viacep;
        this.endereco = {};
        this.vazio = "";
    }
    getEndereco() {
        this.viacep.callService(this.cep)
            .subscribe(data => {
            this.endereco = data;
            console.log(data);
        });
    }
    ngOnInit() {
    }
};
CepPage = tslib_1.__decorate([
    Component({
        selector: 'app-cep',
        templateUrl: './cep.page.html',
        styleUrls: ['./cep.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController, ViacepService])
], CepPage);
export { CepPage };
//# sourceMappingURL=cep.page.js.map