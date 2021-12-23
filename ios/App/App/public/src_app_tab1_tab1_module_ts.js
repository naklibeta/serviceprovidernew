(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 1550:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./explore-container.component.html */ 6993);
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss */ 3643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 9370:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 1550);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 4588:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 1028);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 9634:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 1028);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 9370);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 4588);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 1028:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let Tab1Page = class Tab1Page {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.upcoming = [];
        this.today = [];
        this.category = [];
        this.providerId = '';
        this.DashboardMsg = '';
    }
    ngOnInit() {
        let UserData = this.apiService.Get_UserData();
        if (UserData)
            this.providerId = UserData.providerId;
        let providerIc_check = this.apiService.Get_ProviderId();
        if (!providerIc_check) {
            clearInterval(this.IntervalVar);
            this.router.navigate(['/otp-verify']);
        }
    }
    // UpdateDeviceToken(token) {
    //   let Data = {
    //     "device_type": 'android',
    //     "device_token": token.value,
    //     "providerId": this.apiService.Get_ProviderId()
    //   }
    //   this.apiService.Common_POST('/update-device-token', Data).subscribe((results) => {
    //     if (results.statusCode == 200) { }
    //   }, err => {
    //     this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
    //   });
    // }
    ionViewDidEnter() {
        let UserData = this.apiService.Get_UserData();
        if (UserData)
            this.providerId = UserData.providerId;
        if (this.apiService.Get_ProviderId()) {
            let env = this;
            env.LoadJobs();
            this.IntervalVar = setInterval(() => {
                env.LoadJobs();
            }, 10000);
        }
    }
    ionViewDidLeave() {
        clearInterval(this.IntervalVar);
    }
    LoadJobs() {
        // this.DashboardMsg = '';
        this.apiService.Common_POST('/getJobs', { provider_id: this.providerId }).subscribe((results) => {
            if (results.statusCode == 200) {
                if (results.data) {
                    this.upcoming = results.data.upcoming;
                    this.today = results.data.today;
                    this.category = results.data.category;
                }
                this.DashboardMsg = '';
            }
            else {
                this.DashboardMsg = results.message;
                //this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    JobDetails(upcomingjobs) {
        localStorage.setItem('jobdetails', upcomingjobs.orderId);
        this.router.navigate(['/job-details']);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 3643:
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".small-font {\n  font-size: 9px;\n}\n\nion-card {\n  border: 1px solid #561d5e;\n  box-shadow: none;\n}\n\nion-card-subtitle {\n  color: #561d5e;\n  font-size: 12px;\n  border-bottom: 1px solid;\n  padding-bottom: 5px;\n}\n\n.pref-date {\n  color: black;\n  font-weight: 500;\n  margin-top: 7px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\n.heading-section {\n  text-align: center;\n  font-size: 14px;\n  border-bottom: 1px solid #7e3289;\n  padding: 6px;\n  border-top: 1px solid #561d5e;\n  background: #561d5e;\n  color: #ffffff;\n  font-weight: 500;\n}\n\n.middle-content {\n  text-align: center;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0px 30px;\n}\n\n.input-content {\n  font-style: italic;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFHQSwyQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFISiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbC1mb250IHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTYxZDVlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICM1NjFkNWU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5cclxuLnByZWYtZGF0ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxuXHJcbi5oZWFkaW5nLXNlY3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3ZTMyODk7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzU2MWQ1ZTtcclxuICAgIGJhY2tncm91bmQ6ICM1NjFkNWU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG4ubWlkZGxlLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBtYXJnaW46IDBweCAzMHB4O1xyXG59XHJcblxyXG5cclxuLmlucHV0LWNvbnRlbnQge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 6993:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-6>\n        <ion-title>\n          <img class=\"header-logo\" src=\"assets/imgs/Icon.png\">\n          <span class=\"header-name\"> Home </span>\n        </ion-title>\n      </ion-col>\n      <ion-col col-6 class=\"text-right status-user\">\n        <a *ngIf=\"apiService.Get_UserStatus() == 'InActive' \">\n          <ion-icon name=\"ellipse\" class=\"status-inactive\"> </ion-icon> InActive\n        </a>\n        <a *ngIf=\"apiService.Get_UserStatus() == 'Active' \">\n          <ion-icon name=\"ellipse\" class=\"status-active\"> </ion-icon> Active\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"middle-content\" *ngIf=\"DashboardMsg\">\n    <p class=\"input-content\"> {{DashboardMsg}} </p>\n  </div>\n\n\n\n  <div class=\"jobs-list\">\n    <p class=\"heading-section\" *ngIf=\"upcoming.length!=0\">Upcoming Jobs Request</p>\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let upcomingjobs of upcoming\">\n        <ion-card (click)=\"JobDetails(upcomingjobs)\">\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon name=\"briefcase-outline\"></ion-icon> {{upcomingjobs.title}}\n            </ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            <p class=\"small-font\">{{upcomingjobs.requirement | slice:0:50}} </p>\n            <p class=\"small-font pref-date\">Service Date: {{upcomingjobs.date}} </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n    <p class=\"heading-section\" *ngIf=\"today.length!=0\">Today Jobs Request</p>\n\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let todayjobs of today\">\n        <ion-card (click)=\"JobDetails(todayjobs)\">\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon name=\"briefcase-outline\"></ion-icon> {{todayjobs.title}}\n            </ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            <p class=\"small-font\">{{todayjobs.requirement | slice:0:50}} </p>\n            <p class=\"small-font pref-date\">Service Date: {{todayjobs.date}} </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <p class=\"heading-section\" *ngIf=\"category.length!=0\">Jobs Near You</p>\n\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let categoryjobs of category\">\n        <ion-card (click)=\"JobDetails(categoryjobs)\">\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon name=\"briefcase-outline\"></ion-icon> {{categoryjobs.title}}\n            </ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            <p class=\"small-font\">{{categoryjobs.requirement | slice:0:50}} </p>\n            <p class=\"small-font pref-date\">Service Date: {{categoryjobs.date}} </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n\n\n\n  </div>\n\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map