(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mapa-mapa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"inicio\"></ion-back-button>\n    </ion-buttons> \n    <ion-title>Consultar Mapa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mapa/mapa-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mapa/mapa-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageRoutingModule", function() { return MapaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapa.page */ "./src/app/pages/mapa/mapa.page.ts");




const routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_3__["MapaPage"]
    }
];
let MapaPageRoutingModule = class MapaPageRoutingModule {
};
MapaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mapa/mapa.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.module.ts ***!
  \*******************************************/
/*! exports provided: MapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapa-routing.module */ "./src/app/pages/mapa/mapa-routing.module.ts");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapa.page */ "./src/app/pages/mapa/mapa.page.ts");







let MapaPageModule = class MapaPageModule {
};
MapaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapaPageRoutingModule"]
        ],
        declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
    })
], MapaPageModule);



/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcGEvbWFwYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.ts ***!
  \*****************************************/
/*! exports provided: MapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPage", function() { return MapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapaPage = class MapaPage {
    constructor() { }
    ngOnInit() {
    }
};
MapaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa.page.scss */ "./src/app/pages/mapa/mapa.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapaPage);



/***/ })

}]);
//# sourceMappingURL=pages-mapa-mapa-module-es2015.js.map