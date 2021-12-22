(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_my-jobs_my-jobs_module_ts"],{

/***/ 1338:
/*!***************************************************!*\
  !*** ./src/app/my-jobs/my-jobs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyJobsPageRoutingModule": () => (/* binding */ MyJobsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _my_jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-jobs.page */ 2320);




const routes = [
    {
        path: '',
        component: _my_jobs_page__WEBPACK_IMPORTED_MODULE_0__.MyJobsPage
    }
];
let MyJobsPageRoutingModule = class MyJobsPageRoutingModule {
};
MyJobsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyJobsPageRoutingModule);



/***/ }),

/***/ 21:
/*!*******************************************!*\
  !*** ./src/app/my-jobs/my-jobs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyJobsPageModule": () => (/* binding */ MyJobsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _my_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-jobs-routing.module */ 1338);
/* harmony import */ var _my_jobs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-jobs.page */ 2320);







let MyJobsPageModule = class MyJobsPageModule {
};
MyJobsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyJobsPageRoutingModule
        ],
        declarations: [_my_jobs_page__WEBPACK_IMPORTED_MODULE_1__.MyJobsPage]
    })
], MyJobsPageModule);



/***/ }),

/***/ 2320:
/*!*****************************************!*\
  !*** ./src/app/my-jobs/my-jobs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyJobsPage": () => (/* binding */ MyJobsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_my_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-jobs.page.html */ 7893);
/* harmony import */ var _my_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-jobs.page.scss */ 4052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let MyJobsPage = class MyJobsPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.providerId = '';
        this.MyJobs = [];
        this.no_data = false;
        let UserData = this.apiService.Get_UserData();
        this.providerId = UserData.providerId;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.apiService.showLoader('Please wait, getting your jobs..');
        if (this.apiService.Get_ProviderId()) {
            let env = this;
            env.GetJobs();
            this.IntervalVar = setInterval(() => {
                // env.GetJobs();
            }, 10000);
        }
    }
    ionViewDidLeave() {
        clearInterval(this.IntervalVar);
    }
    GetJobs() {
        this.apiService.Common_POST('/myjobs', { provider_id: this.providerId }).subscribe((results) => {
            if (results.statusCode == 200) {
                this.MyJobs = results.data;
                if (this.MyJobs.length == 0) {
                    this.no_data = true;
                }
            }
            else {
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    GotoJobs(joblist) {
        localStorage.setItem('jobdetails', joblist.orderId);
        this.router.navigate(['/job-details']);
    }
};
MyJobsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MyJobsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-my-jobs',
        template: _raw_loader_my_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyJobsPage);



/***/ }),

/***/ 4052:
/*!*******************************************!*\
  !*** ./src/app/my-jobs/my-jobs.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  box-shadow: none;\n  border: 1px solid #561d5e;\n}\n\nion-card-header {\n  padding: 7px 21px;\n  font-weight: bolder;\n}\n\nion-card-title {\n  font-size: 14px;\n}\n\nion-card-content {\n  font-size: 11px;\n}\n\n.job-status {\n  text-align: end;\n}\n\n.color-theme {\n  color: #561d5e;\n}\n\n.status-txt {\n  font-size: 9px;\n}\n\n.text-detail {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWpvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtBQUFKIiwiZmlsZSI6Im15LWpvYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjFkNWVcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDdweCAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmpvYi1zdGF0dXMge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4uY29sb3ItdGhlbWUge1xyXG4gICAgY29sb3I6ICM1NjFkNWU7XHJcbn1cclxuXHJcbi5zdGF0dXMtdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcblxyXG5cclxuLnRleHQtZGV0YWlsIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 7893:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-jobs/my-jobs.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col col-6>\r\n        <ion-title>\r\n          <img class=\"header-logo\" src=\"assets/imgs/Icon.png\">\r\n          <span class=\"header-name\"> My Jobs </span>\r\n        </ion-title>\r\n      </ion-col>\r\n      <ion-col col-6 class=\"text-right status-user\">\r\n        <a *ngIf=\"apiService.Get_UserStatus() == 'InActive' \">\r\n          <ion-icon name=\"ellipse\" class=\"status-inactive\"> </ion-icon> InActive\r\n        </a>\r\n        <a *ngIf=\"apiService.Get_UserStatus() == 'Active' \">\r\n          <ion-icon name=\"ellipse\" class=\"status-active\"> </ion-icon> Active\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"no-data-msg\" *ngIf=\" no_data\">\r\n    <span> No job(s) found </span>\r\n  </div>\r\n\r\n  <ion-card *ngFor=\"let joblist of MyJobs\">\r\n\r\n    <ion-card-content>\r\n\r\n      <ion-row (click)=\"GotoJobs(joblist)\">\r\n        <ion-col size=\"7\">\r\n          <ion-card-title>{{joblist.title}}</ion-card-title>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"job-status\">\r\n          <span class=\"status-txt\"> {{ apiService.JobStatus(joblist.status) }} </span>\r\n          <ion-icon name=\"ellipse\" class=\"color-theme\"></ion-icon>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\">\r\n          <p class=\"date text-detail\">Preferred Date:- {{apiService.formatDate(joblist.date)}} </p>\r\n          <p class=\"text-detail\"> {{joblist.detail | slice:0:100}} </p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_my-jobs_my-jobs_module_ts.js.map