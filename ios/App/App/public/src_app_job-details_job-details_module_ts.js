(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_job-details_job-details_module_ts"],{

/***/ 3602:
/*!***********************************************************!*\
  !*** ./src/app/job-details/job-details-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobDetailsPageRoutingModule": () => (/* binding */ JobDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _job_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-details.page */ 3723);




const routes = [
    {
        path: '',
        component: _job_details_page__WEBPACK_IMPORTED_MODULE_0__.JobDetailsPage
    }
];
let JobDetailsPageRoutingModule = class JobDetailsPageRoutingModule {
};
JobDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JobDetailsPageRoutingModule);



/***/ }),

/***/ 8310:
/*!***************************************************!*\
  !*** ./src/app/job-details/job-details.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobDetailsPageModule": () => (/* binding */ JobDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _job_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-details-routing.module */ 3602);
/* harmony import */ var _job_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-details.page */ 3723);







let JobDetailsPageModule = class JobDetailsPageModule {
};
JobDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _job_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobDetailsPageRoutingModule
        ],
        declarations: [_job_details_page__WEBPACK_IMPORTED_MODULE_1__.JobDetailsPage]
    })
], JobDetailsPageModule);



/***/ }),

/***/ 3723:
/*!*************************************************!*\
  !*** ./src/app/job-details/job-details.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobDetailsPage": () => (/* binding */ JobDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_job_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./job-details.page.html */ 1803);
/* harmony import */ var _job_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-details.page.scss */ 1931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let JobDetailsPage = class JobDetailsPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.JobDetails = {};
    }
    ngOnInit() {
        this.JobId = localStorage.getItem('jobdetails');
        this.LoadJob();
    }
    LoadJob() {
        this.apiService.showLoader('Please wait, getting job details..');
        this.apiService.Common_POST('/jobDetails', { orderId: this.JobId }).subscribe((results) => {
            if (results.statusCode == 200) {
                if (results.data) {
                    this.JobDetails = results.data;
                }
            }
            else {
                this.apiService.presentToast('Error occured, unable to find job details ', 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    AcceptJob() {
        let AcceptSend = {
            "provider_id": this.apiService.Get_ProviderId(),
            "orderId": this.JobId
        };
        this.apiService.Common_POST('/accept', AcceptSend).subscribe((results) => {
            if (results.statusCode == 200) {
                this.ngOnInit();
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast('Error occured, unable to accept job ', 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    StartStatus() {
        let AcceptSend = {
            "provider_id": this.apiService.Get_ProviderId(),
            "orderId": this.JobId
        };
        this.apiService.Common_POST('/start', AcceptSend).subscribe((results) => {
            if (results.statusCode == 200) {
                this.ngOnInit();
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast('Error occured, unable to start job ', 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    EndStatus() {
        let AcceptSend = {
            "provider_id": this.apiService.Get_ProviderId(),
            "orderId": this.JobId
        };
        this.apiService.Common_POST('/end', AcceptSend).subscribe((results) => {
            if (results.statusCode == 200) {
                this.ngOnInit();
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast('Error occured, unable to end job ', 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    SendQuotation() {
        this.router.navigate(['/quotation']);
    }
    UpdateQuotation() {
        this.router.navigate(['/quotation', 'update']);
    }
};
JobDetailsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
JobDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-job-details',
        template: _raw_loader_job_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_job_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JobDetailsPage);



/***/ }),

/***/ 1931:
/*!***************************************************!*\
  !*** ./src/app/job-details/job-details.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  margin: 0 15px;\n}\n\n.page-title {\n  margin-top: 15px;\n  margin-bottom: 0;\n  font-weight: 600;\n}\n\n.order-id {\n  margin-top: 0;\n  color: #909090;\n  font-size: 10px;\n}\n\n.date {\n  margin: 23px 0;\n  color: #909090;\n  text-align: end;\n  font-size: 14px;\n}\n\n.img-div {\n  border: 1px solid #A0A0A0;\n  padding: 10px;\n}\n\n.img-div > ion-img {\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n}\n\n.detail-content {\n  color: #909090;\n  font-size: 12px;\n}\n\n.date-2 {\n  text-align: end;\n  color: #909090;\n  font-size: 12px;\n}\n\n.address-tag {\n  margin-top: 0;\n  font-weight: 600;\n}\n\n.address {\n  color: #909090;\n}\n\n.nomargin {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtBQUNKIiwiZmlsZSI6ImpvYi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5vcmRlci1pZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICM5MDkwOTA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIG1hcmdpbjogMjNweCAwO1xyXG4gICAgY29sb3I6ICM5MDkwOTA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5pbWctZGl2IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBMEEwQTA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW1nLWRpdiA+IGlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmRldGFpbC1jb250ZW50IHtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuXHJcbi5kYXRlLTIge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgY29sb3I6ICM5MDkwOTA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzLXRhZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gICAgY29sb3I6ICM5MDkwOTA7XHJcbn1cclxuXHJcbi5ub21hcmdpbntcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */");

/***/ }),

/***/ 1803:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-details/job-details.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Job Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <h3 class=\"page-title\">{{JobDetails.title}}</h3>\r\n          <p class=\"order-id\">Order Id : {{JobId}}</p>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div>\r\n          <h6 class=\"date\">{{ apiService.formatDate(JobDetails.date)}}</h6>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"img-div\">\r\n          <ion-img [src]=\"JobDetails.url\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <p class=\"detail-content\">\r\n            {{JobDetails.detail}}\r\n          </p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row *ngIf=\"JobDetails.status!=0\">\r\n      <ion-col>\r\n        <div>\r\n          <h5 class=\"address-tag\">Customer Name :</h5>\r\n        </div>\r\n        <div>\r\n          <h6 class=\"address nomargin\">\r\n            {{JobDetails.customerName}}\r\n          </h6>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"JobDetails.status!=0\">\r\n      <ion-col>\r\n        <div>\r\n          <h5 class=\"address-tag\">Customer Contact Number :</h5>\r\n        </div>\r\n        <div>\r\n          <h6 class=\"address nomargin\">\r\n            {{JobDetails.mobile}}\r\n          </h6>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <h5 class=\"address-tag\">Address :</h5>\r\n        </div>\r\n        <div>\r\n          <h6 class=\"address nomargin\">\r\n            {{JobDetails.address}}\r\n          </h6>\r\n        </div>\r\n        <!-- <div>\r\n          <p class=\"detail-content\">\r\n            Accusam et justo duo dolores et ea rebum. Stet\r\n            clita kasd gubergren, no sea takimata sanctus est\r\n            Lorem ipsum dolor sit amet Sampler.\r\n          </p>\r\n        </div> -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col *ngIf=\"JobDetails.status==0\" size=\"12\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"AcceptJob()\">ACCEPT</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==1\" size=\"12\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"SendQuotation()\">Send Quotation</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==2\" size=\"12\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\">Please wait for quotation approval</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==3  \" size=\"6\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"StartStatus()\">Start Job</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==5  \" size=\"6\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"EndStatus()\">End Job</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"JobDetails.status==4 \">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"SendQuotation()\">Send New Quotation</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" *ngIf=\"JobDetails.status>=6  \">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\">Job Completed</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" *ngIf=\"JobDetails.status==3 || JobDetails.status==5 || JobDetails.status==6 \">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"UpdateQuotation()\">Update Quotation</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col>\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themeoutlinepurple\">DECLINE</ion-button>\r\n        </div>\r\n      </ion-col> -->\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_job-details_job-details_module_ts.js.map