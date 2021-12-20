(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_settings_schedule-training_schedule-training_module_ts"],{

/***/ 9691:
/*!********************************************************************************!*\
  !*** ./src/app/settings/schedule-training/schedule-training-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleTrainingPageRoutingModule": () => (/* binding */ ScheduleTrainingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _schedule_training_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-training.page */ 5977);




const routes = [
    {
        path: '',
        component: _schedule_training_page__WEBPACK_IMPORTED_MODULE_0__.ScheduleTrainingPage
    }
];
let ScheduleTrainingPageRoutingModule = class ScheduleTrainingPageRoutingModule {
};
ScheduleTrainingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScheduleTrainingPageRoutingModule);



/***/ }),

/***/ 1148:
/*!************************************************************************!*\
  !*** ./src/app/settings/schedule-training/schedule-training.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleTrainingPageModule": () => (/* binding */ ScheduleTrainingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _schedule_training_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-training-routing.module */ 9691);
/* harmony import */ var _schedule_training_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-training.page */ 5977);







let ScheduleTrainingPageModule = class ScheduleTrainingPageModule {
};
ScheduleTrainingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _schedule_training_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScheduleTrainingPageRoutingModule
        ],
        declarations: [_schedule_training_page__WEBPACK_IMPORTED_MODULE_1__.ScheduleTrainingPage]
    })
], ScheduleTrainingPageModule);



/***/ }),

/***/ 5977:
/*!**********************************************************************!*\
  !*** ./src/app/settings/schedule-training/schedule-training.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleTrainingPage": () => (/* binding */ ScheduleTrainingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_schedule_training_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./schedule-training.page.html */ 867);
/* harmony import */ var _schedule_training_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-training.page.scss */ 8501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let ScheduleTrainingPage = class ScheduleTrainingPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.myDetails = {};
    }
    ngOnInit() {
        this.myDetails = this.apiService.Get_UserData();
    }
    UpdateProNow(value) {
        this.apiService.showLoader('Please wait, updating details..');
        value.providerId = this.apiService.Get_ProviderId();
        this.apiService.Common_POST('/setTraining', value).subscribe((results) => {
            if (results.statusCode == 200) {
                this.apiService.presentToast(results.message, 3000);
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/settings']));
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
};
ScheduleTrainingPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ScheduleTrainingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-schedule-training',
        template: _raw_loader_schedule_training_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_schedule_training_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScheduleTrainingPage);



/***/ }),

/***/ 8501:
/*!************************************************************************!*\
  !*** ./src/app/settings/schedule-training/schedule-training.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  margin-top: 50px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.detail-col {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.schedule-row {\n  margin-top: 50px;\n  font-weight: 600;\n}\n\n.date-col {\n  border: 1px solid #909090;\n  border-radius: 5px;\n  padding: 0;\n  margin-top: 10px;\n  font-size: 14px;\n}\n\n.button-row {\n  margin-top: 50px;\n}\n\n.button-col {\n  padding: 0;\n}\n\n.button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLXRyYWluaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSiIsImZpbGUiOiJzY2hlZHVsZS10cmFpbmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtY29sIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kYXRlLWNvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTA5MDkwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tY29sIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */");

/***/ }),

/***/ 867:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/schedule-training/schedule-training.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Schedule Training</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form #regForm=\"ngForm\" (ngSubmit)=\"UpdateProNow(regForm.value)\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"detail-col\">\r\n          <div>\r\n            Name : {{myDetails.name}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"detail-col\">\r\n          <div>\r\n            Mobile number : {{myDetails.mobile}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"detail-col\">\r\n          <div>\r\n            Email id : {{myDetails.emailId}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"schedule-row\">\r\n        <ion-col>\r\n          <div>Schedule :</div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"date-col\">\r\n          <ion-datetime presentation=\"time-date\" placeholder=\"Preferred Date\" ngModel name=\"date\"></ion-datetime>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"date-col\">\r\n          <ion-datetime displayFormat=\"hh:mm A\" placeholder=\"Preferred Time\" ngModel name=\"time\"></ion-datetime>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"button-row\">\r\n        <ion-col class=\"button-col\">\r\n          <div>\r\n            <ion-button class=\"button\" color=\"themepurple\" expand=\"block\" type=\"submit\">SUBMIT</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_schedule-training_schedule-training_module_ts.js.map