(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_settings_reviews_reviews_module_ts"], {

/***/ 618:
/*!************************************************************!*\
  !*** ./src/app/settings/reviews/reviews-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsPageRoutingModule": () => (/* binding */ ReviewsPageRoutingModule)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.page */ 1118);




            const routes = [
                {
                    path: '',
                    component: _reviews_page__WEBPACK_IMPORTED_MODULE_0__.ReviewsPage
                }
            ];
            let ReviewsPageRoutingModule = class ReviewsPageRoutingModule {
            };
            ReviewsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
                })
            ], ReviewsPageRoutingModule);



            /***/
        }),

/***/ 8642:
/*!****************************************************!*\
  !*** ./src/app/settings/reviews/reviews.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsPageModule": () => (/* binding */ ReviewsPageModule)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews-routing.module */ 618);
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.page */ 1118);







            let ReviewsPageModule = class ReviewsPageModule {
            };
            ReviewsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                        _reviews_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewsPageRoutingModule,
                    ],
                    declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_1__.ReviewsPage]
                })
            ], ReviewsPageModule);



            /***/
        }),

/***/ 1118:
/*!**************************************************!*\
  !*** ./src/app/settings/reviews/reviews.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsPage": () => (/* binding */ ReviewsPage)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reviews.page.html */ 3989);
/* harmony import */ var _reviews_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.page.scss */ 1964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ 8213);





            let ReviewsPage = class ReviewsPage {
                constructor(apiService) {
                    this.apiService = apiService;
                    this.reviewdata = [];
                    this.no_data = false;
                }
                ngOnInit() {
                    this.GetReviews();
                }
                GetReviews() {
                    this.apiService.Common_POST('/reviews', { providerId: this.apiService.Get_ProviderId() }).subscribe((results) => {
                        if (results.statusCode == 200) {
                            this.reviewdata = results.data;
                            if (this.reviewdata.length == 0) {
                                this.no_data = true;
                            }
                            else {
                                this.no_data = false;
                            }
                        }
                        else {
                            this.reviewdata = [];
                            this.no_data = true;
                        }
                    }, err => {
                        this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
                    });
                }
            };
            ReviewsPage.ctorParameters = () => [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
            ];
            ReviewsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
                    selector: 'app-reviews',
                    template: _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
                    styles: [_reviews_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
                })
            ], ReviewsPage);



            /***/
        }),

/***/ 1964:
/*!****************************************************!*\
  !*** ./src/app/settings/reviews/reviews.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h6 {\n  text-transform: capitalize;\n  font-weight: 600;\n  margin: auto;\n}\n\nion-icon {\n  color: #f56728;\n}\n\np {\n  font-size: 11px;\n  font-weight: 500;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJyZXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg2IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNmN2M3MDQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */");

            /***/
        }),

/***/ 3989:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/reviews/reviews.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Reviews</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <div class=\"no-data-msg\" *ngIf=\" no_data\">\r\n    <span> No review(s) found </span>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item lines=\"full\" *ngFor=\"let reviews of reviewdata\">\r\n      <ion-label>\r\n        <h6>{{reviews.name}}</h6>\r\n        <div>\r\n          <ion-icon *ngFor=\"let item of [].constructor(reviews.ratings)\" name=\"star\">\r\n          </ion-icon>\r\n        </div>\r\n        <p class=\"ion-text-wrap\">{{reviews.review}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>");

            /***/
        })

}]);
//# sourceMappingURL=src_app_settings_reviews_reviews_module_ts.js.map