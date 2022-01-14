(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_quotation_quotation_module_ts"], {

/***/ 1120:
/*!*******************************************************!*\
  !*** ./src/app/quotation/quotation-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationPageRoutingModule": () => (/* binding */ QuotationPageRoutingModule)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _quotation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotation.page */ 100);




            const routes = [
                {
                    path: '',
                    component: _quotation_page__WEBPACK_IMPORTED_MODULE_0__.QuotationPage
                }
            ];
            let QuotationPageRoutingModule = class QuotationPageRoutingModule {
            };
            QuotationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
                })
            ], QuotationPageRoutingModule);



            /***/
        }),

/***/ 8419:
/*!***********************************************!*\
  !*** ./src/app/quotation/quotation.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationPageModule": () => (/* binding */ QuotationPageModule)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _quotation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotation-routing.module */ 1120);
/* harmony import */ var _quotation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotation.page */ 100);







            let QuotationPageModule = class QuotationPageModule {
            };
            QuotationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                        _quotation_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuotationPageRoutingModule
                    ],
                    declarations: [_quotation_page__WEBPACK_IMPORTED_MODULE_1__.QuotationPage]
                })
            ], QuotationPageModule);



            /***/
        }),

/***/ 100:
/*!*********************************************!*\
  !*** ./src/app/quotation/quotation.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationPage": () => (/* binding */ QuotationPage)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_quotation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./quotation.page.html */ 430);
/* harmony import */ var _quotation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotation.page.scss */ 3342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






            let QuotationPage = class QuotationPage {
                constructor(apiService, router) {
                    this.apiService = apiService;
                    this.router = router;
                    this.JobDetails = {};
                    this.CoreAmount = 0;
                    this.CGST = 0;
                    this.SGST = 0;
                    this.IGST = 0;
                    this.TotalAmount = 0;
                    this.CGST_Amount = 0;
                    this.SGST_Amount = 0;
                    this.IGST_Amount = 0;
                }
                ngOnInit() {
                    this.JobId = localStorage.getItem('jobdetails');
                    this.LoadJob();
                }
                SendQuo(values) {
                    this.apiService.showLoader('Please wait, sending quotation..');
                    let SendData = {
                        "orderId": this.JobId,
                        "quotation": values.quotation,
                        "amount": this.CoreAmount,
                        "gst": this.CGST,
                        "sgst": this.SGST,
                        "igst": this.IGST
                    };
                    this.apiService.Common_POST('/insertQuotation', SendData).subscribe((results) => {
                        if (results.statusCode == 200) {
                            if (results.data) {
                                this.router.navigate(['/tabs/myjobs']);
                                this.apiService.presentToast(results.message, 3000);
                            }
                        }
                        else {
                            this.apiService.presentToast('Error occured, unable to send quotation ', 3000);
                        }
                    }, err => {
                        this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
                    });
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
                AmountChanged(target) {
                    let value = target.value;
                    this.CoreAmount = parseFloat(value);
                    if (this.IGST == 0 && this.CGST == 0 && this.SGST == 0) {
                        this.TotalAmount = this.CoreAmount;
                    }
                    //----------calculate amount now------------------
                    if (this.IGST != 0) {
                        this.TaxChanged({ value: this.IGST }, 'IGST');
                    }
                    else {
                        this.TaxChanged({ value: this.CGST }, 'CGST');
                        this.TaxChanged({ value: this.SGST }, 'SGST');
                    }
                }
                TaxChanged(target, type) {
                    if (!target.value) {
                        if (!target.value && type == 'IGST') {
                            this.IGST_Amount = 0;
                        }
                        if (!target.value && type == 'CGST') {
                            this.CGST_Amount = 0;
                        }
                        if (!target.value && type == 'SGST') {
                            this.SGST_Amount = 0;
                        }
                        return;
                    }
                    let targetval = parseFloat(target.value);
                    if (type == 'CGST' || type == 'SGST') {
                        this.TotalAmount = this.IGST_Amount = this.IGST = 0;
                        //reset all taxes and update only using SGST & CGST------------
                        if (type == 'CGST')
                            this.CGST_Amount = parseFloat(((targetval / 100) * this.CoreAmount).toFixed(2));
                        if (type == 'SGST')
                            this.SGST_Amount = parseFloat(((targetval / 100) * this.CoreAmount).toFixed(2));
                        this.TotalAmount = parseFloat((this.CGST_Amount + this.CoreAmount + this.SGST_Amount).toFixed(2));
                    }
                    if (type == 'IGST') {
                        //reset all taxes and update only using IGST------------
                        this.TotalAmount = this.CGST_Amount = this.SGST_Amount = this.CGST = this.SGST = 0;
                        this.IGST_Amount = parseFloat(((targetval / 100) * this.CoreAmount).toFixed(2));
                        this.TotalAmount = parseFloat((this.IGST_Amount + this.CoreAmount).toFixed(2));
                    }
                }
                CalculateTotal() {
                }
            };
            QuotationPage.ctorParameters = () => [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
            ];
            QuotationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
                    selector: 'app-quotation',
                    template: _raw_loader_quotation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
                    styles: [_quotation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
                })
            ], QuotationPage);



            /***/
        }),

/***/ 3342:
/*!***********************************************!*\
  !*** ./src/app/quotation/quotation.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  margin: 0 10px;\n}\n\n.tag-con {\n  padding-top: 10px;\n  padding-bottom: 0;\n}\n\n.tag {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 0;\n}\n\n.date-tag-con {\n  padding-top: 0;\n}\n\n.date-tag {\n  color: #5e5e5e;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n.text-area {\n  border: 1px solid #909090;\n  border-radius: 5px;\n  font-size: 14px;\n  min-height: 100px;\n  margin: 0;\n}\n\nion-input {\n  border: 1px solid #909090;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\np {\n  margin: 0;\n  font-size: 12px;\n  color: #555555;\n  font-weight: 600;\n}\n\n.amount-tag {\n  color: #000000;\n}\n\n.tax-tag {\n  font-size: 8px;\n  color: #11346D;\n}\n\n.tag-col {\n  margin: auto;\n}\n\n.total-amount-row {\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUFtQixpQkFBQTtBQUV2Qjs7QUFDQTtFQUNJLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZ0JBQUE7QUFJdkM7O0FBREE7RUFDSSxjQUFBO0FBSUo7O0FBREE7RUFDSSxjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZ0JBQUE7QUFNckM7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQW1CLFNBQUE7QUFPdkI7O0FBSkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUpBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFKQTtFQUNJLGNBQUE7QUFPSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBT0o7O0FBSkE7RUFDSSxZQUFBO0FBT0o7O0FBSkE7RUFDSSxjQUFBO0FBT0oiLCJmaWxlIjoicXVvdGF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4udGFnLWNvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwOyBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZGF0ZS10YWctY29uIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uZGF0ZS10YWcge1xyXG4gICAgY29sb3I6ICM1ZTVlNWU7IGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRleHQtYXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTA5MDkwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7IG1hcmdpbjogMDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MDkwOTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYW1vdW50LXRhZyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnRheC10YWcge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBjb2xvcjogIzU2MWQ1ZTtcclxufVxyXG5cclxuLnRhZy1jb2wge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udG90YWwtYW1vdW50LXJvdyB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufSJdfQ== */");

            /***/
        }),

/***/ 430:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quotation/quotation.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Quotation</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <form #regForm=\"ngForm\" (ngSubmit)=\"SendQuo(regForm.value)\">\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"tag-con\">\r\n          <ion-label class=\"tag\">{{JobDetails.title}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"date-tag-con\">\r\n          <ion-label class=\"date-tag\" position=\"stacked\">Preferred Date :\r\n            {{apiService.formatDate(JobDetails.date)}}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-textarea class=\"text-area\" placeholder=\"Additional Description\" minlength=\"10\" name=\"quotation\" ngModel\r\n            required>\r\n          </ion-textarea>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"tag-col\">\r\n          <p class=\"amount-tag\">Amount :</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-input placeholder=\"0\" type=\"number\" name=\"core_amount\" [(ngModel)]=\"CoreAmount\"\r\n            (input)=\"AmountChanged($event.target)\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"3\" class=\"tag-col\">\r\n          <p>CGST @</p>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-input placeholder=\"0 %\" type=\"tel\" maxlength=\"2\" name=\"CGST\" [(ngModel)]=\"CGST\"\r\n            (input)=\"TaxChanged($event.target, 'CGST')\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-input placeholder=\"0\" type=\"number\" name=\"CGST_Amount\" disabled=\"true\" [(ngModel)]=\"CGST_Amount\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"3\" class=\"tag-col\">\r\n          <p>SGST @</p>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-input placeholder=\"0 %\" type=\"tel\" maxlength=\"2\" name=\"SGST\" [(ngModel)]=\"SGST\"\r\n            (input)=\"TaxChanged($event.target, 'SGST')\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-input placeholder=\"0\" type=\"number\" name=\"SGST_Amount\" disabled=\"true\" [(ngModel)]=\"SGST_Amount\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"3\" class=\"tag-col\">\r\n          <p>IGST @</p>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-input placeholder=\"0 %\" type=\"tel\" maxlength=\"2\" name=\"IGST\" [(ngModel)]=\"IGST\"\r\n            (input)=\"TaxChanged($event.target, 'IGST')\">\r\n          </ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-input placeholder=\"0\" type=\"number\" name=\"IGST_Amount\" disabled=\"true\" [(ngModel)]=\"IGST_Amount\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"total-amount-row\">\r\n        <ion-col class=\"tag-col\">\r\n          <p class=\"amount-tag\">Total Amount :</p>\r\n          <p class=\"tax-tag\">* inclusive of all taxes</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <p>₹ {{TotalAmount}}/-</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"tag-col\">\r\n          <ion-button expand=\"block\" color=\"themepurple\" type=\"submit\"\r\n            [disabled]=\"TotalAmount==0 || !TotalAmount && !regForm.valid \">\r\n            SUBMIT</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </form>\r\n</ion-content>");

            /***/
        })

}]);
//# sourceMappingURL=src_app_quotation_quotation_module_ts.js.map