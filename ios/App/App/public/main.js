(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 8213:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 4766);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4595);






let ApiService = class ApiService {
    constructor(http, toastController, loadingController) {
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    Common_Test(postFix, data) {
        return this.http.post(postFix, data);
    }
    Common_POST(postFix, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + postFix, data);
    }
    Common_GET(postFix) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + postFix);
    }
    presentToast(msg, timing) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: timing,
            });
            toast.present();
        });
    }
    Get_UserData() {
        let User = localStorage.getItem('UserData');
        return JSON.parse(User);
    }
    Get_ProviderId() {
        let User = localStorage.getItem('UserData');
        if (!User) {
            return false;
        }
        let UserD = JSON.parse(User);
        if (!UserD.providerId) {
            return false;
        }
        else {
            return UserD.providerId;
        }
    }
    formatDate(dateP) {
        var d = new Date(dateP), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [day, month, year].join('/');
    }
    formatDateMMDD(dateP) {
        var date = dateP;
        var datearray = date.split("/");
        // var newdate = datearray[1] + '-' + datearray[0] + '-' + datearray[2];
        var newdate = datearray[2] + '-' + datearray[1] + '-' + datearray[0];
        return newdate;
    }
    formatDateYMD(dateP) {
        var d = new Date(dateP), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    extractTime(time) {
        var OnlyTime = time.split('T')[1];
        if (OnlyTime) {
            var SelectTime = OnlyTime.substring(0, 5);
            return SelectTime;
        }
        else {
            return '';
        }
    }
    Get_UserStatus() {
        let UserData = localStorage.getItem('UserData');
        if (!UserData)
            return 'InActive';
        let UserParsed = JSON.parse(UserData);
        let Status = UserParsed.is_active;
        if (Status == '0' || Status == 0) {
            return 'InActive';
        }
        else {
            return 'Active';
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
        this.hideLoader();
    }
    hideLoader() {
        setTimeout(() => {
            this.loadingController.dismiss();
        }, 2000);
    }
    JobStatus(status) {
        if (status == 0) {
            return 'Open';
        }
        else if (status == 1) {
            return 'Accepted By You';
        }
        else if (status == 2) {
            return 'Quotation Sent to User';
        }
        else if (status == 3) {
            return 'Quotation Accepted';
        }
        else if (status == 4) {
            return 'Quotation Rejected';
        }
        else if (status == 5) {
            return 'Start Work';
        }
        else if (status == 6) {
            return 'End Work';
        }
        else if (status == 7) {
            return 'Order Cancelled By User';
        }
        else if (status == 8) {
            return 'Payment Received';
        }
        else if (status == 9) {
            return 'Refund Initiated';
        }
        else if (status == 10) {
            return 'Refund Processed';
        }
        else {
            return '';
        }
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 6432)).then(m => m.TabsPageModule)
    },
    {
        path: 'otp-verify',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_otp-verify_otp-verify_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./otp-verify/otp-verify.module */ 5708)).then(m => m.OtpVerifyPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 2474)).then(m => m.RegisterPageModule)
    },
    {
        path: 'my-jobs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_my-jobs_my-jobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./my-jobs/my-jobs.module */ 21)).then(m => m.MyJobsPageModule)
    },
    {
        path: 'payments',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_payments_payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payments/payments.module */ 3004)).then(m => m.PaymentsPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 2101)).then(m => m.NotificationPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7187)).then(m => m.SettingsPageModule)
    },
    {
        path: 'select-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_select-category_select-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./select-category/select-category.module */ 9849)).then(m => m.SelectCategoryPageModule)
    },
    {
        path: 'job-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_job-details_job-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./job-details/job-details.module */ 8310)).then(m => m.JobDetailsPageModule)
    },
    {
        path: 'professional-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_professional-details_professional-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/professional-details/professional-details.module */ 5594)).then(m => m.ProfessionalDetailsPageModule)
    },
    {
        path: 'kyc',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_kyc_kyc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/kyc/kyc.module */ 6412)).then(m => m.KycPageModule)
    },
    {
        path: 'quotation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quotation_quotation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quotation/quotation.module */ 8419)).then(m => m.QuotationPageModule)
    },
    {
        path: 'update-quotation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_update-quotation_update-quotation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-quotation/update-quotation.module */ 1484)).then(m => m.UpdateQuotationPageModule)
    },
    {
        path: 'reference',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_reference_reference_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/reference/reference.module */ 2735)).then(m => m.ReferencePageModule)
    },
    {
        path: 'schedule-training',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_schedule-training_schedule-training_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/schedule-training/schedule-training.module */ 1148)).then(m => m.ScheduleTrainingPageModule)
    },
    {
        path: 'reviews',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_reviews_reviews_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/reviews/reviews.module */ 8642)).then(m => m.ReviewsPageModule)
    },
    {
        path: 'help-and-support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_help-and-support_help-and-support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/help-and-support/help-and-support.module */ 1192)).then(m => m.HelpAndSupportPageModule)
    },
    {
        path: 'update-quotation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_update-quotation_update-quotation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-quotation/update-quotation.module */ 1484)).then(m => m.UpdateQuotationPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/api.service */ 8213);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 7835);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/push-notifications */ 7047);










let AppComponent = class AppComponent {
    constructor(apiService, platform, router, alert) {
        this.apiService = apiService;
        this.platform = platform;
        this.router = router;
        this.alert = alert;
        this.Token = '';
        setTimeout(() => {
            _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide();
        }, 2000);
        const url = this.router.url;
        //SplashScreen.hide();
        console.log('codeupdated--');
        let env = this;
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.register();
            }
            else {
            }
        }, err => {
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('registration', (token) => {
            env.UpdateDeviceToken(token);
        });
        // PushNotifications.addListener('registrationError', (error: any) => {
        // });
        this.platform.backButton.subscribeWithPriority(1, () => {
            const urlcheck = this.router.url;
            if (urlcheck == '/tabs/tab1' || urlcheck == '/' || urlcheck == '/my-jobs' || urlcheck == '/payments'
                || urlcheck == 'notification' || urlcheck == '/settings' || urlcheck == '/otp-verify') {
                this.ChooseExit();
            }
            else if (this.apiService.Get_ProviderId()) {
                this.router.navigate(['/tabs/tab1']);
            }
            else {
                this.router.navigate(['/otp-verify']);
            }
        });
    }
    ChooseExit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: 'Exit App!',
                message: 'Are you sure, do you want to exit app?',
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
                            navigator['app'].exitApp();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    UpdateDeviceToken(token) {
        let Data = {
            "device_type": 'android',
            "device_token": token.value,
            "providerId": this.apiService.Get_ProviderId()
        };
        this.apiService.Common_POST('/update-device-token', Data).subscribe((results) => {
            if (results.statusCode == 200) { }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 6683);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 3139);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }, _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera, _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://jobbanko.com/api/provider',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		5261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		7221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		3645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		3482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		3315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		7542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		7618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		2210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		7370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		3652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		5500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		5078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		8958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		7630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		1609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		8400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		4397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		3391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		6793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		1695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map