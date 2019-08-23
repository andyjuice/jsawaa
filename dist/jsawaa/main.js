(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editor_feat_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-feat/editor/editor.component */ "./src/app/editor-feat/editor/editor.component.ts");
/* harmony import */ var _doc_doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc/doc-list/doc-list.component */ "./src/app/doc/doc-list/doc-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'docs',
        // loadChildren: './doc/doc.module#DocModule'
        component: _editor_feat_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]
    },
    {
        path: 'editor',
        // loadChildren: './editor-feat/editor-feat.module#EditorFeatModule'
        component: _doc_doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_3__["DocListComponent"]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-header></app-header>-->\n<main>\n  <mat-sidenav-container fullscreen>\n    <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\">\n      <button routerLink=\"/editor\">editor</button>\n      <a target=\"_blank\" href=\"./assets/img/doc.html\">doc</a>\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <mat-toolbar style=\"background-color:#007FFF; color:white;\">\n        <button mat-button (click)=\"sidenav.toggle()\" class=\"rotate\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"36\" height=\"36\" viewBox=\"0 0 192 192\" style=\" fill:#000000;\">\n            <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\"\n              text-anchor=\"none\" style=\"mix-blend-mode: normal\">\n              <path d=\"M0,192v-192h192v192z\" fill=\"none\"></path>\n              <g fill=\"#ffffff\">\n                <path d=\"M24,40c-2.88509,-0.0408 -5.56865,1.475 -7.0231,3.96698c-1.45445,2.49198 -1.45445,5.57405 0,8.06603c1.45445,2.49198 4.13801,4.00779 7.0231,3.96698h144c2.88509,0.0408 5.56865,-1.475 7.0231,-3.96698c1.45445,-2.49198 1.45445,-5.57405 0,-8.06603c-1.45445,-2.49198 -4.13801,-4.00779 -7.0231,-3.96698zM24,88c-2.88509,-0.0408 -5.56865,1.475 -7.0231,3.96698c-1.45445,2.49198 -1.45445,5.57405 0,8.06603c1.45445,2.49198 4.13801,4.00779 7.0231,3.96698h144c2.88509,0.0408 5.56865,-1.475 7.0231,-3.96698c1.45445,-2.49198 1.45445,-5.57405 0,-8.06603c-1.45445,-2.49198 -4.13801,-4.00779 -7.0231,-3.96698zM24,136c-2.88509,-0.0408 -5.56865,1.475 -7.0231,3.96698c-1.45445,2.49198 -1.45445,5.57405 0,8.06603c1.45445,2.49198 4.13801,4.00779 7.0231,3.96698h144c2.88509,0.0408 5.56865,-1.475 7.0231,-3.96698c1.45445,-2.49198 1.45445,-5.57405 0,-8.06603c-1.45445,-2.49198 -4.13801,-4.00779 -7.0231,-3.96698z\"></path>\n              </g>\n            </g>\n          </svg>\n        </button>\n        <div style=\"heigt:100%; width:100%\">\n          <img src=\"assets/img/title.png\" style=\"height:60px; float:right;\">\n        </div>\n      </mat-toolbar>\n      <app-editor></app-editor>\n      <app-doc-list></app-doc-list>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  margin-top: 1rem; }\n\nmat-sidenav {\n  width: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZGp1dy9hdG9tLXdvcmtzcGFjZS9qc2F3YWEvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxubWF0LXNpZGVuYXZ7XG4gIHdpZHRoOiAyNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.objects = new Map();
        this.title = 'jsawaa';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _editor_feat_editor_feat_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-feat/editor-feat.module */ "./src/app/editor-feat/editor-feat.module.ts");
/* harmony import */ var _doc_doc_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doc/doc.module */ "./src/app/doc/doc.module.ts");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_9__["AceEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _editor_feat_editor_feat_module__WEBPACK_IMPORTED_MODULE_7__["EditorFeatModule"],
                _doc_doc_module__WEBPACK_IMPORTED_MODULE_8__["DocModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/doc/doc-list/doc-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/doc/doc-list/doc-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\">\n  <style type=\"text/css\">\n    @import url('https://themes.googleusercontent.com/fonts/css?kit=7-w7HJ5EdeHiPPOlGrpNaMJQu3D9ZI-uZ8tPktq2JDs');\n\n    ol {\n      margin: 0;\n      padding: 0\n    }\n\n    table td,\n    table th {\n      padding: 0\n    }\n\n    .c2 {\n      color: #000000;\n      font-weight: 400;\n      text-decoration: none;\n      vertical-align: baseline;\n      font-size: 11pt;\n      font-family: \"Garamond\";\n      font-style: normal\n    }\n\n    .c0 {\n      padding-top: 0pt;\n      padding-bottom: 0pt;\n      line-height: 1.15;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n\n    .c5 {\n      color: #000000;\n      text-decoration: none;\n      vertical-align: baseline;\n      font-size: 14pt;\n      font-style: normal\n    }\n\n    .c7 {\n      color: #000000;\n      text-decoration: none;\n      vertical-align: baseline;\n      font-size: 8pt;\n      font-style: normal\n    }\n\n    .c11 {\n      color: #000000;\n      text-decoration: none;\n      vertical-align: baseline;\n      font-style: normal\n    }\n\n    .c3 {\n      font-weight: 400;\n      font-family: \"Garamond\"\n    }\n\n    .c14 {\n      max-width: 468pt;\n      padding: 72pt 72pt 72pt 72pt\n    }\n\n    .c4 {\n      font-weight: 700;\n      font-family: \"Garamond\"\n    }\n\n    .c1 {\n      text-indent: 36pt\n    }\n\n    .c9 {\n      height: 11pt\n    }\n\n    .c12 {\n      font-size: 11pt\n    }\n\n    .c10 {\n      vertical-align: sub\n    }\n\n    .c6 {\n      font-size: 12pt\n    }\n\n    .c13 {\n      background-color: #ffffff\n    }\n\n    .c8 {\n      margin-left: 36pt\n    }\n\n    .title {\n      padding-top: 0pt;\n      color: #000000;\n      font-size: 26pt;\n      padding-bottom: 3pt;\n      font-family: \"Arial\";\n      line-height: 1.15;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n\n    .subtitle {\n      padding-top: 0pt;\n      color: #666666;\n      font-size: 15pt;\n      padding-bottom: 16pt;\n      font-family: \"Arial\";\n      line-height: 1.15;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n\n    li {\n      color: #000000;\n      font-size: 11pt;\n      font-family: \"Arial\"\n    }\n\n    p {\n      margin: 0;\n      color: #000000;\n      font-size: 11pt;\n      font-family: \"Arial\"\n    }\n\n    h1 {\n      padding-top: 20pt;\n      color: #000000;\n      font-size: 20pt;\n      padding-bottom: 6pt;\n      font-family: \"Arial\";\n      line-height: 1.15;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n\n    h2 {\n      padding-top: 18pt;\n      color: #000000;\n      font-size: 16pt;\n      padding-bottom: 6pt;\n      font-family: \"Arial\";\n      line-height: 1.15;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n\n    h3 {\n      padding-top: 16pt;\n      color: #434343;\n      font-size: 14pt;\n      padding-bottom: 4pt;\n      font-family: \"Arial\";\n      line-height: 1.15;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n\n    h4 {\n      padding-top: 14pt;\n      color: #666666;\n      font-size: 12pt;\n      padding-bottom: 4pt;\n      font-family: \"Arial\";\n      line-height: 1.15;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n\n    h5 {\n      padding-top: 12pt;\n      color: #666666;\n      font-size: 11pt;\n      padding-bottom: 4pt;\n      font-family: \"Arial\";\n      line-height: 1.15;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n\n    h6 {\n      padding-top: 12pt;\n      color: #666666;\n      font-size: 11pt;\n      padding-bottom: 4pt;\n      font-family: \"Arial\";\n      line-height: 1.15;\n      page-break-after: avoid;\n      font-style: italic;\n      orphans: 2;\n      widows: 2;\n      text-align: left\n    }\n  </style>\n</head>\n\n<body class=\"c13 c14\">\n  <p class=\"c0\"><span class=\"c4 c5\">Primitive Objects:</span></p>\n  <p class=\"c0 c9\"><span class=\"c4 c7\"></span></p>\n  <p class=\"c0 c1\"><span class=\"c4 c6\">line</span><span class=\"c3 c6\">&nbsp;[name] [x</span><span class=\"c3 c10 c6\">1</span><span class=\"c3 c6\">] [y</span><span class=\"c3 c10 c6\">1</span><span class=\"c3 c6\">] [x</span><span class=\"c3 c10 c6\">2</span><span\n      class=\"c3 c6\">] [y</span><span class=\"c3 c10 c6\">2</span><span class=\"c11 c3 c6\">] [color] [weight]</span></p>\n  <p class=\"c0 c8\"><span class=\"c3\">Command that creates a </span><span class=\"c4\">line</span><span class=\"c3\">&nbsp;given a variable name, starting (</span><span class=\"c3 c6\">x</span><span class=\"c3 c10 c6\">1</span><span class=\"c3\">, </span><span\n      class=\"c3 c6\">y</span><span class=\"c3 c10 c6\">1</span><span class=\"c3\">) coordinates, ending (</span><span class=\"c3 c6\">x</span><span class=\"c3 c10 c6\">2</span><span class=\"c3\">, </span><span class=\"c3 c6\">y</span><span class=\"c3 c6 c10\">2</span><span\n      class=\"c2\">) coordinates, line color, and line weight.</span></p>\n  <p class=\"c0 c9 c8\"><span class=\"c2\"></span></p>\n  <p class=\"c0\"><span class=\"c3 c6\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=\"c4 c6\">circle</span><span class=\"c11 c3 c6\">&nbsp;[name] [x] [y] [diameter] [outline color] [background color]</span></p>\n  <p class=\"c0\"><span class=\"c3\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command that creates a </span><span class=\"c4\">circle</span><span class=\"c2\">&nbsp;given a variable name, position (x, y) coordinates, diameter, </span></p>\n  <p class=\"c0 c1\"><span class=\"c2\">outline color, and background color.</span></p>\n  <p class=\"c0 c1 c9\"><span class=\"c2\"></span></p>\n  <p class=\"c0 c1\"><span class=\"c4 c6\">oval</span><span class=\"c11 c3 c6\">&nbsp;[name] [x] [y] [width] [height] [outline color] [background color]</span></p>\n  <p class=\"c0 c1\"><span class=\"c3\">Command that creates a </span><span class=\"c4\">oval</span><span class=\"c2\">&nbsp;given a variable name, position (x, y) coordinates, width, height, </span></p>\n  <p class=\"c0 c8\"><span class=\"c2\">outline color, and background color.</span></p>\n  <p class=\"c0 c9 c8\"><span class=\"c2\"></span></p>\n  <p class=\"c0 c1\"><span class=\"c4 c6\">rectangle</span><span class=\"c11 c3 c6\">&nbsp;[name] [x] [y] [width] [height] [outline color] [background color]</span></p>\n  <p class=\"c0 c8\"><span class=\"c3\">Command that creates a </span><span class=\"c4\">rectangle</span><span class=\"c2\">&nbsp;given a variable name, position (x, y) coordinates, width, height, outline color, and background color.</span></p>\n  <p class=\"c0 c1 c9\"><span class=\"c2\"></span></p>\n  <p class=\"c0 c1\"><span class=\"c4 c6\">polygon</span><span class=\"c3 c6\">&nbsp;[name] [n] [x</span><span class=\"c3 c10 c6\">1</span><span class=\"c3 c6\">] [y</span><span class=\"c3 c10 c6\">1</span><span class=\"c3 c6\">] ... [x</span><span class=\"c3 c10 c6\">n</span><span\n      class=\"c3 c6\">] [y</span><span class=\"c3 c10 c6\">n</span><span class=\"c3 c6 c11\">] [outline color] [background color]</span></p>\n  <p class=\"c0 c1\"><span class=\"c3\">Command that creates a </span><span class=\"c4\">polygon </span><span class=\"c3\">given a variable name, number of edges, vertices (x</span><span class=\"c3 c10\">n</span><span class=\"c3\">, y</span><span class=\"c3 c10\">n</span><span\n      class=\"c2\">) &nbsp;</span></p>\n  <p class=\"c0 c8\"><span class=\"c2\">coordinates, outline color, and background color.</span></p>\n  <p class=\"c0 c9 c8\"><span class=\"c2\"></span></p>\n  <p class=\"c0 c1\"><span class=\"c4 c6\">text</span><span class=\"c11 c3 c6\">&nbsp;[name] [x] [y] [&ldquo;text&rdquo;] [color] [font-size]</span></p>\n  <p class=\"c0 c8\"><span class=\"c3\">Command that creates a </span><span class=\"c4\">line of text</span><span class=\"c2\">&nbsp;given a variable name, position (x, y) coordinates, intended text, text color, and font-size.</span></p>\n  <p class=\"c0 c9 c8\"><span class=\"c2\"></span></p>\n  <p class=\"c0\"><span class=\"c5 c4\">General Action Commands:</span></p>\n  <p class=\"c0 c9\"><span class=\"c7 c4\"></span></p>\n  <p class=\"c0\"><span class=\"c3 c6\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=\"c11 c4 c6\">begin ... end</span></p>\n  <p class=\"c0 c8\"><span class=\"c3\">Place a group of commands in a between a begin ... end block to make those commands </span><span class=\"c4\">execute simultaneously</span><span class=\"c2\">.</span></p>\n  <p class=\"c0 c9 c8\"><span class=\"c2\"></span></p>\n  <p class=\"c0 c8 c9\"><span class=\"c2\"></span></p>\n  <p class=\"c0\"><span class=\"c4 c6\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;changeParam </span><span class=\"c11 c3 c6\">[target] [parameter*] [new value]</span></p>\n  <p class=\"c0 c8\"><span class=\"c3\">Command used to change the appearance and/or data of most primitive and data structure objects listed. </span><span class=\"c4\">Available parameters</span><span class=\"c3\">: color, bkgrd (background), textcolor,\n      text, point, width, height, x, y. See the extended description of this command below for further details on its usage.</span><span class=\"c2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>\n  <p class=\"c0\"><span class=\"c2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>\n  <p class=\"c0 c1\"><span class=\"c4 c6\">moveRelative</span><span class=\"c11 c3 c6\">&nbsp;[target] [x-offset] [y-offset]</span></p>\n  <p class=\"c0\"><span class=\"c3\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command that </span><span class=\"c4\">animates</span><span class=\"c3\">&nbsp;the </span><span class=\"c4\">movement of the target object</span><span class=\"c2\">&nbsp;from\n      its original location to a new </span></p>\n  <p class=\"c0 c1\"><span class=\"c2\">location. The new location is calculated by adding the x and y offset to the target object&#39;s x and </span></p>\n  <p class=\"c0 c8\"><span class=\"c2\">y-coordinate.</span></p>\n  <p class=\"c0 c9\"><span class=\"c11 c3 c6\"></span></p>\n  <p class=\"c0\"><span class=\"c3 c6\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=\"c4 c6\">delay</span><span class=\"c11 c3 c6\">&nbsp;[milliseconds]</span></p>\n  <p class=\"c0\"><span class=\"c3\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command </span><span class=\"c4\">delays</span><span class=\"c2\">&nbsp;the execution of each step of JSAWAA animation by number of milliseconds.</span></p>\n  <p class=\"c0 c9\"><span class=\"c2\"></span></p>\n  <p class=\"c0\"><span class=\"c3 c6\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=\"c4 c6\">scale</span><span class=\"c11 c3 c6\">&nbsp;[target] [percentage]</span></p>\n  <p class=\"c0\"><span class=\"c2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command can be used on primitive objects and nodes to either scale (increase or decrease) the size </span></p>\n  <p class=\"c0 c1\"><span class=\"c2\">of the object.</span></p>\n  <p class=\"c0 c9\"><span class=\"c2\"></span></p>\n  <p class=\"c0\"><span class=\"c3 c6\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class=\"c4 c6\">remove</span><span class=\"c11 c3 c6\">&nbsp;[target]</span></p>\n  <p class=\"c0\"><span class=\"c3 c6\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Command </span><span class=\"c2\">removes target object from the screen and the variable name is freed for use again.</span></p>\n  <p class=\"c0\"><span class=\"c2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>\n  <p class=\"c0\"><span class=\"c5 c4\">Data Structures:</span></p>\n  <p class=\"c0 c9\"><span class=\"c7 c4\"></span></p>\n  <p class=\"c0 c1\"><span class=\"c4 c13\">array </span><span class=\"c3 c13\">[name] [x] [y] [n.m] [data..] [orientation] [</span><span class=\"c3 c13\">color</span><span class=\"c2 c13\">] [bkgrd] [textcolor]</span></p>\n  <p class=\"c0 c9\"><span class=\"c11 c4 c12\"></span></p>\n  <p class=\"c0 c9\"><span class=\"c11 c3 c6\"></span></p>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/doc/doc-list/doc-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/doc/doc-list/doc-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvYy9kb2MtbGlzdC9kb2MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/doc/doc-list/doc-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/doc/doc-list/doc-list.component.ts ***!
  \****************************************************/
/*! exports provided: DocListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocListComponent", function() { return DocListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocListComponent = /** @class */ (function () {
    function DocListComponent() {
    }
    DocListComponent.prototype.ngOnInit = function () {
    };
    DocListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doc-list',
            template: __webpack_require__(/*! ./doc-list.component.html */ "./src/app/doc/doc-list/doc-list.component.html"),
            styles: [__webpack_require__(/*! ./doc-list.component.scss */ "./src/app/doc/doc-list/doc-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocListComponent);
    return DocListComponent;
}());



/***/ }),

/***/ "./src/app/doc/doc-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/doc/doc-routing.module.ts ***!
  \*******************************************/
/*! exports provided: DocRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocRoutingModule", function() { return DocRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc-list/doc-list.component */ "./src/app/doc/doc-list/doc-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_2__["DocListComponent"]
    }
];
var DocRoutingModule = /** @class */ (function () {
    function DocRoutingModule() {
    }
    DocRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DocRoutingModule);
    return DocRoutingModule;
}());



/***/ }),

/***/ "./src/app/doc/doc.module.ts":
/*!***********************************!*\
  !*** ./src/app/doc/doc.module.ts ***!
  \***********************************/
/*! exports provided: DocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocModule", function() { return DocModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _doc_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc-routing.module */ "./src/app/doc/doc-routing.module.ts");
/* harmony import */ var _doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc-list/doc-list.component */ "./src/app/doc/doc-list/doc-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DocModule = /** @class */ (function () {
    function DocModule() {
    }
    DocModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_3__["DocListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _doc_routing_module__WEBPACK_IMPORTED_MODULE_2__["DocRoutingModule"]
            ],
            exports: [
                _doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_3__["DocListComponent"]
            ]
        })
    ], DocModule);
    return DocModule;
}());



/***/ }),

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _editor_feat_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor-feat-routing.module */ "./src/app/editor-feat/editor-feat-routing.module.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor-feat/editor/editor.component.ts");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
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
            declarations: [_editor_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_6__["AceEditorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _editor_feat_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditorFeatRoutingModule"]
            ],
            exports: [
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]
            ]
        })
    ], EditorFeatModule);
    return EditorFeatModule;
}());



/***/ }),

/***/ "./src/app/editor-feat/editor/editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/editor-feat/editor/editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"row\">\n  <div class=\"column_left\">\n    <mat-card id=\"text-editor\">\n      <ace-editor [(ngModel)]=\"userInput\" style=\"height:500px; width:auto\"></ace-editor>\n\n      <br />\n      <button mat-stroked-button (click)=\"onSubmit()\">Run Code</button>\n      <button mat-stroked-button class=\"clear_button\" (click)=\"clearCanvas()\">Clear Canvas</button>\n      <button mat-stroked-button class=\"clear_button\" (click)=\"showSlider()\" *ngIf=\"!this.showSS\">Step Speed</button>\n      <mat-slider class=\"speed_slider\" style=\"color:#007FFF\" *ngIf=\"this.showSS\" thumbLabel [displayWith]=\"formatLabel\" [max]=5 [min]=0.25 [step]=0.25 [tickInterval]=0.5 [(ngModel)]=\"speedVal\">\n      </mat-slider>\n      <button mat-button style=\"color:#007FFF\" (click)=\"showSlider()\" *ngIf=\"this.showSS\">OK</button>\n      <br />\n      <p class=\"angular-linebreaks\" *ngIf=\"this.hasSubmit\" [ngClass]=\"{'red': !this.isValid, 'green': this.isValid}\">\n        {{errorOut}}\n      </p>\n      <br />\n    </mat-card>\n  </div>\n  <div (window:resize)=\"onResize()\" class=\"column_right\" #rColumn>\n    <mat-card>\n      <!-- <p class=\"angular-linebreaks\" *ngIf=\"this.hasSubmit\" [ngClass]=\"{'red': !this.isValid, 'green': this.isValid}\">\n            {{errorOut}}\n          </p> -->\n      <div class=card_div #rMatCard>\n        <div #canvasContainer>\n          <canvas id=canvas></canvas>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor-feat/editor/editor.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/editor-feat/editor/editor.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LINEBREAKS TBD WHETHER WE KEEP OR NOT */\n.angular-linebreaks {\n  white-space: pre-wrap; }\nmat-card {\n  width: 90%;\n  height: 90%;\n  min-width: 350px;\n  min-height: 550px;\n  margin: auto; }\n.card_div {\n  width: 100%;\n  height: 100%; }\n.row {\n  display: flex;\n  height: 100%; }\n.column_left {\n  flex: 40%; }\n.column_right {\n  flex: 60%; }\ncanvas {\n  border: 0.5px solid lightblue;\n  border-radius: 5px; }\n.clear_button {\n  margin-left: 10px; }\n.red {\n  border-left: 5px solid red;\n  background-color: #ffcccc;\n  padding: 4px; }\n.green {\n  border-left: 5px solid green;\n  background-color: #ccffcc;\n  padding: 4px; }\n.speed_slider {\n  margin-left: 10px; }\n::ng-deep .mat-accent .mat-slider-thumb {\n  background-color: #87CEEB; }\n::ng-deep .mat-accent .mat-slider-thumb-label {\n  background-color: #87CEEB; }\n::ng-deep .mat-accent .mat-slider-track-fill {\n  background-color: #87CEEB; }\nmat-toolbar {\n  overflow: visible !important; }\n.logo {\n  max-width: 10%; }\n.brand {\n  max-width: 90%; }\n#title {\n  float: right !important; }\nmat-sidenav {\n  width: 250px; }\n.rotate:focus i {\n  -webkit-animation: rotate 1s ease-in-out 0s;\n          animation: rotate 1s ease-in-out 0s; }\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); } }\n#text-editor {\n  max-height: 625px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZGp1dy9hdG9tLXdvcmtzcGFjZS9qc2F3YWEvc3JjL2FwcC9lZGl0b3ItZmVhdC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQztFQUNFLHNCQUFxQixFQUN0QjtBQUVEO0VBQ0UsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGFBQVksRUFDYjtBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFDYjtBQUVEO0VBQ0UsY0FBYTtFQUNiLGFBQVksRUFDYjtBQUVEO0VBQ0UsVUFBUyxFQUNWO0FBRUQ7RUFDRSxVQUFTLEVBQ1Y7QUFFRDtFQUNFLDhCQUE2QjtFQUM3QixtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjtBQUVEO0VBQ0UsMkJBQTBCO0VBQzFCLDBCQUF5QjtFQUN6QixhQUFZLEVBQ2I7QUFFRDtFQUNFLDZCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsYUFBWSxFQUNiO0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjtBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7QUFFRDtFQUNFLDZCQUE0QixFQUM3QjtBQUVEO0VBQ0UsZUFBYyxFQUNmO0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7QUFFRDtFQUNFLHdCQUF1QixFQUN4QjtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFDRSw0Q0FBbUM7VUFBbkMsb0NBQW1DLEVBQ3BDO0FBQ0Q7RUFDRTtJQUNFLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFBQTtFQUd6QjtJQUNFLGlDQUF3QjtZQUF4Qix5QkFBd0IsRUFBQSxFQUFBO0FBTjVCO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxpQ0FBd0I7WUFBeEIseUJBQXdCLEVBQUEsRUFBQTtBQUk1QjtFQUNFLDZCQUE2QixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci1mZWF0L2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMSU5FQlJFQUtTIFRCRCBXSEVUSEVSIFdFIEtFRVAgT1IgTk9UICovXG4uYW5ndWxhci1saW5lYnJlYWtzIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtaW4taGVpZ2h0OiA1NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29sdW1uX2xlZnQge1xuICBmbGV4OiA0MCU7XG59XG5cbi5jb2x1bW5fcmlnaHQge1xuICBmbGV4OiA2MCU7XG59XG5cbmNhbnZhcyB7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRibHVlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jbGVhcl9idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnJlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5ncmVlbiB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ZmY2M7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLnNwZWVkX3NsaWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUVCO1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUVCO1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4N0NFRUI7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuLmxvZ28ge1xuICBtYXgtd2lkdGg6IDEwJTtcbn1cblxuLmJyYW5kIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG5cbiN0aXRsZSB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnJvdGF0ZTpmb2N1cyBpIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgZWFzZS1pbi1vdXQgMHM7XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxufVxuXG4jdGV4dC1lZGl0b3Ige1xuICBtYXgtaGVpZ2h0IDogNjI1cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor-feat/editor/editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editor-feat/editor/editor.component.ts ***!
  \********************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hashmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hashmap */ "./node_modules/hashmap/hashmap.js");
/* harmony import */ var hashmap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hashmap__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HashMap = __webpack_require__(/*! hashmap */ "./node_modules/hashmap/hashmap.js");
var EditorComponent = /** @class */ (function () {
    //IMPORTANT: SAVE OBJECTS IN DATA STRUCTURES
    /* CONSTRCTOR & INIT */
    function EditorComponent() {
        //potentially problematic
        this.userInput = "";
        //whether there is an error or not
        this.isValid = null;
        //whether user has submitted or not
        this.hasSubmit = false;
        //map to store objects' names to their index in the canvas element
        this.map = new HashMap();
        //index in hashmap of each object
        this.index = 0;
        //line number of each call
        this.line = 1;
        //speed slider display
        this.showSS = false;
        // intial speed & used for determining delay
        this.displaySpeed = 0.5;
        //array to keep track of all the indeces removed, used to calculate shift
        this.removedIndices = new Array();
        this.delay_pop = 0;
        this.begin_index = 0;
    }
    EditorComponent.prototype.getshift = function (num) {
        var shift = 0;
        for (var i = 0; i < this.removedIndices.length; i++) {
            if (num > this.removedIndices[i]) {
                shift++;
            }
        }
        console.log("shift = " + (num - shift));
        return shift;
    };
    EditorComponent.prototype.getZIndex = function (shape) {
        return this.canvas.getObjects().indexOf(shape);
    };
    EditorComponent.prototype.ngOnInit = function () {
        this.canvas = new fabric.Canvas('canvas', { preserveObjectStacking: true, selection: false });
        //working but cannot dynamically resize ——> rightMC is a the right column HTMLElement
        this.canvas.setHeight(this.rightMC.nativeElement.offsetHeight);
        this.canvas.setWidth(this.rightMC.nativeElement.offsetWidth);
        // this.canvas.renderAll();
    };
    EditorComponent.prototype.onResize = function () {
        this.canvas.setHeight(this.rightMC.nativeElement.offsetHeight);
        this.canvas.setWidth(this.rightMC.nativeElement.offsetWidth);
        // this.canvas.renderAll();
    };
    /* SLEEPER FUNC */
    EditorComponent.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    /* PARSING & MORE */
    EditorComponent.prototype.readFunc = function (f) {
        var func = [];
        if (f != undefined || f.length > 0) {
            if (f.indexOf("\"") > 0) {
                var start = 0;
                var inQuote = 0;
                for (var i = 0; i < f.length; i++) {
                    //first quotation mark
                    var pushed = "";
                    if (f.charAt(i) === "\"" && inQuote === 0) {
                        pushed = f.substring(start, i).trim();
                        inQuote = 1;
                        start = i;
                    }
                    else if (f.charAt(i) == " " && inQuote === 0) {
                        pushed = f.substring(start, i).trim();
                        start = i;
                    }
                    else if (f.charAt(i) == "\"" && inQuote === 1) {
                        pushed = f.substring(start, i + 1);
                        inQuote = 0;
                        start = i + 1;
                    }
                    else if (i == f.length - 1) {
                        pushed = f.substring(start, i + 1);
                    }
                    if (pushed !== "") {
                        func.push(pushed);
                    }
                }
                func.filter(Boolean);
                // console.log(func);
            }
            else {
                func = f.split(" ").filter(Boolean);
            }
            var call = func[0];
            //draw primitive shapes
            if (call.match(/^(circle|line|text|rectangle|oval|polygon)$/)) {
                this.drawShape(func);
                //draw data structures
            }
            else if (call.match(/^(array|queue|stack|list|listpointer|tree|graph|node|marker)$/)) {
                this.drawDataStruct(func);
                //use commands that target a structure or shape
            }
            else if (call.match(/^(changeParam|moveRelative|scale|remove|push|pop|enqueue|dequeue|moveMarker)$/)) {
                this.targetCommands(func);
                //use commands that regulate rendering (excluding connectNodes)
            }
            else if (call.match(/^(begin|end|delay|groupObject|connectNodes)$/)) {
                this.otherCommands(func);
            }
            else {
                this.isValid = false;
                this.errorOut = "ERROR: Call to command, " + call + ", could not be found!";
            }
        }
    };
    //function to draw primitive shapes [SHOUT OUT TO SHOUT OUT TO: http://fabricjs.com/]
    EditorComponent.prototype.drawShape = function (func) {
        var call = func[0];
        //error reporting for whether or not name exists or not.
        if (1 > (func.length - 1)) { //if the index is greater than the list of function it's out of bounds and does not exist
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters given for " + func[0] + "@" + name + "function (found @ name parameter)!";
            return;
        }
        else {
            var name = func[1];
        }
        var shape;
        //save in hashmap of variable names to fabric.js objects
        // THIS IS THE CIRCLE CREATION IF STATEMENT
        if (call == "circle") {
            shape = this.drawCircle(func, name);
        }
        else if (call == "line") {
            shape = this.drawLine(func, name);
        }
        else if (call == "text") {
            shape = this.drawText(func, name);
        }
        else if (call == "rectangle") {
            shape = this.drawRectOrOval(func, name);
        }
        else if (call == "oval") {
            shape = this.drawRectOrOval(func, name);
        }
        else if (call == "polygon") {
            shape = this.drawPolygon(func, name);
        }
        if (shape == null) {
            return;
        }
        else {
            if (this.map.has(name)) {
                this.isValid = false;
                this.errorOut = "ERROR: object with variable name, " + name + ", already exists [line " + this.line + "]";
                return;
            }
            shape.set('selectable', false);
            this.canvas.add(shape);
            this.map.set(name, this.index);
            this.index++;
        }
    };
    //function to render data structure
    EditorComponent.prototype.drawDataStruct = function (func) {
    };
    //function to target and modify a current structures
    EditorComponent.prototype.targetCommands = function (func) {
        var call = func[0];
        if (call === "changeParam") {
            this.changeParam(func);
        }
        else if (call === "moveRelative") {
            this.moveRelative(func);
        }
        else if (call === "scale") {
            this.scale(func);
        }
        else if (call === "remove") {
            this.remove(func);
        }
        else if (call === "push") {
        }
        else if (call === "pop") {
        }
        else if (call === "enqueue") {
        }
        else if (call === "dequeue") {
        }
        else if (call === "moveMarker") {
        }
        this.canvas.renderAll();
    };
    //function for all other functions (connect nodes excluded, most are grouping and regulatory)
    EditorComponent.prototype.otherCommands = function (func) {
        var call = func[0];
        if (call === "begin") {
            this.begin();
        }
        else if (call === "delay") {
            this.delay(func);
        }
        else if (call === "groupObject") {
            this.groupObject(func);
        }
        else if (call === "end") {
            this.end();
        }
    };
    /* DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES | DRAWING THE SHAPES */
    EditorComponent.prototype.drawCircle = function (func, name) {
        var shape;
        if (2 <= func.length - 1) { // x-position
            if (isNaN(parseFloat(func[2]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ x-position parameter [line " + this.line + "]";
                return;
            }
            var x = parseFloat(func[2]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (3 <= func.length - 1) { // y-position
            if (isNaN(parseFloat(func[3]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ y-position parameter [line " + this.line + "]";
                return;
            }
            var y = parseFloat(func[3]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (4 <= func.length - 1) { // width (diameter)
            if (isNaN(parseFloat(func[4]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ width parameter [line " + this.line + "]";
                return;
            }
            var radius = parseFloat(func[4]) / 2;
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (5 <= func.length - 1) { // line color
            var stroke = func[5];
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (6 <= func.length - 1) { // fill color
            var fill = func[6];
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        shape = new fabric.Circle({
            radius: radius, top: y, left: x, fill: fill, stroke: stroke
        }); // colors tbd how to determine
        return shape;
    };
    EditorComponent.prototype.drawLine = function (func, name) {
        var shape;
        if (2 <= func.length - 1) { // x1-position
            if (isNaN(parseFloat(func[2]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ x1-position parameter [line " + this.line + "]";
                return;
            }
            var x1 = parseFloat(func[2]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (3 <= func.length - 1) { // y1-position
            if (isNaN(parseFloat(func[3]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ y1-position parameter [line " + this.line + "]";
                return;
            }
            var y1 = parseFloat(func[3]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (4 <= func.length - 1) { // x1-position
            if (isNaN(parseFloat(func[4]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ x2-position parameter [line " + this.line + "]";
                return;
            }
            var x2 = parseFloat(func[4]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (5 <= func.length - 1) { // y2-position
            if (isNaN(parseFloat(func[5]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ y2-position parameter [line " + this.line + "]";
                return;
            }
            var y2 = parseFloat(func[5]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (6 <= func.length - 1) { // fill stroke
            var stroke = func[6];
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        return shape = new fabric.Line([x1, y1, x2, y2], {
            stroke: stroke, selectable: 'false'
        });
    };
    EditorComponent.prototype.drawRectOrOval = function (func, name) {
        var call = func[0]; // this is to determine whether it's rect or oval
        var shape;
        if (2 <= func.length - 1) { // x-position
            if (isNaN(parseFloat(func[2]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ x-position parameter [line " + this.line + "]";
                return;
            }
            var x = parseFloat(func[2]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (3 <= func.length - 1) { // y-position
            if (isNaN(parseFloat(func[3]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ y-position parameter [line " + this.line + "]";
                return;
            }
            var y = parseFloat(func[3]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (4 <= func.length - 1) { // width
            if (isNaN(parseFloat(func[4]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ width parameter [line " + this.line + "]";
                return;
            }
            var width = parseFloat(func[4]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (5 <= func.length - 1) { // height
            if (isNaN(parseFloat(func[5]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ height parameter [line " + this.line + "]";
                return;
            }
            var height = parseFloat(func[5]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (6 <= func.length - 1) { // stroke color
            var stroke = func[6];
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (7 <= func.length - 1) { // fill color
            var fill = func[7];
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (call == 'oval') {
            shape = new fabric.Ellipse({
                top: y, left: x, rx: width / 2, ry: height / 2, fill: fill, stroke: stroke
            });
        }
        else {
            shape = new fabric.Rect({
                top: y, left: x, width: width, height: height, fill: fill, stroke: stroke
            });
        }
        return shape;
    };
    EditorComponent.prototype.drawText = function (func, name) {
        var shape;
        if (2 <= func.length - 1) { // x-position
            if (isNaN(parseFloat(func[2]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ x-position parameter [line " + this.line + "]";
                return;
            }
            var x = parseFloat(func[2]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (3 <= func.length - 1) { // y-position
            if (isNaN(parseFloat(func[3]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ y-position parameter [line " + this.line + "]";
                return;
            }
            var y = parseFloat(func[3]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (4 <= func.length - 1) { // text value
            if (func[4].substring(0, 1) != "\"" && func[4].substring(func[4].length - 1, func[4].length) != "\"") {
                this.isValid = false;
                this.errorOut = "ERROR: Expected a string in quotation marks @ text-value [line " + this.line + "]";
                return;
            }
            //NEED TO FIGURE HOW TO SPLIT STRINGS while ignoring quotation marked phrases
            var text = func[4].substring(1, func[4].length - 1);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (5 <= func.length - 1) { // color
            var stroke = func[5];
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (6 <= func.length - 1) { // text size
            if (isNaN(parseFloat(func[6]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ size parameter [line " + this.line + "]";
                return;
            }
            var size = parseFloat(func[6]);
        }
        else {
            var size = 12;
        }
        return shape = new fabric.Text(text, {
            fill: stroke, top: y, left: x, fontSize: size, textAlign: "center"
        });
    };
    EditorComponent.prototype.drawPolygon = function (func, name) {
        var shape;
        if (2 <= func.length - 1) { // x-position
            if (isNaN(parseFloat(func[2]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ n (number of edges) parameter [line " + this.line + "]";
                return;
            }
            var n = parseFloat(func[2]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        var points = [];
        var val = 1;
        for (var i = 3; i < 3 + n * 2; i += 2) {
            if (i <= func.length - 1) { // x-position
                if (isNaN(parseFloat(func[i]))) {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type @ x-position parameter [line " + this.line + "]";
                    return;
                }
                else {
                    var x = parseFloat(func[i]);
                }
            }
            else {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
                return;
            }
            if (i + 1 <= func.length - 1) {
                if (isNaN(parseFloat(func[i + 1]))) {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type @ y-position parameter [line " + this.line + "]";
                    return;
                }
                else {
                    var y = parseFloat(func[i + 1]);
                }
            }
            else {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
                return;
            }
            points.push({ x: x, y: y });
            val++;
        }
        if (i <= func.length - 1) { // line color
            var stroke = func[i];
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (i + 1 <= func.length - 1) { // fill color
            var fill = func[i + 1];
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        console.log("edges" + n);
        console.log("color index" + i);
        return shape = new fabric.Polygon(points, {
            stroke: stroke, fill: fill
        });
    };
    /* TARGETING RENDERED OBJECTS | TARGETING RENDERED OBJECTS | TARGETING RENDERED OBJECTS | TARGETING RENDERED OBJECTS */
    /* CHANGE THE PARAMETERS */
    EditorComponent.prototype.changeParam = function (func) {
        var name;
        if (1 > func.length - 1) {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + "[line " + this.line + "]";
            return;
        }
        else {
            if (this.map.get(func[1]) < 0) {
                this.isValid = false;
                this.errorOut = "ERROR: Could not find target name, " + func[1] + "[line " + this.line + "]";
                return;
            }
            name = func[1];
            var opos = this.map.get(func[1]);
            var shape = this.canvas.item(opos - this.getshift(opos));
            console.log("index: " + (opos - this.getshift(opos)) + " | " + shape);
        }
        if (2 > func.length - 1) {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + "[line " + this.line + "]";
            return;
        }
        else {
            if (3 > func.length - 1) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + "[line " + this.line + "]";
                return;
            }
            var change = func[3];
            if (func[2] === "color") {
                console.log(change);
                shape.set({ stroke: change });
            }
            else if (func[2] === "bkgrd" || func[2] === "textcolor") {
                shape.set({ fill: change });
            }
            else if (func[2] === "text") {
                if (shape.get('type') !== "text") {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected text " + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                console.log("text change: " + change);
                shape.set({ text: change });
            }
            else if (func[2] === "width") {
                if (shape.get('type') === "text" || shape.get('type') === "polygon" || shape.get('type') === "line") {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected circle, rect, or oval" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                if (isNaN(parseFloat(change))) {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                console.log("width change: " + change);
                if (shape.get('type') === "circle") {
                    shape.set({ radius: parseFloat(change) / 2 });
                }
                else {
                    shape.set({ width: parseFloat(change) });
                }
            }
            else if (func[2] === "height") {
                if (shape.get('type') === "text" || shape.get('type') === "polygon" || shape.get('type') === "line" || shape.get('type') === "circle") {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected rect or oval" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                if (isNaN(parseFloat(change))) {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                console.log("width change: " + change);
                shape.set({ height: parseFloat(change) });
            }
            else if (func[2] === "point") {
                if (shape.get('type') !== 'text') {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected text " + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                if (isNaN(parseFloat(change))) {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                shape.set({ fontSize: parseFloat(change) });
            }
            else if (func[2] === "x") {
                if (shape.get('type') === "polygon") {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, cannot take polygon" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                if (isNaN(parseFloat(change))) {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                shape.set({ left: parseFloat(change) });
            }
            else if (func[2] === "y") {
                if (shape.get('type') === "polygon") {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, cannot take polygon" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                if (isNaN(parseFloat(change))) {
                    this.isValid = false;
                    this.errorOut = "ERROR: Incorrect type, expected float or int" + func[0] + "@" + name + "[line " + this.line + "]";
                    return;
                }
                shape.set({ top: parseFloat(change) });
            }
            else if (func[2] === "xn") {
                //continue work here
            }
            else if (func[2] === "yn") {
            }
            else {
                this.isValid = false;
                this.errorOut = "ERROR: Could not understand parameter to be changed: " + func[0] + "@" + name + "[line " + this.line + "]";
                return;
            }
        }
    };
    /* REMOVE A VALUE */
    EditorComponent.prototype.remove = function (func) {
        if (1 > func.length - 1) {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + func[0] + "[line " + this.line + "]";
            return;
        }
        else {
            var removedItem = func[1];
            if (this.map.has(removedItem)) {
                var number = this.map.get(removedItem);
                var shift = this.getshift(number);
                console.log("shift = " + shift);
            }
            else {
                this.isValid = false;
                this.errorOut = "ERROR: Cannot find variable with name " + removedItem + "@" + func[0] + "[line " + this.line + "]";
                return;
            }
            console.log(this.canvas.item(number - shift));
            this.canvas.remove(this.canvas.item(number - shift));
            this.removedIndices.push(number);
        }
    };
    /* SCALE SHAPE OR OBJECT—incomplete*/
    EditorComponent.prototype.scale = function (func) {
        var shape;
        var doesExist = false;
        var index = null;
        var scale;
        if (1 <= func.length - 1) {
            if (this.map.has(func[1])) {
                doesExist = true;
                var number = this.map.get(func[1]);
                shape = this.canvas.item(number - this.getshift(number));
            }
            else {
                this.isValid = false;
                this.errorOut = "ERROR: Cannot find variable with name " + func[1] + "@" + func[0] + " [line " + this.line + "]";
                return;
            }
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "[line " + this.line + "]";
            return;
        }
        if (2 <= func.length - 1 && doesExist) {
            if (isNaN(parseFloat(func[2]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ scale parameter [line " + this.line + "]";
                return;
            }
            scale = parseFloat(func[2]);
            shape.animate('scaleX', scale, { onChange: this.canvas.renderAll.bind(this.canvas) });
            shape.animate('scaleY', scale, { onChange: this.canvas.renderAll.bind(this.canvas) });
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + "scale function [line " + this.line + "]";
            return;
        }
    };
    /* MOVE RELATIVE TO AN OBJECT */
    EditorComponent.prototype.moveRelative = function (func) {
        if (1 > func.length - 1) { //target
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + "[line " + this.line + "]";
            return;
        }
        else {
            if (this.map.get(func[1]) < 0) {
                this.isValid = false;
                this.errorOut = "ERROR: Could not find target name, " + func[1] + "[line " + this.line + "]";
                return;
            }
            var opos = this.map.get(func[1]);
            var shape = this.canvas.item(opos - this.getshift(opos));
            console.log("index: " + (opos - this.getshift(opos)) + " | " + shape);
        }
        if (2 <= func.length - 1) { // x-offset
            if (isNaN(parseFloat(func[2]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ x-offset parameter [line " + this.line + "]";
                return;
            }
            var x_shift;
            var x_shift_val = parseFloat(func[2]);
            if (x_shift_val < 0) {
                x_shift_val = x_shift_val * -1;
                x_shift = '-=' + x_shift_val;
            }
            else {
                x_shift = '+=' + x_shift_val;
            }
            shape.animate('left', x_shift, { onChange: this.canvas.renderAll.bind(this.canvas) });
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        if (3 <= func.length - 1) { // y-position
            if (isNaN(parseFloat(func[3]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ y-offsset parameter [line " + this.line + "]";
                return;
            }
            var y_shift;
            var y_shift_val = parseFloat(func[3]);
            if (parseFloat(func[3]) < 0) {
                y_shift_val = y_shift_val * -1;
                y_shift = '-=' + y_shift_val;
            }
            else {
                y_shift = '+=' + y_shift_val;
            }
            shape.animate('top', y_shift, { onChange: this.canvas.renderAll.bind(this.canvas) });
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
    };
    /* OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS | OTHER COMMANDS */
    /* DELAY THE CALL */
    EditorComponent.prototype.delay = function (func) {
        this.delay_pop = 1;
    };
    /* GROUP OBJECTS — need to find a way to save grouped object & position */
    EditorComponent.prototype.groupObject = function (func) {
        var group_shapes = [];
        var name = func[1];
        var total_objects;
        //start minz at some ridiculously long number
        var minZ = this.index;
        if (2 <= func.length - 1) {
            if (isNaN(parseFloat(func[2]))) {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect type @ n (number of shapes) parameter [line " + this.line + "]";
                return;
            }
            total_objects = parseFloat(func[2]);
        }
        else {
            this.isValid = false;
            this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
            return;
        }
        for (var i = 3; i < total_objects + 3; i++) {
            if (i <= func.length - 1) {
                if (this.map.has(func[i])) {
                    var number = this.map.get(func[i]);
                    var shift = this.getshift(number);
                    var z = this.getZIndex(this.canvas.item(number - shift));
                    if (z < minZ) {
                        minZ = z;
                    }
                    group_shapes.push(this.canvas.item(number - shift));
                }
                else {
                    this.isValid = false;
                    this.errorOut = "ERROR: Cannot find variable with name " + func[i] + "@" + func[0] + "[line " + this.line + "]";
                    return;
                }
            }
            else {
                this.isValid = false;
                this.errorOut = "ERROR: Incorrect number of parameters provided for " + func[0] + "@" + name + " function [line " + this.line + "]";
                return;
            }
        }
        if (0 < group_shapes.length) {
            var group = new fabric.Group(group_shapes);
            group.set('selectable', false);
            this.canvas.add(group);
            this.canvas.moveTo(group, minZ);
            this.map.set(name, minZ);
            console.log(this.canvas.getObjects());
            //increment only if new index given
            if (minZ == this.index) {
                this.index++;
            }
        }
    };
    /* BEGIN & END */
    EditorComponent.prototype.begin = function () {
        this.begin_index = 1;
    };
    EditorComponent.prototype.end = function () {
        return;
    };
    /*ON SUBMISSION FUNCTIONS | ON SUBMISSION FUNCTIONS | ON SUBMISSION FUNCTIONS | ON SUBMISSION FUNCTIONS*/
    EditorComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var functions, cleaned, preclean, milliseconds, BEGIN_END, preerror, in_begin, begin, length, numtoend, DELAYS, delay_time, delay_index, precur, i, delay_milli;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //clears the stuff in the hashmap
                        this.map.clear();
                        //clears the values in the removedIndices
                        this.removedIndices.splice(0, this.removedIndices.length);
                        //variable functions name is confusing
                        this.hasSubmit = false;
                        this.isValid = true;
                        this.errorOut = "";
                        this.line = 0;
                        this.index = 0;
                        this.delay_pop = 0;
                        this.clearCanvas();
                        functions = this.userInput.split("\n").filter(Boolean);
                        preclean = [];
                        milliseconds = this.displaySpeed * 1000;
                        console.log(milliseconds);
                        BEGIN_END = [];
                        preerror = 1;
                        in_begin = 0;
                        begin = 0;
                        length = 0;
                        numtoend = 0;
                        DELAYS = [];
                        delay_time = 0;
                        delay_index = -1;
                        //pre-process
                        for (precur = 0; precur < functions.length; precur++) {
                            preclean = functions[precur].trim().split(" ").filter(Boolean);
                            console.log(preclean);
                            if (preclean[0] == "begin") {
                                if (in_begin == 1) {
                                    this.isValid = false;
                                    this.errorOut = "ERROR: Begin statement called before last finished [line " + preerror + "]";
                                }
                                //should identify that we're in a begin-end statment
                                in_begin = 1;
                                //set the values that need to be started together to first line
                                begin = precur + 1;
                                console.log("begin identified @line" + precur);
                            }
                            else if (preclean[0] == "end") {
                                if (in_begin == 0) {
                                    this.isValid = false;
                                    this.errorOut = "ERROR: End statement called before a begin statement started [line " + preerror + "]";
                                }
                                //set in_begin back to 0 to indicate we're out of a begin-end statement
                                in_begin = 0;
                                length = precur - begin;
                                BEGIN_END.unshift(length);
                                console.log("end identified @line" + precur);
                            }
                            else if (preclean[0] == "delay") {
                                if (isNaN(parseFloat(preclean[1]))) {
                                    this.isValid = false;
                                    this.errorOut = "ERROR: Incorrect type @ time (milliseconds) parameter [line " + preerror + "]";
                                    ;
                                }
                                delay_index = precur;
                                delay_time = parseFloat(preclean[1]);
                                DELAYS.unshift(delay_time);
                            }
                        }
                        if (!this.isValid) return [3 /*break*/, 9];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < functions.length)) return [3 /*break*/, 9];
                        cleaned = functions[i].trim();
                        this.line = this.line + 1;
                        this.readFunc(cleaned);
                        //break if error
                        if (!this.isValid) {
                            return [3 /*break*/, 9];
                        }
                        if (!(this.delay_pop == 1)) return [3 /*break*/, 3];
                        delay_milli = DELAYS.pop();
                        return [4 /*yield*/, this.sleep(delay_milli)];
                    case 2:
                        _a.sent();
                        this.delay_pop = 0;
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(this.begin_index == 1)) return [3 /*break*/, 4];
                        numtoend = BEGIN_END.pop();
                        console.log("pop value = " + numtoend);
                        this.begin_index = 0;
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(numtoend > 0)) return [3 /*break*/, 5];
                        numtoend--;
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.sleep(milliseconds)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        console.log(this.map);
                        _a.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 1];
                    case 9:
                        //if everything worked
                        if (this.isValid) {
                            this.errorOut = "SUCCESS: code ran without any noticeable errors!";
                        }
                        this.hasSubmit = true;
                        this.map.forEach(function (value, key) {
                            console.log(key + " : " + value);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /* BUTTON FUNCS | BUTTON FUNCS | BUTTON FUNCS | BUTTON FUNCS */
    //Clears the canvas
    EditorComponent.prototype.clearCanvas = function () {
        this.canvas.clear();
        this.map.clear();
    };
    //Shows the slider
    EditorComponent.prototype.showSlider = function () {
        this.showSS = !this.showSS;
        this.displaySpeed = this.speedVal;
    };
    //display speed
    EditorComponent.prototype.formatLabel = function (speedVal) {
        return speedVal + '″';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rMatCard'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditorComponent.prototype, "rightMC", void 0);
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor-feat/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/editor-feat/editor/editor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ndjuw/atom-workspace/jsawaa/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map