import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let ViacepService = class ViacepService {
    constructor(http) {
        this.http = http;
    }
    callService(cep) {
        return this.http.get(`https://viacep.com.br/ws/` + cep + `/json/`);
    }
};
ViacepService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ViacepService);
export { ViacepService };
//# sourceMappingURL=viacep.service.js.map