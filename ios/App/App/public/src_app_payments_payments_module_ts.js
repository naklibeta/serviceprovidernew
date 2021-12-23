(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_payments_payments_module_ts"],{

/***/ 3412:
/*!*****************************************************!*\
  !*** ./src/app/payments/payments-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageRoutingModule": () => (/* binding */ PaymentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page */ 1876);




const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_0__.PaymentsPage
    }
];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {
};
PaymentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentsPageRoutingModule);



/***/ }),

/***/ 3004:
/*!*********************************************!*\
  !*** ./src/app/payments/payments.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageModule": () => (/* binding */ PaymentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-routing.module */ 3412);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page */ 1876);







let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentsPageRoutingModule
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_1__.PaymentsPage]
    })
], PaymentsPageModule);



/***/ }),

/***/ 1876:
/*!*******************************************!*\
  !*** ./src/app/payments/payments.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPage": () => (/* binding */ PaymentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_payments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payments.page.html */ 2278);
/* harmony import */ var _payments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page.scss */ 8367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);





let PaymentsPage = class PaymentsPage {
    constructor(apiService) {
        this.apiService = apiService;
        this.paymentData = [];
        this.pendingpayments = [];
        this.showCompletedList = true;
        this.no_data = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        let env = this;
        this.GetPaymentDetails();
        this.GetPendingPaymentDetails();
        this.IntervalVar = setInterval(() => {
            env.GetPaymentDetails();
            env.GetPendingPaymentDetails();
        }, 10000);
    }
    ionViewDidLeave() {
        clearInterval(this.IntervalVar);
    }
    GetPaymentDetails() {
        this.apiService.Common_POST('/completepayment', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
            if (results.statusCode == 200) {
                this.paymentData = results.data;
                if (this.paymentData.length == 0) {
                    this.no_data = true;
                }
                else {
                    this.no_data = false;
                }
            }
            else {
                this.paymentData = [];
                this.no_data = true;
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    GetPendingPaymentDetails() {
        this.apiService.Common_POST('/pendingpayment', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
            if (results.statusCode == 200) {
                this.pendingpayments = results.data;
                if (this.pendingpayments.length == 0) {
                    this.no_data = true;
                }
            }
            else {
                this.no_data = true;
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    ionViewWillEnter() {
    }
    TabChange(change) {
        console.log('cleciked');
        this.showCompletedList = change;
    }
};
PaymentsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
PaymentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-payments',
        template: _raw_loader_payments_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payments_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentsPage);



/***/ }),

/***/ 8367:
/*!*********************************************!*\
  !*** ./src/app/payments/payments.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tabs-inner {\n  display: none !important;\n}\n\nion-tab-bar {\n  min-height: 50px;\n}\n\n.ion-tab-button-left {\n  border-right: 1px solid #561d5e;\n}\n\nion-list {\n  overflow: scroll;\n  margin-top: 80px;\n}\n\n.ion-col-list ion-col {\n  padding: 0;\n}\n\nion-label {\n  font-weight: 600;\n  font-size: 12px !important;\n  color: #555555 !important;\n  text-transform: capitalize;\n}\n\nb {\n  font-size: 12px;\n  color: black;\n}\n\n.date {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFNQTtFQUNJLFVBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7QUFISiIsImZpbGUiOiJwYXltZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10YWItYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pb24tdGFiLWJ1dHRvbi1sZWZ0IHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1NjFkNWU7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4vLyBpb24tcm93IHtcclxuLy8gICAgIG1hcmdpbjogNXB4IDA7XHJcbi8vIH1cclxuXHJcbi5pb24tY29sLWxpc3QgaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1NTU1NTUgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5iIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 2278:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/payments.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col col-6>\r\n        <ion-title>\r\n          <img class=\"header-logo\" src=\"assets/imgs/Icon.png\">\r\n          <span class=\"header-name\"> Payments </span>\r\n        </ion-title>\r\n      </ion-col>\r\n      <ion-col col-6 class=\"text-right status-user\">\r\n        <a *ngIf=\"apiService.Get_UserStatus() == 'InActive' \">\r\n          <ion-icon name=\"ellipse\" class=\"status-inactive\"> </ion-icon> InActive\r\n        </a>\r\n        <a *ngIf=\"apiService.Get_UserStatus() == 'Active' \">\r\n          <ion-icon name=\"ellipse\" class=\"status-active\"> </ion-icon> Active\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n\r\n    <!-- Tab bar -->\r\n    <ion-tab-bar slot=\"top\">\r\n      <ion-tab-button (click)=\"TabChange(true)\" class=\"ion-tab-button-left\">\r\n        <ion-icon name=\"checkbox\"></ion-icon>\r\n        <ion-label>Completed</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"TabChange(false)\">\r\n        <ion-icon name=\"list\"></ion-icon>\r\n        <ion-label>Pending</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n  </ion-tabs>\r\n\r\n  <ion-list *ngIf=\"showCompletedList\">\r\n\r\n    <div class=\"no-data-msg\" *ngIf=\" no_data && paymentData.length==0\">\r\n      <span> No payment(s) found </span>\r\n    </div>\r\n\r\n    <ion-item lines=\"full\" *ngFor=\"let completedpayment of paymentData\">\r\n      <ion-grid class=\"ion-col-list\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Order Id : </b>{{completedpayment.orderId}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"ion-text-wrap date\"><b>Date : </b>{{apiService.formatDate(completedpayment.date)}}\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Service Name : </b>{{completedpayment.serviceName}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Customer Name : </b>{{completedpayment.customerName}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Address : </b>{{completedpayment.address}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Your Earning : </b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Amount : </b>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              ₹ {{completedpayment.provider_commission}}\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              ₹ {{completedpayment.quotation.amount}}\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"!showCompletedList\">\r\n\r\n    <div class=\"no-data-msg\" *ngIf=\" no_data ==true && pendingpayments.length==0\">\r\n      <span> No pending payment(s) found </span>\r\n    </div>\r\n\r\n    <ion-item lines=\"full\" *ngFor=\"let pendingpayment of pendingpayments\">\r\n      <ion-grid class=\"ion-col-list\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Order Id : </b>{{pendingpayment.orderId}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label class=\"ion-text-wrap date\"><b>Date : </b>{{pendingpayment.date}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Service Name : </b>{{pendingpayment.serviceName}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Customer Name : </b>{{pendingpayment.customerName}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Address : </b>{{pendingpayment.address}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\" *ngIf=\"pendingpayment.provider_commission\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Your Earning : </b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\" *ngIf=\"pendingpayment.quotation.amount\">\r\n            <ion-label class=\"ion-text-wrap\"><b>Amount : </b>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\" *ngIf=\"pendingpayment.provider_commission\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              ₹ {{pendingpayment.provider_commission}}\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\" *ngIf=\"pendingpayment.quotation.amount\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              ₹ {{pendingpayment.quotation.amount}}\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_payments_payments_module_ts.js.map