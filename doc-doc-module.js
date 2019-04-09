(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doc-doc-module"],{

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
            ]
        })
    ], DocModule);
    return DocModule;
}());



/***/ })

}]);
//# sourceMappingURL=doc-doc-module.js.map