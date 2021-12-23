(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_settings_professional-details_professional-details_module_ts"],{

/***/ 1373:
/*!**************************************************************************************!*\
  !*** ./src/app/settings/professional-details/professional-details-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfessionalDetailsPageRoutingModule": () => (/* binding */ ProfessionalDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _professional_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./professional-details.page */ 1364);




const routes = [
    {
        path: '',
        component: _professional_details_page__WEBPACK_IMPORTED_MODULE_0__.ProfessionalDetailsPage
    }
];
let ProfessionalDetailsPageRoutingModule = class ProfessionalDetailsPageRoutingModule {
};
ProfessionalDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfessionalDetailsPageRoutingModule);



/***/ }),

/***/ 5594:
/*!******************************************************************************!*\
  !*** ./src/app/settings/professional-details/professional-details.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfessionalDetailsPageModule": () => (/* binding */ ProfessionalDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _professional_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./professional-details-routing.module */ 1373);
/* harmony import */ var _professional_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professional-details.page */ 1364);







let ProfessionalDetailsPageModule = class ProfessionalDetailsPageModule {
};
ProfessionalDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _professional_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfessionalDetailsPageRoutingModule
        ],
        declarations: [_professional_details_page__WEBPACK_IMPORTED_MODULE_1__.ProfessionalDetailsPage]
    })
], ProfessionalDetailsPageModule);



/***/ }),

/***/ 1364:
/*!****************************************************************************!*\
  !*** ./src/app/settings/professional-details/professional-details.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfessionalDetailsPage": () => (/* binding */ ProfessionalDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_professional_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./professional-details.page.html */ 9274);
/* harmony import */ var _professional_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professional-details.page.scss */ 3385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 6683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);








let ProfessionalDetailsPage = class ProfessionalDetailsPage {
    constructor(apiService, router, camera, alertController) {
        this.apiService = apiService;
        this.router = router;
        this.camera = camera;
        this.alertController = alertController;
        this.AllDegress = [];
        this.ProviderData = {};
        this.SelectFrom = false;
        this.selectedImage = '';
    }
    ngOnInit() {
        this.apiService.showLoader('Please wait, gettings your info..');
        this.GetDegrees();
        this.GetProviderData();
    }
    UpdateProNow(values) {
        this.apiService.showLoader('Please wait, updating details..');
        let ProviderId = this.apiService.Get_ProviderId();
        let formData = new FormData();
        formData.append('occupation', values.occupation);
        formData.append('education', values.education);
        formData.append('degree', values.degree);
        formData.append('aboutUs', values.aboutUs);
        formData.append('gstin', values.gstin);
        formData.append('providerId', ProviderId);
        if (this.selectedFile) {
            formData.append('certificate', this.selectedFile);
        }
        this.apiService.Common_POST('/qualification', formData).subscribe((results) => {
            if (results.statusCode == 200) {
                this.apiService.presentToast(results.message, 3000);
                this.back();
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    GetDegrees() {
        this.apiService.Common_GET('/listqualification').subscribe((results) => {
            if (results.statusCode == 200) {
                this.AllDegress = results.data;
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
            console.log(imageData, 'imageData');
            this.selectedImage = 'data:image/jpeg;base64,' + imageData;
            console.log(this.selectedImage, 'base64Image');
            env.getBase64(this.selectedImage);
        }, (err) => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    back() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/tabs/settings']));
    }
};
ProfessionalDetailsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ProfessionalDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-professional-details',
        template: _raw_loader_professional_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_professional_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfessionalDetailsPage);



/***/ }),

/***/ 3385:
/*!******************************************************************************!*\
  !*** ./src/app/settings/professional-details/professional-details.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-section {\n  margin: 10px 20px;\n}\n\n.form-section ion-item {\n  border: 2px solid #ededed;\n  border-radius: 10px;\n  color: #561d5e;\n  margin-bottom: 15px;\n}\n\n.cert-img {\n  margin: 35px auto;\n  max-height: 200px;\n}\n\n.camera-icon {\n  font-size: 100px;\n  margin: 35px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Zlc3Npb25hbC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLG1CQUFBO0FBREo7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoicHJvZmVzc2lvbmFsLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweDtcclxufVxyXG5cclxuLmZvcm0tc2VjdGlvbiBpb24taXRlbSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBjb2xvcjogIzU2MWQ1ZTtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxufVxyXG5cclxuLmNlcnQtaW1nIHtcclxuICAgIG1hcmdpbjogMzVweCBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jYW1lcmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAzNXB4IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ 9274:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/professional-details/professional-details.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Professional Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"form-section\">\n\n    <form #regForm=\"ngForm\" (ngSubmit)=\"UpdateProNow(regForm.value)\">\n\n\n      <ion-item>\n        <ion-label position=\"floating\">Highest Degree Name</ion-label>\n        <ion-input [(ngModel)]=\"ProviderData.degree\" type=\"text\" name=\"degree\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Highest Qualification</ion-label>\n        <ion-select type=\"text\" [(ngModel)]=\"ProviderData.education\" name=\"education\" required>\n          <ion-select-option value=\"{{degree.name}}\" *ngFor=\"let degree of AllDegress\">\n            {{degree.name}} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Highest Qualification Certificate</ion-label>\n\n        <ion-icon *ngIf=\"!ProviderData.certificate && selectedImage == '' \" name=\"camera-outline\" class=\"camera-icon\"\n          (click)=\"presentAlertConfirm()\">\n        </ion-icon>\n\n        <img *ngIf=\"selectedImage == '' \" [src]=\"ProviderData.certificate\" class=\"cert-img\"\n          (click)=\"presentAlertConfirm()\">\n\n        <img *ngIf=\"selectedImage != '' \" [src]=\"selectedImage\" class=\"cert-img\" (click)=\"presentAlertConfirm()\">\n\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Occupation / Business Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"ProviderData.occupation\" name=\"occupation\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">GSTIN (Optional)</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"ProviderData.gstin\" name=\"gstin\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Tell us about yourself</ion-label>\n        <ion-textarea type=\"text\" [(ngModel)]=\"ProviderData.aboutUs\" name=\"aboutUs\"></ion-textarea>\n      </ion-item>\n\n      <br>\n      <ion-button [disabled]=\"!regForm.valid\" type=\"submit\" class=\"theme-btn\" expand=\"block\">Submit\n      </ion-button>\n\n    </form>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_professional-details_professional-details_module_ts.js.map