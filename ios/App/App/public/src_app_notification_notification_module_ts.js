(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_notification_notification_module_ts"],{

/***/ 6192:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 3945);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 2101:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 6192);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 3945);







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 3945:
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.page.html */ 9034);
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss */ 1435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);





let NotificationPage = class NotificationPage {
    constructor(apiService) {
        this.apiService = apiService;
        this.notificationsdata = [];
        this.no_data = false;
    }
    ngOnInit() {
        //this.GetNotifications()
    }
    ionViewDidEnter() {
        if (this.apiService.Get_ProviderId()) {
            let env = this;
            env.GetNotifications();
            this.IntervalVar = setInterval(() => {
                env.GetNotifications();
            }, 10000);
        }
    }
    ionViewDidLeave() {
        clearInterval(this.IntervalVar);
        this.MarkRead();
    }
    GetNotifications() {
        this.apiService.Common_POST('/notification', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
            if (results.statusCode == 200) {
                this.notificationsdata = results.data;
                if (this.notificationsdata.length == 0) {
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
    MarkRead() {
        this.apiService.Common_POST('/readNotification', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
};
NotificationPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationPage);



/***/ }),

/***/ 1435:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  padding: 10px 0;\n}\n\nh6 {\n  margin: auto;\n  font-size: 12px;\n}\n\n.date {\n  text-align: end;\n}\n\np {\n  font-size: 11px;\n  margin: auto;\n}\n\nion-item.active {\n  --background: #efefef;\n}\n\nion-item.active h6 {\n  color: #561d5e;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNJLHFCQUFBO0FBQUo7O0FBRUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFBUiIsImZpbGUiOiJub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG5pb24taXRlbS5hY3RpdmUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG5cclxuICAgIGg2IHtcclxuICAgICAgICBjb2xvcjogIzU2MWQ1ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 9034:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col col-6>\r\n        <ion-title>\r\n          <img class=\"header-logo\" src=\"assets/imgs/Icon.png\">\r\n          <span class=\"header-name\"> Notifications </span>\r\n        </ion-title>\r\n      </ion-col>\r\n      <ion-col col-6 class=\"text-right status-user\">\r\n        <a *ngIf=\"apiService.Get_UserStatus() == 'InActive' \">\r\n          <ion-icon name=\"ellipse\" class=\"status-inactive\"> </ion-icon> InActive\r\n        </a>\r\n        <a *ngIf=\"apiService.Get_UserStatus() == 'Active' \">\r\n          <ion-icon name=\"ellipse\" class=\"status-active\"> </ion-icon> Active\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n  <ion-content fullscreen>\r\n\r\n    <div class=\"no-data-msg\" *ngIf=\" no_data\">\r\n      <span> No notification(s) found </span>\r\n    </div>\r\n\r\n    <ion-list>\r\n      <ion-item [ngClass]=\"{'active': notification.status == 0}\" lines=\"full\"\r\n        *ngFor=\"let notification of notificationsdata\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <h6>Order Id : {{notification.orderId}}</h6>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <p class=\"date\">Date : {{apiService.formatDate(notification.date)}}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <p>{{notification.title}}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_notification_notification_module_ts.js.map