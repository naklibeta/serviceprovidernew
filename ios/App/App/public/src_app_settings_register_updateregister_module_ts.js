(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_settings_register_updateregister_module_ts"],{

/***/ 9534:
/*!********************************************************************!*\
  !*** ./src/app/settings/register/updateregister-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateRegisterPageRoutingModule": () => (/* binding */ UpdateRegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _updateregister_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateregister.page */ 4991);




const routes = [
    {
        path: '',
        component: _updateregister_page__WEBPACK_IMPORTED_MODULE_0__.UpdateRegisterPage
    }
];
let UpdateRegisterPageRoutingModule = class UpdateRegisterPageRoutingModule {
};
UpdateRegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateRegisterPageRoutingModule);



/***/ }),

/***/ 3933:
/*!************************************************************!*\
  !*** ./src/app/settings/register/updateregister.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateRegisterPageModule": () => (/* binding */ UpdateRegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _updateregister_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateregister-routing.module */ 9534);
/* harmony import */ var _updateregister_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateregister.page */ 4991);







let UpdateRegisterPageModule = class UpdateRegisterPageModule {
};
UpdateRegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _updateregister_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateRegisterPageRoutingModule
        ],
        declarations: [_updateregister_page__WEBPACK_IMPORTED_MODULE_1__.UpdateRegisterPage]
    })
], UpdateRegisterPageModule);



/***/ }),

/***/ 4991:
/*!**********************************************************!*\
  !*** ./src/app/settings/register/updateregister.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateRegisterPage": () => (/* binding */ UpdateRegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_updateregister_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./updateregister.page.html */ 9911);
/* harmony import */ var _updateregister_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateregister.page.scss */ 9848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let UpdateRegisterPage = class UpdateRegisterPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.States = [];
        this.Cities = [];
        this.Email = '';
        this.Mobile = '';
        this.SelectedCategories = [];
        this.ProviderData = {};
    }
    ngOnInit() {
        this.GetSelectionOptions();
        this.GetProviderData();
        let SetEmail = localStorage.getItem('pre_email');
        if (SetEmail) {
            this.Email = SetEmail;
        }
        let SetMobile = localStorage.getItem('pre_mobile');
        if (SetMobile) {
            this.Mobile = SetMobile;
        }
    }
    ionViewDidEnter() {
        let catSelected = localStorage.getItem('selectedCategories');
        this.SelectedCategories = JSON.parse(catSelected);
    }
    RegisterNow(formvalues) {
        if (formvalues.mobile.length != 10) {
            this.apiService.presentToast('Please enter correct mobile number', 3000);
            return;
        }
        this.apiService.showLoader('Please wait, registering user..');
        //----find state name and city name-------------------------------------------------------
        let UserData = localStorage.getItem('UserData');
        UserData = JSON.parse(UserData);
        var StateSelected = this.States.filter(function (o) {
            return o.id == formvalues.stateId;
        });
        formvalues.state = StateSelected[0].name;
        var CitiesSelected = this.Cities.filter(function (o) {
            return o.id == formvalues.cityId;
        });
        formvalues.city = CitiesSelected[0].city;
        formvalues.serviceCategory = this.SelectedCategories;
        formvalues.id = UserData.id;
        this.apiService.Common_POST('/profile', formvalues).subscribe((results) => {
            if (results.statusCode == 200) {
                debugger;
                localStorage.setItem('UserData', JSON.stringify(results.data));
                this.apiService.presentToast(results.message, 3000);
                localStorage.setItem('isLogged', 'true');
                this.router.navigate(['']);
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    GetSelectionOptions() {
        //------------Get Data and fill all three select fields------------------------------------------
        this.apiService.Common_GET('/findStates').subscribe((results) => {
            if (results.statusCode == 200) {
                this.States = results.data;
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    GetCitis(id) {
        console.log(id.value, 'state id');
        //------------Get Data CIties------------------------------------------
        this.apiService.Common_GET('/findCityByState/' + id.value).subscribe((results) => {
            if (results.statusCode == 200) {
                this.Cities = results.data;
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    ShowCategories() {
        this.router.navigate(['/select-category']);
    }
    GetProviderData() {
        let env = this;
        this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
            if (results.statusCode == 200) {
                setTimeout(() => {
                    env.ProviderData = results.data;
                }, 5000);
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
};
UpdateRegisterPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UpdateRegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _raw_loader_updateregister_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_updateregister_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateRegisterPage);



/***/ }),

/***/ 9848:
/*!************************************************************!*\
  !*** ./src/app/settings/register/updateregister.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-section {\n  margin: 10px 20px;\n}\n\n.form-section ion-item {\n  border: 2px solid #ededed;\n  border-radius: 10px;\n  color: #561d5e;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLG1CQUFBO0FBREoiLCJmaWxlIjoidXBkYXRlcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweDtcclxufVxyXG5cclxuLmZvcm0tc2VjdGlvbiBpb24taXRlbSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBjb2xvcjogIzU2MWQ1ZTtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 9911:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/register/updateregister.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update Personal Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"form-section\">\n\n    <form #regForm=\"ngForm\" (ngSubmit)=\"RegisterNow(regForm.value)\">\n\n\n      <ion-item>\n        <ion-label position=\"floating\">State {{ProviderData.stateId}}</ion-label>\n        <ion-select type=\"text\" [(ngModel)]=\"ProviderData.stateId\" name=\"stateId\" (ionChange)=\"GetCitis($event.target)\"\n          required>\n          <ion-select-option [value]=\"state.id\" *ngFor=\"let state of States\">\n            {{state.name}} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n\n\n      <br>\n      <ion-button [disabled]=\"!regForm.valid\" type=\"submit\" class=\"theme-btn\" expand=\"block\">Submit\n      </ion-button>\n\n    </form>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_register_updateregister_module_ts.js.map