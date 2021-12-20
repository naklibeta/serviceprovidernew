(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_settings_help-and-support_help-and-support_module_ts"],{

/***/ 6807:
/*!******************************************************************************!*\
  !*** ./src/app/settings/help-and-support/help-and-support-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpAndSupportPageRoutingModule": () => (/* binding */ HelpAndSupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _help_and_support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-and-support.page */ 7508);




const routes = [
    {
        path: '',
        component: _help_and_support_page__WEBPACK_IMPORTED_MODULE_0__.HelpAndSupportPage
    }
];
let HelpAndSupportPageRoutingModule = class HelpAndSupportPageRoutingModule {
};
HelpAndSupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelpAndSupportPageRoutingModule);



/***/ }),

/***/ 1192:
/*!**********************************************************************!*\
  !*** ./src/app/settings/help-and-support/help-and-support.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpAndSupportPageModule": () => (/* binding */ HelpAndSupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _help_and_support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-and-support-routing.module */ 6807);
/* harmony import */ var _help_and_support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-and-support.page */ 7508);







let HelpAndSupportPageModule = class HelpAndSupportPageModule {
};
HelpAndSupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _help_and_support_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpAndSupportPageRoutingModule
        ],
        declarations: [_help_and_support_page__WEBPACK_IMPORTED_MODULE_1__.HelpAndSupportPage]
    })
], HelpAndSupportPageModule);



/***/ }),

/***/ 7508:
/*!********************************************************************!*\
  !*** ./src/app/settings/help-and-support/help-and-support.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpAndSupportPage": () => (/* binding */ HelpAndSupportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_help_and_support_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./help-and-support.page.html */ 7951);
/* harmony import */ var _help_and_support_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-and-support.page.scss */ 6243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ 8213);





let HelpAndSupportPage = class HelpAndSupportPage {
    constructor(apiService) {
        this.apiService = apiService;
        this.faq = [];
    }
    ngOnInit() {
        this.GetFaq();
    }
    GetFaq() {
        this.apiService.Common_GET('/faq').subscribe((results) => {
            if (results.statusCode == 200) {
                this.faq = results.data;
            }
            else {
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
};
HelpAndSupportPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
HelpAndSupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-help-and-support',
        template: _raw_loader_help_and_support_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_help_and_support_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HelpAndSupportPage);



/***/ }),

/***/ 6243:
/*!**********************************************************************!*\
  !*** ./src/app/settings/help-and-support/help-and-support.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  border: 1px solid #909090;\n  border-radius: 5px;\n  margin: 10px;\n}\n\nion-grid {\n  border-bottom: 1px solid #909090;\n  margin-bottom: 15px;\n  padding: 0;\n}\n\n.q-tag {\n  padding: 5px 0;\n}\n\nh2 {\n  margin-bottom: 10px;\n}\n\ndiv {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAtYW5kLXN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImhlbHAtYW5kLXN1cHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkwOTA5MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MDkwOTA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnEtdGFnIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 7951:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/help-and-support/help-and-support.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Help & Support</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item lines=\"full\" lines=\"full\" *ngFor=\"let faqs of faq\">\r\n    <ion-label>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"1\" class=\"q-tag\">\r\n            <h3 class=\"ion-text-wrap\"><b>Q.</b></h3>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <h3 class=\"ion-text-wrap\"><b>{{faqs.questions}}</b></h3>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!-- <h2 class=\"ion-text-wrap\"><b>Q.</b> {{faqs.questions}}</h2> -->\r\n      <div innerHtml=\"{{faqs.answers}}\" class=\"ion-text-wrap\">\r\n      </div>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_help-and-support_help-and-support_module_ts.js.map