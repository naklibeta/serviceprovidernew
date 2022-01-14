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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_job_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./job-details.page.html */ 1803);
/* harmony import */ var _job_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-details.page.scss */ 1931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);







let JobDetailsPage = class JobDetailsPage {
    constructor(apiService, router, loader) {
        this.apiService = apiService;
        this.router = router;
        this.loader = loader;
        this.JobDetails = {};
    }
    ngOnInit() {
        this.JobId = localStorage.getItem('jobdetails');
        this.LoadJob();
    }
    ionViewDidEnter() {
        this.apiService.showLoader('Please wait, getting job details..');
        if (this.apiService.Get_ProviderId()) {
            let env = this;
            env.LoadJob();
            this.IntervalVar = setInterval(() => {
                env.LoadJob();
            }, 10000);
        }
    }
    ionViewDidLeave() {
        clearInterval(this.IntervalVar);
    }
    LoadJob() {
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
        this.showLoader('Please wait..');
        let AcceptSend = {
            "provider_id": this.apiService.Get_ProviderId(),
            "orderId": this.JobId
        };
        this.apiService.Common_POST('/accept', AcceptSend).subscribe((results) => {
            this.hideLoader();
            if (results.statusCode == 200) {
                this.ngOnInit();
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast('Error occured, unable to accept job ', 3000);
            }
        }, err => {
            this.hideLoader();
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    StartStatus() {
        this.showLoader('Please wait..');
        let AcceptSend = {
            "provider_id": this.apiService.Get_ProviderId(),
            "orderId": this.JobId
        };
        this.apiService.Common_POST('/start', AcceptSend).subscribe((results) => {
            this.hideLoader();
            if (results.statusCode == 200) {
                this.ngOnInit();
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast('Error occured, unable to start job ', 3000);
            }
        }, err => {
            this.hideLoader();
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    EndStatus() {
        this.showLoader('Please wait..');
        let AcceptSend = {
            "provider_id": this.apiService.Get_ProviderId(),
            "orderId": this.JobId
        };
        this.apiService.Common_POST('/end', AcceptSend).subscribe((results) => {
            this.hideLoader();
            if (results.statusCode == 200) {
                this.ngOnInit();
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast('Error occured, unable to end job ', 3000);
            }
        }, err => {
            this.hideLoader();
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    Decline() {
        this.showLoader('Please wait..');
        let AcceptSend = {
            "providerId": this.apiService.Get_ProviderId(),
            "orderId": this.JobId
        };
        this.apiService.Common_POST('/declined', AcceptSend).subscribe((results) => {
            if (results.statusCode == 200) {
                this.ngOnInit();
                this.apiService.presentToast(results.message, 3000);
            }
            else {
                this.apiService.presentToast('Error occured, unable to end job ', 3000);
            }
        }, err => {
            this.hideLoader();
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    SendQuotation() {
        this.router.navigate(['/quotation']);
    }
    UpdateQuotation() {
        localStorage.setItem('jobdetailsUpdate', this.JobId);
        this.router.navigate(['/update-quotation']);
    }
    showLoader(loaderMsg) {
        this.loader.create({
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
            this.loader.dismiss();
        }, 1000);
    }
};
JobDetailsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
JobDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  margin: 0 15px;\n}\n\n.page-title {\n  margin-top: 15px;\n  margin-bottom: 0;\n  font-weight: 600;\n}\n\n.order-id {\n  margin-top: 0;\n  color: #909090;\n  font-size: 10px;\n}\n\n.date {\n  margin: 15px 0;\n  color: #909090;\n  text-align: end;\n  font-size: 12px;\n}\n\n.img-div {\n  border: 1px solid #A0A0A0;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.img-div > ion-img {\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n}\n\n.detail-content {\n  color: #909090;\n  font-size: 12px;\n}\n\n.date-2 {\n  text-align: end;\n  color: #909090;\n  font-size: 12px;\n}\n\n.address-tag {\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.address {\n  color: #909090;\n  font-size: 12px;\n  text-transform: capitalize;\n}\n\n.nomargin {\n  margin: 0;\n}\n\n.button-row {\n  margin-top: 25px;\n}\n\nion-button {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJqb2ItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ub3JkZXItaWQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaW1nLWRpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQTBBMEEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmltZy1kaXYgPiBpb24taW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtY29udGVudCB7XHJcbiAgICBjb2xvcjogIzkwOTA5MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcblxyXG4uZGF0ZS0yIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYWRkcmVzcy10YWcge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICAgXHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5ub21hcmdpbntcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Job Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-grid>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <div>\r\n          <h6 class=\"page-title\">{{JobDetails.title}}</h6>\r\n          <p class=\"order-id\">Order Id : {{JobId}}</p>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <div>\r\n          <p class=\"date\">Date : {{ apiService.formatDate(JobDetails.date)}}</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"img-div\">\r\n          <ion-img [src]=\"JobDetails.url\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <p class=\"detail-content\">\r\n            {{JobDetails.detail}}\r\n          </p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row *ngIf=\"JobDetails.status!=0\">\r\n      <ion-col>\r\n        <div>\r\n          <h5 class=\"address-tag\">Customer Name :</h5>\r\n        </div>\r\n        <div>\r\n          <h6 class=\"address nomargin\">\r\n            {{JobDetails.customerName}}\r\n          </h6>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"JobDetails.status!=0\">\r\n      <ion-col>\r\n        <div>\r\n          <h6 class=\"address-tag\">Customer Contact Number :</h6>\r\n        </div>\r\n        <div>\r\n          <h6 class=\"address nomargin\">\r\n            {{JobDetails.mobile}}\r\n          </h6>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <h6 class=\"address-tag\">Address :</h6>\r\n        </div>\r\n        <div>\r\n          <h6 class=\"address nomargin\">\r\n            {{JobDetails.address}}\r\n          </h6>\r\n        </div>\r\n        <!-- <div>\r\n          <p class=\"detail-content\">\r\n            Accusam et justo duo dolores et ea rebum. Stet\r\n            clita kasd gubergren, no sea takimata sanctus est\r\n            Lorem ipsum dolor sit amet Sampler.\r\n          </p>\r\n        </div> -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"button-row\">\r\n      <ion-col *ngIf=\"JobDetails.status==0 && apiService.Get_UserStatus()=='Active' \" size=\"12\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"AcceptJob()\">ACCEPT</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==1 && apiService.Get_ProviderId() == JobDetails.providerId\" size=\"6\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"Decline()\">Decline</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==1 && apiService.Get_ProviderId() == JobDetails.providerId\" size=\"6\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"SendQuotation()\">Send Quotation</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==2\" size=\"6\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\">Wait for approval</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==3  \" size=\"6\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"StartStatus()\">Start Job</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"JobDetails.status==5  \" size=\"6\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"EndStatus()\">End Job</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"JobDetails.status==4 \">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"SendQuotation()\">Send New Quotation</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" *ngIf=\"JobDetails.status>=6  &&  JobDetails.status!=9  &&  JobDetails.status!=10\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\">Job Completed</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\"\r\n        *ngIf=\"JobDetails.status==3 || JobDetails.status==5 || JobDetails.status==6 || JobDetails.status==2\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\" (click)=\"UpdateQuotation()\">Update Quotation</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"6\" *ngIf=\"JobDetails.status==8 \">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\">Payment Recieved</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"JobDetails.status==9 || JobDetails.status==10\">\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themepurple\">Payment Refunded to Customer</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col>\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"themeoutlinepurple\">DECLINE</ion-button>\r\n        </div>\r\n      </ion-col> -->\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_job-details_job-details_module_ts.js.map