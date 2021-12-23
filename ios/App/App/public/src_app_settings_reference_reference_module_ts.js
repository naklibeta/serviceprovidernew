(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_settings_reference_reference_module_ts"],{

/***/ 365:
/*!****************************************************************!*\
  !*** ./src/app/settings/reference/reference-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferencePageRoutingModule": () => (/* binding */ ReferencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _reference_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference.page */ 7816);




const routes = [
    {
        path: '',
        component: _reference_page__WEBPACK_IMPORTED_MODULE_0__.ReferencePage
    }
];
let ReferencePageRoutingModule = class ReferencePageRoutingModule {
};
ReferencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReferencePageRoutingModule);



/***/ }),

/***/ 2735:
/*!********************************************************!*\
  !*** ./src/app/settings/reference/reference.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferencePageModule": () => (/* binding */ ReferencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _reference_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference-routing.module */ 365);
/* harmony import */ var _reference_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reference.page */ 7816);







let ReferencePageModule = class ReferencePageModule {
};
ReferencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reference_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferencePageRoutingModule
        ],
        declarations: [_reference_page__WEBPACK_IMPORTED_MODULE_1__.ReferencePage]
    })
], ReferencePageModule);



/***/ }),

/***/ 7816:
/*!******************************************************!*\
  !*** ./src/app/settings/reference/reference.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferencePage": () => (/* binding */ ReferencePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_reference_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reference.page.html */ 5579);
/* harmony import */ var _reference_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reference.page.scss */ 4538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let ReferencePage = class ReferencePage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.ProviderData = {};
    }
    ngOnInit() {
        this.GetProviderData();
        this.apiService.showLoader('Please wait, getting your details..');
    }
    GetProviderData() {
        this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
            if (results.statusCode == 200) {
                this.ProviderData = results.data;
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    UpdateProNow(value) {
        this.apiService.showLoader('Please wait, updating details..');
        value.providerId = this.apiService.Get_ProviderId();
        this.apiService.Common_POST('/reference', value).subscribe((results) => {
            if (results.statusCode == 200) {
                this.back();
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    back() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/tabs/settings']));
    }
};
ReferencePage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ReferencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-reference',
        template: _raw_loader_reference_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reference_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReferencePage);



/***/ }),

/***/ 4538:
/*!********************************************************!*\
  !*** ./src/app/settings/reference/reference.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h6 {\n  margin: auto 0;\n}\n\nion-grid {\n  margin: 0 10px;\n}\n\nion-input {\n  border: 1px solid #561d5e;\n  border-radius: 5px;\n  font-size: 14px;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicmVmZXJlbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg2IHtcclxuIG1hcmdpbjogYXV0byAwO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjFkNWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 5579:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/reference/reference.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Reference</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <form #regForm=\"ngForm\" (ngSubmit)=\"UpdateProNow(regForm.value)\">\r\n\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../../../assets/icon/favicon.png\" />\r\n        </ion-avatar>\r\n        <h6>Person I</h6>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input placeholder=\"Enter your name\" type=\"text\" [(ngModel)]=\"ProviderData.name1\" name=\"name1\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input placeholder=\"Mobile number\" type=\"number\" [(ngModel)]=\"ProviderData.mobile1\" name=\"mobile1\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"../../../assets/icon/favicon.png\" />\r\n        </ion-avatar>\r\n        <h6>Person II</h6>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input placeholder=\"Enter your name\" type=\"text\" [(ngModel)]=\"ProviderData.name2\" name=\"name2\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input placeholder=\"Mobile number\" type=\"number\" [(ngModel)]=\"ProviderData.mobile2\" name=\"mobile2\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"themepurple\" expand=\"block\" type=\"submit\">UPDATE</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </form>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_reference_reference_module_ts.js.map