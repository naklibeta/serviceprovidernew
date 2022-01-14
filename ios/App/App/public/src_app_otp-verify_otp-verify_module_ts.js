(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_otp-verify_otp-verify_module_ts"], {

/***/ 4866:
/*!*********************************************************!*\
  !*** ./src/app/otp-verify/otp-verify-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerifyPageRoutingModule": () => (/* binding */ OtpVerifyPageRoutingModule)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _otp_verify_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verify.page */ 2180);




            const routes = [
                {
                    path: '',
                    component: _otp_verify_page__WEBPACK_IMPORTED_MODULE_0__.OtpVerifyPage
                }
            ];
            let OtpVerifyPageRoutingModule = class OtpVerifyPageRoutingModule {
            };
            OtpVerifyPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
                })
            ], OtpVerifyPageRoutingModule);



            /***/
        }),

/***/ 5708:
/*!*************************************************!*\
  !*** ./src/app/otp-verify/otp-verify.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerifyPageModule": () => (/* binding */ OtpVerifyPageModule)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _otp_verify_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verify-routing.module */ 4866);
/* harmony import */ var _otp_verify_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verify.page */ 2180);







            let OtpVerifyPageModule = class OtpVerifyPageModule {
            };
            OtpVerifyPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
                        _otp_verify_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpVerifyPageRoutingModule
                    ],
                    declarations: [_otp_verify_page__WEBPACK_IMPORTED_MODULE_1__.OtpVerifyPage]
                })
            ], OtpVerifyPageModule);



            /***/
        }),

/***/ 2180:
/*!***********************************************!*\
  !*** ./src/app/otp-verify/otp-verify.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerifyPage": () => (/* binding */ OtpVerifyPage)
                /* harmony export */
            });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_otp_verify_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./otp-verify.page.html */ 1635);
/* harmony import */ var _otp_verify_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verify.page.scss */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






            let OtpVerifyPage = class OtpVerifyPage {
                constructor(apiService, router) {
                    this.apiService = apiService;
                    this.router = router;
                    this.username = '';
                    this.ShowEnterOTP = false;
                    this.TimerTextShow = false;
                    this.timerOn = true;
                    this.WarningTxt = false;
                }
                ngOnInit() {
                    this.ResetOTPFields();
                    this.ShowEnterOTP = false;
                }
                ionViewDidEnter() {
                    this.ResetOTPFields();
                    this.ShowEnterOTP = false;
                }
                LoginNow() {
                    if (this.WarningTxt == false) {
                        this.apiService.presentToast('Please enter correct mobile number or email address', 3000);
                        return;
                    }
                    this.apiService.showLoader('Please wait, sending OTP..');
                    // this.router.navigate(['']);
                    this.ShowEnterOTP = true;
                    // this.otp1.value = this.otp2.value = this.otp3.value = this.otp4.value = '';
                    this.apiService.Common_POST('/login', { username: this.username }).subscribe((results) => {
                        if (results.statusCode == 200) {
                            localStorage.setItem('UserData', JSON.stringify(results.data));
                            let OTPR = results.otp;
                            if (OTPR) {
                                var OTPEncoded = atob(OTPR);
                                this.FinalOTP = OTPEncoded - 1212;
                                console.log(this.FinalOTP, 'this.FinalOTP');
                                this.UserVerified = results.userVerification;
                                let env = this;
                                setTimeout(() => {
                                    env.timer(60);
                                }, 1000);
                                this.TimerTextShow = true;
                                //--------------------------
                                this.ResetOTPFields();
                                //--------------------------------
                            }
                            else {
                                this.apiService.presentToast('Error occured: OTP not sent from server', 3000);
                            }
                        }
                        else {
                            this.apiService.presentToast(results.message, 3000);
                        }
                    }, err => {
                        this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
                    });
                }
                ResetOTPFields() {
                    let doc1 = document.getElementById('otp1');
                    let doc2 = document.getElementById('otp2');
                    let doc3 = document.getElementById('otp3');
                    let doc4 = document.getElementById('otp4');
                    if (doc1)
                        doc1.value = doc2.value = doc3.value = doc4.value = '';
                }
                VerifyNow() {
                    let OTPEntered = this.otp1.value + '' + this.otp2.value + '' + this.otp3.value + '' + this.otp4.value;
                    if (OTPEntered.length != 4) {
                        this.apiService.presentToast('Please enter 4 digit OTP', 3000);
                        return;
                    }
                    this.ShowEnterOTP = true;
                    if (OTPEntered == this.FinalOTP) {
                        if (this.UserVerified == true) {
                            localStorage.setItem('isLogged', 'true');
                            this.router.navigate(['']);
                        }
                        else {
                            this.router.navigate(['/register']);
                        }
                    }
                    else {
                        this.apiService.presentToast('OTP does not match, please try again', 3000);
                    }
                }
                otpController(event, next, prev) {
                    if (event.target.value.length < 1 && prev) {
                        prev.setFocus();
                    }
                    else if (next && event.target.value.length > 0) {
                        next.setFocus();
                    }
                    else {
                        return 0;
                    }
                }
                timer(remaining) {
                    let env = this;
                    var m = Math.floor(remaining / 60);
                    var s = remaining % 60;
                    m = m < 10 ? '0' + m : m;
                    s = s < 10 ? '0' + s : s;
                    let selectDoc = document.getElementById('timer');
                    selectDoc.innerHTML = m + ':' + s;
                    remaining -= 1;
                    if (remaining >= 0 && this.timerOn) {
                        setTimeout(function () {
                            env.timer(remaining);
                        }, 1000);
                        return;
                    }
                    if (!this.timerOn) {
                        // Do validate stuff here
                        return;
                    }
                    this.TimerTextShow = false;
                    // Do timeout stuff here
                    //alert('Timeout for otp');
                }
                validateEmail(stringEntered) {
                    var email = stringEntered.value;
                    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
                    if (email == "") {
                        this.WarningTxt = false;
                    }
                    else if (!mailFormat.test(email)) {
                        this.WarningTxt = false;
                    }
                    else {
                        if (email.includes('@')) {
                            localStorage.setItem('pre_email', email);
                        }
                        else {
                            localStorage.setItem('pre_mobile', email);
                        }
                        this.WarningTxt = true;
                    }
                }
            };
            OtpVerifyPage.ctorParameters = () => [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
            ];
            OtpVerifyPage.propDecorators = {
                otp1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['otp1',] }],
                otp2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['otp2',] }],
                otp3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['otp3',] }],
                otp4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['otp4',] }]
            };
            OtpVerifyPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
                (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
                    selector: 'app-otp-verify',
                    template: _raw_loader_otp_verify_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
                    styles: [_otp_verify_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
                })
            ], OtpVerifyPage);



            /***/
        }),

/***/ 7397:
/*!*************************************************!*\
  !*** ./src/app/otp-verify/otp-verify.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-logo-section {\n  height: 50%;\n}\n\n.middle-content {\n  text-align: center;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.custom-input-otp {\n  border: 3px solid #11346D;\n  border-radius: 10px;\n}\n\n.middle-content {\n  text-align: center;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0px 30px;\n}\n\n.input-content {\n  height: 50%;\n}\n\n.otp-inputs ion-input {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n  border-radius: 50%;\n  --background: #ebebeb;\n  --padding-start: 0px;\n  line-height: 32px;\n  color: #11346D;\n}\n\n.otp-heading {\n  margin: 0;\n  color: #11346D;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC12ZXJpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFHQSwyQkFBQTtBQUFKOztBQUlBO0VBQ0kseUJBQUE7RUFFQSxtQkFBQTtBQUZKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFHQSwyQkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBUUE7RUFDSSxXQUFBO0FBTEo7O0FBU0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVBKIiwiZmlsZSI6Im90cC12ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1sb2dvLXNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcblxyXG4ubWlkZGxlLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLWlucHV0LW90cCB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNTYxZDVlO1xyXG4gICAgLy8gbWFyZ2luOiA0NnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5taWRkbGUtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIG1hcmdpbjogMHB4IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uaW5wdXQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuXHJcbi5vdHAtaW5wdXRzIGlvbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBjb2xvcjogIzU2MWQ1ZTtcclxufVxyXG5cclxuXHJcbi5vdHAtaGVhZGluZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzU2MWQ1ZTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufSJdfQ== */");

            /***/
        }),

/***/ 1635:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp-verify/otp-verify.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */
            });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <div class=\"top-logo-section theme-color-back\">\n    <div class=\"middle-content\">\n      <img src=\"assets/imgs/logo.png\">\n    </div>\n  </div>\n\n  <div class=\"input-content\" *ngIf=\"!ShowEnterOTP\">\n    <div class=\"middle-content \">\n      <ion-item class=\"custom-input-otp\">\n        <ion-label position=\"floating\">Email ID / Phone Number</ion-label>\n        <ion-input (input)=\"validateEmail($event.target)\" [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-button [disabled]=\"username.length==0\" (click)=\"LoginNow()\" class=\"theme-btn\" expand=\"block\">Login / SignUp\n      </ion-button>\n    </div>\n  </div>\n\n  <div class=\"input-content otp-inputs\" *ngIf=\"ShowEnterOTP\">\n\n    <div class=\"middle-content \">\n      <h4 class=\"otp-heading\">\n        Please enter OTP recieved\n      </h4>\n      <ion-row text-center>\n        <ion-col>\n          <ion-input id=\"otp1\" type=\"tel\" #otp1 required maxLength=\"1\" (keyup)=\"otpController($event,otp2,'')\">\n          </ion-input>\n          <ion-input id=\"otp2\" type=\"tel\" #otp2 required maxLength=\"1\" (keyup)=\"otpController($event,otp3,otp1)\">\n          </ion-input>\n          <ion-input id=\"otp3\" type=\"tel\" #otp3 required maxLength=\"1\" (keyup)=\"otpController($event,otp4,otp2)\">\n          </ion-input>\n          <ion-input id=\"otp4\" type=\"tel\" #otp4 required maxLength=\"1\" (keyup)=\"otpController($event,'',otp3)\"\n            (input)=\"VerifyNow()\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <div class=\"mtb-10\">\n        <div *ngIf=\"TimerTextShow\">Resend OTP in : <span id=\"timer\"></span></div>\n\n        <div *ngIf=\"!TimerTextShow\"><i>Didn't recieved OTP ?</i>&nbsp;&nbsp;&nbsp;<a\n            class=\"text-primary text-decoration-underline\" style=\"cursor: pointer;\" (click)=\"LoginNow()\">Resend OTP</a>\n        </div>\n      </div>\n      <ion-button [disabled]=\"username.length==0\" (click)=\"VerifyNow()\" class=\"theme-btn\" expand=\"block\">Verify OTP\n      </ion-button>\n    </div>\n\n  </div>\n\n</ion-content>");

            /***/
        })

}]);
//# sourceMappingURL=src_app_otp-verify_otp-verify_module_ts.js.map