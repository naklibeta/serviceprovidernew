(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_update-quotation_update-quotation_module_ts"], {

/***/ 742:
/*!*********************************************************************!*\
  !*** ./src/app/update-quotation/update-quotation-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateQuotationPageRoutingModule": () => (/* binding */ UpdateQuotationPageRoutingModule)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _update_quotation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-quotation.page */ 3625);




            const routes = [
                {
                    path: '',
                    component: _update_quotation_page__WEBPACK_IMPORTED_MODULE_0__.UpdateQuotationPage
                }
            ];
            let UpdateQuotationPageRoutingModule = class UpdateQuotationPageRoutingModule {
            };
            UpdateQuotationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
                })
            ], UpdateQuotationPageRoutingModule);



            /***/
        }),

/***/ 1484:
/*!*************************************************************!*\
  !*** ./src/app/update-quotation/update-quotation.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateQuotationPageModule": () => (/* binding */ UpdateQuotationPageModule)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _update_quotation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-quotation-routing.module */ 742);
/* harmony import */ var _update_quotation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-quotation.page */ 3625);







            let UpdateQuotationPageModule = class UpdateQuotationPageModule {
            };
            UpdateQuotationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                        _update_quotation_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateQuotationPageRoutingModule
                    ],
                    declarations: [_update_quotation_page__WEBPACK_IMPORTED_MODULE_1__.UpdateQuotationPage]
                })
            ], UpdateQuotationPageModule);



            /***/
        }),

/***/ 3625:
/*!***********************************************************!*\
  !*** ./src/app/update-quotation/update-quotation.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateQuotationPage": () => (/* binding */ UpdateQuotationPage)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_update_quotation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-quotation.page.html */ 8017);
/* harmony import */ var _update_quotation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-quotation.page.scss */ 2855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






            let UpdateQuotationPage = class UpdateQuotationPage {
                constructor(apiService, router) {
                    this.apiService = apiService;
                    this.router = router;
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
                    this.JobId = localStorage.getItem('jobdetailsUpdate');
                    this.LoadJob();
                }
                SendQuo(values) {
                    this.apiService.showLoader('Sending Quotation Updates, Please wait..');
                    let SendData = {
                        "orderId": this.JobId,
                        "quotation": values.quotation,
                        "amount": this.CoreAmount,
                        "gst": this.CGST,
                        "sgst": this.SGST,
                        "igst": this.IGST
                    };
                    this.apiService.Common_POST('/newQuotation', SendData).subscribe((results) => {
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
                                this.CGST = this.JobDetails.taxPercentage;
                                this.SGST = this.JobDetails.taxPercentage2;
                                this.IGST = this.JobDetails.taxPercentage3;
                                this.CoreAmount = this.JobDetails.quotation.taxable_amount;
                                this.TotalAmount = this.JobDetails.quotation.amount;
                                //-----Apply Tax Cost-----------
                                this.CGST_Amount = (this.CGST / 100) * this.CoreAmount;
                                this.SGST_Amount = (this.SGST / 100) * this.CoreAmount;
                                this.IGST_Amount = (this.IGST / 100) * this.CoreAmount;
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
                        return;
                    }
                    let targetval = parseInt(target.value);
                    if (type == 'CGST' || type == 'SGST') {
                        this.TotalAmount = 0;
                        this.IGST_Amount = 0;
                        this.IGST = 0;
                        if (type == 'CGST')
                            this.CGST_Amount = (targetval / 100) * this.CoreAmount;
                        if (type == 'SGST')
                            this.SGST_Amount = (targetval / 100) * this.CoreAmount;
                        this.TotalAmount = this.CGST_Amount + this.CoreAmount + this.SGST_Amount;
                    }
                    if (type == 'IGST') {
                        //reset C/SGST------------
                        this.TotalAmount = 0;
                        this.CGST_Amount = 0;
                        this.SGST_Amount = 0;
                        this.CGST = 0;
                        this.SGST = 0;
                        this.IGST_Amount = (targetval / 100) * this.CoreAmount;
                        this.TotalAmount = this.IGST_Amount + this.CoreAmount;
                    }
                }
                CalculateTotal() {
                }
            };
            UpdateQuotationPage.ctorParameters = () => [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
            ];
            UpdateQuotationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
                    selector: 'app-update-quotation',
                    template: _raw_loader_update_quotation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
                    styles: [_update_quotation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
                })
            ], UpdateQuotationPage);



            /***/
        }),

/***/ 2855:
/*!*************************************************************!*\
  !*** ./src/app/update-quotation/update-quotation.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  margin: 0 10px;\n}\n\n.tag-con {\n  padding-top: 10px;\n  padding-bottom: 0;\n}\n\n.tag {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 0;\n}\n\n.date-tag-con {\n  padding-top: 0;\n}\n\n.date-tag {\n  color: #5e5e5e;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n.text-area {\n  border: 1px solid #909090;\n  border-radius: 5px;\n  font-size: 14px;\n  min-height: 100px;\n  margin: 0;\n}\n\nion-input {\n  border: 1px solid #909090;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\np {\n  margin: 0;\n  font-size: 12px;\n  color: #555555;\n  font-weight: 600;\n}\n\n.amount-tag {\n  color: #000000;\n}\n\n.tax-tag {\n  font-size: 8px;\n  color: #11346D;\n}\n\n.tag-col {\n  margin: auto;\n}\n\n.total-amount-row {\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1xdW90YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoidXBkYXRlLXF1b3RhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnRhZy1jb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmRhdGUtdGFnLWNvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLmRhdGUtdGFnIHtcclxuICAgIGNvbG9yOiAjNWU1ZTVlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRleHQtYXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTA5MDkwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTA5MDkwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmFtb3VudC10YWcge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi50YXgtdGFnIHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgY29sb3I6ICM1NjFkNWU7XHJcbn1cclxuXHJcbi50YWctY29sIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRvdGFsLWFtb3VudC1yb3cge1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn0iXX0= */");

            /***/
        }),

/***/ 8017:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-quotation/update-quotation.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update Quotation</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content fullscreen>\n  <form #regForm=\"ngForm\" (ngSubmit)=\"SendQuo(regForm.value)\">\n\n    <ion-grid *ngIf=\"JobDetails\">\n      <ion-row>\n        <ion-col class=\"tag-con\">\n          <ion-label class=\"tag\">{{JobDetails.title}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"date-tag-con\">\n          <ion-label class=\"date-tag\" position=\"stacked\">Preferred Date :\n            {{apiService.formatDate(JobDetails.date)}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-textarea *ngIf=\"JobDetails\" class=\"text-area\" placeholder=\"Additional Description\" name=\"quotation\"\n            [(ngModel)]=\"JobDetails.quotation.details\" required>\n          </ion-textarea>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"tag-col\">\n          <p class=\"amount-tag\">Amount :</p>\n        </ion-col>\n        <ion-col>\n          <ion-input placeholder=\"0\" type=\"number\" name=\"core_amount\" [(ngModel)]=\"CoreAmount\"\n            (input)=\"AmountChanged($event.target)\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\" class=\"tag-col\">\n          <p>CGST @</p>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input placeholder=\"0 %\" type=\"tel\" maxlength=\"2\" name=\"CGST\" [(ngModel)]=\"CGST\"\n            (input)=\"TaxChanged($event.target, 'CGST')\">\n          </ion-input>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-input placeholder=\"0\" type=\"number\" name=\"CGST_Amount\" disabled=\"true\" [(ngModel)]=\"CGST_Amount\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\" class=\"tag-col\">\n          <p>SGST @</p>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input placeholder=\"0 %\" type=\"tel\" maxlength=\"2\" name=\"SGST\" [(ngModel)]=\"SGST\"\n            (input)=\"TaxChanged($event.target, 'SGST')\">\n          </ion-input>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-input placeholder=\"0\" type=\"number\" name=\"SGST_Amount\" disabled=\"true\" [(ngModel)]=\"SGST_Amount\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\" class=\"tag-col\">\n          <p>IGST @</p>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-input placeholder=\"0 %\" type=\"tel\" maxlength=\"2\" name=\"IGST\" [(ngModel)]=\"IGST\"\n            (input)=\"TaxChanged($event.target, 'IGST')\">\n          </ion-input>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-input placeholder=\"0\" type=\"number\" name=\"IGST_Amount\" disabled=\"true\" [(ngModel)]=\"IGST_Amount\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"total-amount-row\">\n        <ion-col class=\"tag-col\">\n          <p class=\"amount-tag\">Total Amount :</p>\n          <p class=\"tax-tag\">* inclusive of all taxes</p>\n        </ion-col>\n        <ion-col>\n          <p>₹ {{TotalAmount}}/-</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"tag-col\">\n          <ion-button expand=\"block\" color=\"themepurple\" type=\"submit\"\n            [disabled]=\"TotalAmount==0 || !TotalAmount && !regForm.valid \">\n            SUBMIT</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </form>\n</ion-content>");

            /***/
        })

}]);
//# sourceMappingURL=src_app_update-quotation_update-quotation_module_ts.js.map