(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_register_register_module_ts"],{

/***/ 1654:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 2133);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 2474:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1654);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 2133);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 2133:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 9200);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 9728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let RegisterPage = class RegisterPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.States = [];
        this.Cities = [];
        this.Email = '';
        this.Mobile = '';
        this.SelectedCategories = [];
        this.ProviderData = {};
        this.RegisteringNew = false;
        this.CityBinded = false;
    }
    ngOnInit() {
        this.GetSelectionOptions();
        if (!this.apiService.Get_ProviderId()) {
            let SetEmail = localStorage.getItem('pre_email');
            if (SetEmail) {
                this.ProviderData.emailId = SetEmail;
                this.ProviderData.makeEmailDisabled = true;
            }
            let SetMobile = localStorage.getItem('pre_mobile');
            if (SetMobile) {
                this.ProviderData.mobile = SetMobile;
                this.ProviderData.makeMobileDisabled = true;
            }
        }
        else {
        }
        if (this.apiService.Get_ProviderId()) {
            this.apiService.showLoader('Please wait, getting your details..');
        }
    }
    ionViewDidEnter() {
        let catSelected = localStorage.getItem('selectedCategories');
        this.SelectedCategories = JSON.parse(catSelected);
    }
    RegisterNow(formvalues) {
        if (!this.apiService.Get_ProviderId()) {
            this.RegisteringNew = true;
            if (formvalues.mobile) {
                if (formvalues.mobile.length != 10) {
                    this.apiService.presentToast('Please enter correct mobile number', 3000);
                    return;
                }
            }
            else {
                formvalues.mobile = this.ProviderData.mobile;
            }
        }
        else {
            this.RegisteringNew = false;
            formvalues.mobile = this.ProviderData.mobile;
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
        let checkUpdate = '/profile';
        if (!this.apiService.Get_ProviderId()) {
            checkUpdate = '/register-provider';
        }
        else {
            formvalues.providerId = this.ProviderData.providerId;
        }
        this.apiService.Common_POST(checkUpdate, formvalues).subscribe((results) => {
            if (results.statusCode == 200) {
                localStorage.setItem('UserData', JSON.stringify(results.data));
                this.apiService.presentToast(results.message, 3000);
                localStorage.setItem('isLogged', 'true');
                localStorage.removeItem('pre_email');
                localStorage.removeItem('pre_mobile');
                if (this.RegisteringNew == false) {
                    this.router.navigate(['/tabs/settings']);
                }
                else {
                    this.router.navigate(['']);
                }
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
                this.GetProviderData();
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    GetCitis(id) {
        let env = this;
        // if (env.apiService.Get_ProviderId()) {
        if (env.ProviderData.stateId != id && env.CityBinded == true) {
            env.ProviderData.cityId = '';
        }
        // }
        //------------Get Data CIties------------------------------------------
        this.apiService.Common_GET('/findCityByState/' + id.value).subscribe((results) => {
            if (results.statusCode == 200) {
                this.Cities = results.data;
                this.ProviderData.cityId = this.ProviderData.cityId;
                setTimeout(() => {
                    env.CityBinded = true;
                }, 2000);
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
        if (this.apiService.Get_ProviderId()) {
            this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
                if (results.statusCode == 200) {
                    env.ProviderData = results.data;
                    if (results.serviceCategory) {
                        localStorage.setItem('selectedCategories', JSON.stringify(results.serviceCategory));
                        this.SelectedCategories = results.serviceCategory;
                    }
                }
                else {
                    this.apiService.presentToast(results.message, 3000);
                }
            }, err => {
                this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
            });
        }
    }
};
RegisterPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 9728:
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-section {\n  margin: 10px 20px;\n}\n\n.form-section ion-item {\n  border: 2px solid #ededed;\n  border-radius: 10px;\n  color: #561d5e;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLG1CQUFBO0FBREoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweDtcclxufVxyXG5cclxuLmZvcm0tc2VjdGlvbiBpb24taXRlbSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBjb2xvcjogIzU2MWQ1ZTtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 9200:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"apiService.Get_ProviderId()\">Update Personal Details</ion-title>\r\n    <ion-title *ngIf=\"!apiService.Get_ProviderId()\">Registration</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"form-section\">\r\n\r\n    <form #regForm=\"ngForm\" (ngSubmit)=\"RegisterNow(regForm.value)\">\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Full Name</ion-label>\r\n        <ion-input [(ngModel)]=\"ProviderData.name\" type=\"text\" name=\"name\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input [disabled]=\"ProviderData.makeEmailDisabled == true\" email type=\"email\"\r\n          [(ngModel)]=\"ProviderData.emailId\" name=\"emailId\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Phone Number</ion-label>\r\n        <ion-input [disabled]=\"apiService.Get_ProviderId() || ProviderData.makeMobileDisabled == true\" type=\"Number\"\r\n          maxlength=\"10\" [(ngModel)]=\"ProviderData.mobile\" name=\"mobile\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"States.length!=0\">\r\n        <ion-label position=\"floating\">State</ion-label>\r\n        <ion-select type=\"text\" [(ngModel)]=\"ProviderData.stateId\" name=\"stateId\" (ionChange)=\"GetCitis($event.target)\"\r\n          required>\r\n          <ion-select-option [value]=\"state.id\" *ngFor=\"let state of States\">\r\n            {{state.name}} </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"Cities.length!=0\">\r\n        <ion-label position=\"floating\">City</ion-label>\r\n        <ion-select type=\"text\" [(ngModel)]=\"ProviderData.cityId\" name=\"cityId\" required>\r\n          <ion-select-option value=\"\">Please select city</ion-select-option>\r\n          <ion-select-option [value]=\"city.id\" *ngFor=\"let city of Cities\">{{city.city}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"ShowCategories()\">\r\n        <ion-label position=\"floating\">Category</ion-label>\r\n        <p> <span *ngFor=\"let cats of SelectedCategories\"> {{cats.name}}, </span> </p>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Current Address</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"ProviderData.address\" name=\"address\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <br>\r\n      <ion-button [disabled]=\"!regForm.valid\" type=\"submit\" class=\"theme-btn\" expand=\"block\">Submit\r\n      </ion-button>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map