(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editor-feat-editor-feat-module"],{

/***/ "./src/app/editor-feat/editor-feat-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/editor-feat/editor-feat-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EditorFeatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorFeatRoutingModule", function() { return EditorFeatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor-feat/editor/editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]
    }
];
var EditorFeatRoutingModule = /** @class */ (function () {
    function EditorFeatRoutingModule() {
    }
    EditorFeatRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EditorFeatRoutingModule);
    return EditorFeatRoutingModule;
}());



/***/ }),

/***/ "./src/app/editor-feat/editor-feat.module.ts":
/*!***************************************************!*\
  !*** ./src/app/editor-feat/editor-feat.module.ts ***!
  \***************************************************/
/*! exports provided: EditorFeatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorFeatModule", function() { return EditorFeatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _editor_feat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-feat-routing.module */ "./src/app/editor-feat/editor-feat-routing.module.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor-feat/editor/editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditorFeatModule = /** @class */ (function () {
    function EditorFeatModule() {
    }
    EditorFeatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_editor_editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _editor_feat_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditorFeatRoutingModule"]
            ]
        })
    ], EditorFeatModule);
    return EditorFeatModule;
}());



/***/ })

}]);
//# sourceMappingURL=editor-feat-editor-feat-module.js.map