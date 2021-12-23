(self["webpackChunkservice_provider"] = self["webpackChunkservice_provider"] || []).push([["src_app_select-category_select-category_module_ts"],{

/***/ 6446:
/*!*******************************************************************!*\
  !*** ./src/app/select-category/select-category-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCategoryPageRoutingModule": () => (/* binding */ SelectCategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _select_category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-category.page */ 8140);




const routes = [
    {
        path: '',
        component: _select_category_page__WEBPACK_IMPORTED_MODULE_0__.SelectCategoryPage
    }
];
let SelectCategoryPageRoutingModule = class SelectCategoryPageRoutingModule {
};
SelectCategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectCategoryPageRoutingModule);



/***/ }),

/***/ 9849:
/*!***********************************************************!*\
  !*** ./src/app/select-category/select-category.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCategoryPageModule": () => (/* binding */ SelectCategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _select_category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-category-routing.module */ 6446);
/* harmony import */ var _select_category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-category.page */ 8140);







let SelectCategoryPageModule = class SelectCategoryPageModule {
};
SelectCategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectCategoryPageRoutingModule
        ],
        declarations: [_select_category_page__WEBPACK_IMPORTED_MODULE_1__.SelectCategoryPage]
    })
], SelectCategoryPageModule);



/***/ }),

/***/ 8140:
/*!*********************************************************!*\
  !*** ./src/app/select-category/select-category.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCategoryPage": () => (/* binding */ SelectCategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_select_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./select-category.page.html */ 362);
/* harmony import */ var _select_category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-category.page.scss */ 6413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let SelectCategoryPage = class SelectCategoryPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.CategoryData = [];
        this.OrgCategoryData = [];
        this.SelectedCategoryData = [];
        this.SelectedCategories = [];
    }
    ngOnInit() {
        this.apiService.showLoader('Please wait, getting categories..');
        this.GetSelectionOptions();
        let catSelected = localStorage.getItem('selectedCategories');
        this.SelectedCategories = JSON.parse(catSelected);
        if (this.SelectedCategories) {
            this.SelectedCategoryData = this.SelectedCategories;
        }
    }
    SetSelected() {
        if (!this.SelectedCategories) {
            return;
        }
        let env = this;
        env.CategoryData.forEach(function (valueCat, i) {
            var check = 0;
            //--loop over sub cats-------------------------------
            let SubCats = valueCat.serviceDetails;
            SubCats.forEach(function (SubCatsValue, j) {
                var results = env.SelectedCategories.filter(function (entry) { return SubCatsValue.name == entry.name; });
                if (results.length != 0) {
                    env.CategoryData[i].serviceDetails[j].selected = true;
                    check++;
                }
                //-----Check All Subcats Selected--------
            });
            if (check == SubCats.length) {
                env.CategoryData[i].selected = true;
            }
            console.log(env.CategoryData);
        });
    }
    GetSelectionOptions() {
        //------------Get Data and fill all three select fields------------------------------------------
        this.apiService.Common_GET('/getService').subscribe((results) => {
            if (results.statusCode == 200) {
                this.OrgCategoryData = this.CategoryData = results.data;
                let env = this;
                setTimeout(() => {
                    env.SetSelected();
                }, 1000);
            }
            else {
                this.apiService.presentToast(results.message, 3000);
            }
        }, err => {
            this.apiService.presentToast('Error occured: ' + JSON.stringify(err), 3000);
        });
    }
    SelectCategory(subcategorydata) {
        let MakeObject = {
            id: subcategorydata.id,
            name: subcategorydata.name,
        };
        var exists = this.SelectedCategoryData.filter(function (o) {
            return o.id == subcategorydata.id;
        });
        if (exists.length == 0) {
            //----push inside--------
            this.SelectedCategoryData.push(MakeObject);
        }
        else {
            //remove already exists -------------------------------
            this.SelectedCategoryData = this.SelectedCategoryData.filter(function (obj) {
                return obj.id !== subcategorydata.id;
            });
        }
        console.log(this.SelectedCategoryData);
    }
    SelectAllSubcats(i, targetval) {
        let env = this;
        setTimeout(() => {
            let allEl = document.querySelectorAll(".subcat-checkbox-" + i);
            allEl.forEach(element => {
                if (targetval.checked == true && element.ariaChecked == 'true' || targetval.checked == false && element.ariaChecked == 'false') {
                }
                else {
                    element.click();
                }
            });
        }, 100);
    }
    SearchByName(target) {
        let valueSearch = target.value;
        if (valueSearch.length <= 2) {
            this.CategoryData = this.OrgCategoryData;
            return;
        }
        this.CategoryData = this.OrgCategoryData.filter(item => {
            return item.subCateName.startsWith(valueSearch);
        });
    }
    Back() {
        localStorage.setItem('selectedCategories', JSON.stringify(this.SelectedCategoryData));
        this.router.navigate(['/register']);
    }
};
SelectCategoryPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SelectCategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-select-category',
        template: _raw_loader_select_category_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_select_category_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectCategoryPage);



/***/ }),

/***/ 6413:
/*!***********************************************************!*\
  !*** ./src/app/select-category/select-category.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".wrapper {\n  margin: 5% auto;\n  width: 400px;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nlabel {\n  display: block;\n  cursor: pointer;\n  padding: 13px;\n  border: 1px solid #ddd;\n  border-bottom: none;\n  background: #f7f7f7;\n}\n\nlabel:hover {\n  background: #e5e5e5;\n}\n\nlabel.last {\n  border-bottom: 1px solid #fff;\n}\n\nul ul li {\n  background: #ffffff;\n}\n\n.subcat-inputs[type=checkbox] {\n  position: absolute;\n  left: -9999px;\n}\n\n.select-all-check {\n  position: absolute;\n  margin-top: 15px;\n  right: 15px;\n  width: 17px;\n  height: 17px;\n}\n\ninput[type=checkbox] ~ ul {\n  height: 0;\n  transform: scaleY(0);\n}\n\ninput[type=checkbox]:checked ~ ul {\n  height: 100%;\n  transform-origin: top;\n  transform: scaleY(1);\n}\n\ninput[type=checkbox]:checked + label {\n  background: #e5e5e5;\n  border-bottom: 1px solid #fff;\n}\n\n.subcategorylist ion-label {\n  font-size: 14px;\n}\n\n.subcategorylist ion-checkbox {\n  position: absolute;\n  right: 3rem;\n}\n\n.done {\n  position: absolute;\n  right: 10px;\n  top: 16px;\n  color: #561d5e;\n}\n\n.list-con {\n  padding: 15px 15px;\n  border-bottom: 1px solid #d5d5d5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUVJLG1CQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOSjs7QUFTQTtFQUNJLFNBQUE7RUFDQSxvQkFBQTtBQU5KOztBQVNBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBRUEsb0JBQUE7QUFQSjs7QUFVQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7QUFQSjs7QUFjSTtFQUNJLGVBQUE7QUFYUjs7QUFnQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFtQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQWhCSjs7QUFvQkE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0FBakJKIiwiZmlsZSI6InNlbGVjdC1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbmxhYmVsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuXHJcbmxhYmVsLmxhc3Qge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbnVsIHVsIGxpIHtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG5cclxuLnN1YmNhdC1pbnB1dHNbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC05OTk5cHg7XHJcbiAgICAvLyByaWdodDogMnJlbTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAvLyBoZWlnaHQ6IDE4cHg7XHJcbiAgICAvLyB3aWR0aDogMThweDtcclxuXHJcbn1cclxuXHJcbi5zZWxlY3QtYWxsLWNoZWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1+dWwge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkfnVsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIC8vIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCtsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5zdWJjYXRlZ29yeWxpc3Qge1xyXG5cclxuICAgIC8vIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4uc3ViY2F0ZWdvcnlsaXN0IGlvbi1jaGVja2JveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogM3JlbTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuLmRvbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICBjb2xvcjogIzU2MWQ1ZTtcclxufVxyXG5cclxuXHJcbi5saXN0LWNvbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcclxufSJdfQ== */");

/***/ }),

/***/ 362:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-category/select-category.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> Select Categories </ion-title>\n    <a class=\"done\" (click)=\"Back()\">Done </a>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-searchbar showCancelButton=\"never\" (input)=\"SearchByName($event.target)\"></ion-searchbar>\n\n\n\n  <div class=\"wrapper\">\n\n\n\n\n    <ul *ngIf=\"CategoryData.length!=0\">\n      <li *ngFor=\"let category of CategoryData; let i=index;\">\n        <input type=\"checkbox\" id=\"list-item-{{i}}\" class=\"subcat-inputs\">\n\n        <input type=\"checkbox\" id=\"list-selectall-{{i}}\" class=\"select-all-check\"\n          (click)=\"SelectAllSubcats(i, $event.target)\" checked=\"checked\" *ngIf=\"category.selected\">\n\n        <input type=\"checkbox\" id=\"list-selectall-{{i}}\" class=\"select-all-check\"\n          (click)=\"SelectAllSubcats(i, $event.target)\" *ngIf=\"!category.selected\">\n\n\n        <label for=\"list-item-{{i}}\" class=\"first\">\n          <ion-icon name=\"caret-down-outline\"></ion-icon> {{category.subCateName}}\n        </label>\n        <ul *ngFor=\"let subcategory of category.serviceDetails\">\n\n\n          <li class=\"subcategorylist\">\n            <div class=\"list-con\">\n              <ion-label> {{subcategory.name}} {{subcategory.selected}} </ion-label>\n              <ion-checkbox *ngIf=\"!subcategory.selected\" slot=\"end\" (click)=\"SelectCategory(subcategory)\"\n                class=\"subcat-checkbox-{{i}}\">\n              </ion-checkbox>\n\n              <ion-checkbox checked=\"checked\" *ngIf=\"subcategory.selected\" slot=\"end\"\n                (click)=\"SelectCategory(subcategory)\" class=\"subcat-checkbox-{{i}}\">\n              </ion-checkbox>\n            </div>\n          </li>\n\n\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_select-category_select-category_module_ts.js.map