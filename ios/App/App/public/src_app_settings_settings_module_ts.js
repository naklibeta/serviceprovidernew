(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 8786:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 583);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 7187:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 8786);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 583);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 583:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 4718);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 5872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 6683);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 3139);









let SettingsPage = class SettingsPage {
    constructor(apiService, router, alertController, camera, inappb) {
        this.apiService = apiService;
        this.router = router;
        this.alertController = alertController;
        this.camera = camera;
        this.inappb = inappb;
        this.SelectFrom = false;
        this.ProviderData = {};
        this.selectedImage = '';
        this.Qualification = false;
        this.TrainingFilled = false;
        this.RefAdded = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('view changes');
        this.GetProviderData();
    }
    ProfessionalDetails() {
        this.router.navigate(['/professional-details']);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Logout !',
                message: 'Are you sure, do you want to logout?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            localStorage.removeItem('UserData');
                            localStorage.removeItem('isLogged');
                            localStorage.removeItem('selectedCategories');
                            this.router.navigate(['/otp-verify']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    kyc() {
        this.router.navigate(['/kyc']);
    }
    reference() {
        this.router.navigate(['/reference']);
    }
    training() {
        this.router.navigate(['/schedule-training']);
    }
    NavigateNow(pagename) {
        this.router.navigate(['/' + pagename]);
    }
    ShowWebPage(link) {
        const browser = this.inappb.create(link);
    }
    GetProviderData() {
        this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
            if (results.statusCode == 200) {
                this.ProviderData = results.data;
                debugger;
                //---------------Set Flags--------------------------
                if (this.ProviderData.degree && this.ProviderData.education) {
                    this.Qualification = true;
                }
                else {
                    this.Qualification = false;
                }
                let TrainingData = results.trainingData;
                if (TrainingData) {
                    if (TrainingData.date && TrainingData.time) {
                        this.TrainingFilled = true;
                    }
                    else {
                        this.TrainingFilled = false;
                    }
                }
                else {
                    this.TrainingFilled = false;
                }
                if (this.ProviderData.mobile1 && this.ProviderData.mobile2) {
                    this.RefAdded = true;
                }
                else {
                    this.RefAdded = false;
                }
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    StartCamera() {
        if (this.SelectFrom == false) {
            var options = {
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
        }
        else {
            var options = {
                quality: 50,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
                allowEdit: true
            };
        }
        let env = this;
        this.camera.getPicture(options).then((imageData) => {
            console.log(imageData, 'imageData');
            this.selectedImage = 'data:image/jpeg;base64,' + imageData;
            console.log(this.selectedImage, 'base64Image');
            env.getBase64(this.selectedImage);
            this.apiService.showLoader('Please wait, uploading..');
            setTimeout(() => {
                env.UploadNow();
            }, 3000);
        }, (err) => {
        });
    }
    UploadNow() {
        let ProviderId = this.apiService.Get_ProviderId();
        let formData = new FormData();
        formData.append('providerId', ProviderId);
        formData.append('file', this.selectedFile);
        this.apiService.Common_POST('/uploadProviderImage', formData).subscribe((results) => {
            if (results.statusCode == 200) {
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    getBase64(url) {
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
            const file = new File([blob], "filecertificate", { type: "image/jpeg" });
            this.selectedFile = file;
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Please Select!',
                message: 'Upload image using?',
                buttons: [
                    {
                        text: 'Gallery',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.SelectFrom = true;
                            this.StartCamera();
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Camera',
                        handler: () => {
                            this.SelectFrom = false;
                            this.StartCamera();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 5872:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-avatar {\n  width: 70px;\n  height: 70px;\n}\n\n.color-theme {\n  color: #561d5e;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.menu-label {\n  font-size: 12px;\n}\n\n.menu-rows {\n  border-bottom: 1px solid #dfdfdf;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLmNvbG9yLXRoZW1lIHtcclxuICAgIGNvbG9yOiAjNTYxZDVlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1lbnUtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLm1lbnUtcm93cyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 4718:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-6>\n        <ion-title>\n          <img class=\"header-logo\" src=\"assets/imgs/Icon.png\">\n          <span class=\"header-name\"> Settings </span>\n        </ion-title>\n      </ion-col>\n      <ion-col col-6 class=\"text-right status-user\">\n        <a *ngIf=\"apiService.Get_UserStatus() == 'InActive' \">\n          <ion-icon name=\"ellipse\" class=\"status-inactive\"> </ion-icon> InActive\n        </a>\n        <a *ngIf=\"apiService.Get_UserStatus() == 'Active' \">\n          <ion-icon name=\"ellipse\" class=\"status-active\"> </ion-icon> Active\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item style=\"margin:10px 0px\">\n    <ion-avatar slot=\"start\">\n      <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n\n      <img *ngIf=\"selectedImage == '' \" onerror=\"this.src='assets/imgs/Icon.png';\" [src]=\"ProviderData.photo\"\n        class=\"cert-img\" (click)=\"presentAlertConfirm()\">\n\n      <img *ngIf=\"selectedImage != '' \" [src]=\"selectedImage\" class=\"cert-img\" (click)=\"presentAlertConfirm()\">\n\n\n    </ion-avatar>\n    <ion-label>\n      <h2 style=\"text-transform: capitalize;\">{{ProviderData.name}}</h2>\n      <p>{{ProviderData.emailId}}</p>\n      <p class=\"color-theme\" *ngIf=\"apiService.Get_UserStatus() == 'Active' \">Profile Activated</p>\n      <p class=\"color-theme\" *ngIf=\"apiService.Get_UserStatus() == 'InActive' \">Profile Inactive</p>\n    </ion-label>\n  </ion-item>\n\n\n  <div class=\"\">\n\n    <ion-row class=\"menu-rows\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> Registration </span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon name=\"checkmark-outline\" color=\"success\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"ProfessionalDetails()\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> Professional Details </span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon name=\"checkmark-outline\" *ngIf=\"Qualification\" color=\"success\"></ion-icon>\n        <ion-icon name=\"alert-circle-outline\" *ngIf=\"!Qualification\" color=\"danger\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"kyc()\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"people-circle-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> KYC </span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon *ngIf=\"apiService.Get_UserStatus() == 'Active' \" name=\"checkmark-outline\" color=\"success\"></ion-icon>\n        <ion-icon *ngIf=\"apiService.Get_UserStatus() == 'InActive' \" name=\"alert-circle-outline\" color=\"danger\">\n        </ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"reference()\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"person-circle-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> References </span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon name=\"checkmark-outline\" *ngIf=\"RefAdded\" color=\"success\"></ion-icon>\n        <ion-icon name=\"alert-circle-outline\" *ngIf=\"!RefAdded\" color=\"danger\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"training()\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"newspaper-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> Training Schedule </span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon name=\"checkmark-outline\" *ngIf=\"TrainingFilled\" color=\"success\"></ion-icon>\n        <ion-icon name=\"alert-circle-outline\" *ngIf=\"!TrainingFilled\" color=\"danger\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"NavigateNow('register')\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> Personal Details </span>\n      </ion-col>\n      <ion-col size=\"2\">\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"NavigateNow('reviews')\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> Reviews </span>\n      </ion-col>\n      <ion-col size=\"2\">\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"NavigateNow('help-and-support')\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> Help & Support </span>\n      </ion-col>\n      <ion-col size=\"2\">\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"people-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> Invite Friends </span>\n      </ion-col>\n      <ion-col size=\"2\">\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"ShowWebPage('https://naklibeta.com/pages/sp-terms.html')\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"list-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> About Us </span>\n      </ion-col>\n      <ion-col size=\"2\">\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"menu-rows\" (click)=\"logout()\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"8\">\n        <span class=\"menu-label\"> Logout </span>\n      </ion-col>\n      <ion-col size=\"2\">\n\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map