(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_settings_kyc_kyc_module_ts"],{

/***/ 3079:
/*!****************************************************!*\
  !*** ./src/app/settings/kyc/kyc-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycPageRoutingModule": () => (/* binding */ KycPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _kyc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc.page */ 6644);




const routes = [
    {
        path: '',
        component: _kyc_page__WEBPACK_IMPORTED_MODULE_0__.KycPage
    }
];
let KycPageRoutingModule = class KycPageRoutingModule {
};
KycPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KycPageRoutingModule);



/***/ }),

/***/ 6412:
/*!********************************************!*\
  !*** ./src/app/settings/kyc/kyc.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycPageModule": () => (/* binding */ KycPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _kyc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-routing.module */ 3079);
/* harmony import */ var _kyc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc.page */ 6644);







let KycPageModule = class KycPageModule {
};
KycPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _kyc_routing_module__WEBPACK_IMPORTED_MODULE_0__.KycPageRoutingModule
        ],
        declarations: [_kyc_page__WEBPACK_IMPORTED_MODULE_1__.KycPage]
    })
], KycPageModule);



/***/ }),

/***/ 6644:
/*!******************************************!*\
  !*** ./src/app/settings/kyc/kyc.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycPage": () => (/* binding */ KycPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_kyc_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./kyc.page.html */ 3120);
/* harmony import */ var _kyc_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc.page.scss */ 9727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ 8213);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 6683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);









let KycPage = class KycPage {
    constructor(router, apiService, alert, camera, loadingController) {
        this.router = router;
        this.apiService = apiService;
        this.alert = alert;
        this.camera = camera;
        this.loadingController = loadingController;
        this.ProviderData = {};
        this.SelectFrom = false;
        this.inValidAcc = false;
        //------Photo Variabled--------------------
        this.selectedpanImage = '';
        this.selected_aFront_Image = '';
        this.selected_aBack_Image = '';
    }
    ngOnInit() {
        this.GetProviderData();
    }
    UpdateKYCNow(values) {
        if (!this.ProviderData.aadharCardFront && !this.selected_aFront_Image) {
            this.apiService.presentToast('Please select Aadhar Card Front Image', 3000);
            return;
        }
        if (!this.ProviderData.aadharCardBack && !this.selected_aBack_Image) {
            this.apiService.presentToast('Please select Aadhar Card Front Image', 3000);
            return;
        }
        this.showLoader('Please wait, updating details..');
        let ProviderId = this.apiService.Get_ProviderId();
        let formData = new FormData();
        formData.append('ac_name', values.name);
        formData.append('bank', values.bank);
        formData.append('ifsc', values.ifsc);
        formData.append('branch', values.branch);
        formData.append('ac_number', values.ac_number);
        formData.append('providerId', ProviderId);
        if (this.selectedpanFile) {
            formData.append('pancard', this.selectedpanFile);
        }
        if (this.selected_aFront_File) {
            formData.append('aadharCardFront', this.selected_aFront_File);
        }
        if (this.selected_aBack_File) {
            formData.append('aadharCardBack', this.selected_aBack_File);
        }
        this.apiService.Common_POST('/kyc', formData).subscribe((results) => {
            if (results.statusCode == 200) {
                this.hideLoader();
                this.GetProviderData();
                this.router.navigate(['/settings']);
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    GetProviderData() {
        this.apiService.Common_POST('/findProviderDetails', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
            if (results.statusCode == 200) {
                this.ProviderData = results.data;
                if (results.data)
                    localStorage.setItem('UserData', JSON.stringify(results.data));
                if (this.ProviderData.ac_number) {
                    this.ProviderData.cacNumber = this.ProviderData.ac_number;
                }
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    ChooseImage(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
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
                            this.StartCamera(type);
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Camera',
                        handler: () => {
                            this.SelectFrom = false;
                            this.StartCamera(type);
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    StartCamera(type) {
        if (this.SelectFrom == false) {
            var options = {
                quality: 30,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
        }
        else {
            var options = {
                quality: 30,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
                allowEdit: true
            };
        }
        let env = this;
        this.camera.getPicture(options).then((imageData) => {
            if (type == 'pan') {
                this.selectedpanImage = 'data:image/jpeg;base64,' + imageData;
                env.getBase64(this.selectedpanImage, type);
            }
            else if (type == 'aFront') {
                this.selected_aFront_Image = 'data:image/jpeg;base64,' + imageData;
                env.getBase64(this.selected_aFront_Image, type);
            }
            else if (type == 'aBack') {
                this.selected_aBack_Image = 'data:image/jpeg;base64,' + imageData;
                env.getBase64(this.selected_aBack_Image, type);
            }
        }, (err) => {
        });
    }
    getBase64(url, type) {
        let env = this;
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
            const file = new File([blob], "filecertificate", { type: "image/jpeg" });
            if (type == 'pan') {
                env.selectedpanFile = file;
            }
            else if (type == 'aFront') {
                env.selected_aFront_File = file;
            }
            else if (type == 'aBack') {
                env.selected_aBack_File = file;
            }
        });
    }
    CheckAc(valuetarget) {
        let exact = valuetarget.value;
        if (exact != this.ProviderData.ac_number) {
            this.inValidAcc = true;
        }
        else {
            this.inValidAcc = false;
        }
    }
    showLoader(loaderMsg) {
        this.loadingController.create({
            message: loaderMsg
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
            });
        });
    }
    hideLoader() {
        let env = this;
        setTimeout(() => {
            this.loadingController.dismiss();
        }, 1000);
    }
};
KycPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
KycPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-kyc',
        template: _raw_loader_kyc_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_kyc_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KycPage);



/***/ }),

/***/ 9727:
/*!********************************************!*\
  !*** ./src/app/settings/kyc/kyc.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-section {\n  margin: 10px 20px;\n}\n\n.form-section ion-item {\n  border: 2px solid #ededed;\n  border-radius: 10px;\n  color: #561d5e;\n  margin-bottom: 15px;\n}\n\n.cert-img {\n  margin: 35px auto;\n  max-height: 200px;\n}\n\n.camera-icon {\n  font-size: 100px;\n  margin: 35px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt5Yy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6Imt5Yy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1zZWN0aW9uIGlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIGNvbG9yOiAjNTYxZDVlO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG59XHJcblxyXG4uY2VydC1pbWcge1xyXG4gICAgbWFyZ2luOiAzNXB4IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNhbWVyYS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBtYXJnaW46IDM1cHggYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ 3120:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/kyc/kyc.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update KYC Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"form-section\">\n\n    <form #regForm=\"ngForm\" (ngSubmit)=\"UpdateKYCNow(regForm.value)\">\n\n\n      <ion-item>\n        <ion-label position=\"floating\">Account Holder Name</ion-label>\n        <ion-input [(ngModel)]=\"ProviderData.name\" type=\"text\" name=\"name\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Bank Name</ion-label>\n        <ion-input [(ngModel)]=\"ProviderData.bank\" type=\"text\" name=\"bank\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">IFSC Code</ion-label>\n        <ion-input [(ngModel)]=\"ProviderData.ifsc\" type=\"text\" name=\"ifsc\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Branch Name</ion-label>\n        <ion-input [(ngModel)]=\"ProviderData.branch\" type=\"text\" name=\"branch\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Bank Account Number</ion-label>\n        <ion-input [(ngModel)]=\"ProviderData.ac_number\" tel type=\"tel\" name=\"ac_number\" required maxlength=\"18\"\n          minlength=\"6\"></ion-input>\n      </ion-item>\n\n      <p *ngIf=\"inValidAcc\" class=\"warning-text\">Account number does not match</p>\n      <ion-item>\n        <ion-label position=\"floating\">Confirm Bank Account Number</ion-label>\n        <ion-input (input)=\"CheckAc($event.target)\" [(ngModel)]=\"ProviderData.cacNumber\" type=\"password\"\n          name=\"cacNumber\" required maxlength=\"18\" minlength=\"6\">\n        </ion-input>\n\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label position=\"floating\">PAN Card</ion-label>\n        <ion-icon *ngIf=\"!ProviderData.pancard && selectedpanImage == '' \" name=\"camera-outline\" class=\"camera-icon\"\n          (click)=\"ChooseImage('pan')\">\n        </ion-icon>\n        <img *ngIf=\"selectedpanImage == '' \" [src]=\"ProviderData.pancard\" class=\"cert-img\" (click)=\"ChooseImage('pan')\">\n        <img *ngIf=\"selectedpanImage != '' \" [src]=\"selectedpanImage\" class=\"cert-img\" (click)=\"ChooseImage('pan')\">\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Aadhar Front</ion-label>\n        <ion-icon *ngIf=\"!ProviderData.aadharCardFront && selected_aFront_Image == '' \" name=\"camera-outline\"\n          class=\"camera-icon\" (click)=\"ChooseImage('aFront')\">\n        </ion-icon>\n        <img *ngIf=\"selected_aFront_Image == '' \" [src]=\"ProviderData.aadharCardFront\" class=\"cert-img\"\n          (click)=\"ChooseImage('aFront')\">\n        <img *ngIf=\"selected_aFront_Image != '' \" [src]=\"selected_aFront_Image\" class=\"cert-img\"\n          (click)=\"ChooseImage('aFront')\">\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Aadhar Back</ion-label>\n        <ion-icon *ngIf=\"!ProviderData.aadharCardFront && selected_aBack_Image == '' \" name=\"camera-outline\"\n          class=\"camera-icon\" (click)=\"ChooseImage('aBack')\">\n        </ion-icon>\n        <img *ngIf=\"selected_aBack_Image == '' \" [src]=\"ProviderData.aadharCardBack\" class=\"cert-img\"\n          (click)=\"ChooseImage('aBack')\">\n        <img *ngIf=\"selected_aBack_Image != '' \" [src]=\"selected_aBack_Image\" class=\"cert-img\"\n          (click)=\"ChooseImage('aBack')\">\n      </ion-item>\n\n\n\n      <br><br>\n      <ion-button [disabled]=\"!regForm.valid\" type=\"submit\" class=\"theme-btn\" expand=\"block\">Submit\n      </ion-button>\n\n\n    </form>\n\n\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_kyc_kyc_module_ts.js.map