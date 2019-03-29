(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_main_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/event-list/event-list.component */ "./src/app/components/main/event-list/event-list.component.ts");
/* harmony import */ var _components_main_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/event-detail/event-detail.component */ "./src/app/components/main/event-detail/event-detail.component.ts");
/* harmony import */ var _components_main_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/update-profile/update-profile.component */ "./src/app/components/main/update-profile/update-profile.component.ts");
/* harmony import */ var _components_comp_main_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/comp-main/create-event/create-event.component */ "./src/app/components/comp-main/create-event/create-event.component.ts");
/* harmony import */ var _components_comp_main_search_people_search_people_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/comp-main/search-people/search-people.component */ "./src/app/components/comp-main/search-people/search-people.component.ts");
/* harmony import */ var _components_comp_main_person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/comp-main/person-detail/person-detail.component */ "./src/app/components/comp-main/person-detail/person-detail.component.ts");
/* harmony import */ var _components_main_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/contactus/contactus.component */ "./src/app/components/main/contactus/contactus.component.ts");













var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register/:type', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    {
        path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], children: [
            { path: '', component: _components_main_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__["EventListComponent"] },
            { path: 'event/list', component: _components_main_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__["EventListComponent"] },
            { path: 'event/detail', component: _components_main_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailComponent"] },
            { path: 'profile', component: _components_main_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_8__["UpdateProfileComponent"] },
            { path: 'contactus', component: _components_main_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"] },
        ]
    },
    {
        path: 'comp/main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], children: [
            { path: 'event/create', component: _components_comp_main_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_9__["CreateEventComponent"] },
            { path: 'search', component: _components_comp_main_search_people_search_people_component__WEBPACK_IMPORTED_MODULE_10__["SearchPeopleComponent"] },
            { path: 'user/detail', component: _components_comp_main_person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_11__["PersonDetailComponent"] },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_main_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/event-list/event-list.component */ "./src/app/components/main/event-list/event-list.component.ts");
/* harmony import */ var _components_main_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/event-detail/event-detail.component */ "./src/app/components/main/event-detail/event-detail.component.ts");
/* harmony import */ var _components_main_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/update-profile/update-profile.component */ "./src/app/components/main/update-profile/update-profile.component.ts");
/* harmony import */ var _components_comp_main_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/comp-main/create-event/create-event.component */ "./src/app/components/comp-main/create-event/create-event.component.ts");
/* harmony import */ var _components_comp_main_search_people_search_people_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/comp-main/search-people/search-people.component */ "./src/app/components/comp-main/search-people/search-people.component.ts");
/* harmony import */ var _components_comp_main_person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/comp-main/person-detail/person-detail.component */ "./src/app/components/comp-main/person-detail/person-detail.component.ts");
/* harmony import */ var _components_comp_main_comp_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/comp-main/comp-main.component */ "./src/app/components/comp-main/comp-main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_main_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/main/navbar/navbar.component */ "./src/app/components/main/navbar/navbar.component.ts");
/* harmony import */ var _components_main_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/main/contactus/contactus.component */ "./src/app/components/main/contactus/contactus.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _components_main_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__["EventListComponent"],
                _components_main_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__["EventDetailComponent"],
                _components_main_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__["UpdateProfileComponent"],
                _components_comp_main_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_12__["CreateEventComponent"],
                _components_comp_main_search_people_search_people_component__WEBPACK_IMPORTED_MODULE_13__["SearchPeopleComponent"],
                _components_comp_main_person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_14__["PersonDetailComponent"],
                _components_main_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _components_comp_main_comp_main_component__WEBPACK_IMPORTED_MODULE_15__["CompMainComponent"],
                _components_main_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_18__["ContactusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/comp-main/comp-main.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/comp-main/comp-main.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  comp-main works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/comp-main/comp-main.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/comp-main/comp-main.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcC1tYWluL2NvbXAtbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/comp-main/comp-main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/comp-main/comp-main.component.ts ***!
  \*************************************************************/
/*! exports provided: CompMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompMainComponent", function() { return CompMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompMainComponent = /** @class */ (function () {
    function CompMainComponent() {
    }
    CompMainComponent.prototype.ngOnInit = function () {
    };
    CompMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comp-main',
            template: __webpack_require__(/*! ./comp-main.component.html */ "./src/app/components/comp-main/comp-main.component.html"),
            styles: [__webpack_require__(/*! ./comp-main.component.scss */ "./src/app/components/comp-main/comp-main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompMainComponent);
    return CompMainComponent;
}());



/***/ }),

/***/ "./src/app/components/comp-main/create-event/create-event.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/comp-main/create-event/create-event.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  create-event works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/comp-main/create-event/create-event.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/comp-main/create-event/create-event.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcC1tYWluL2NyZWF0ZS1ldmVudC9jcmVhdGUtZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/comp-main/create-event/create-event.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/comp-main/create-event/create-event.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent() {
    }
    CreateEventComponent.prototype.ngOnInit = function () {
    };
    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/components/comp-main/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.scss */ "./src/app/components/comp-main/create-event/create-event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/components/comp-main/person-detail/person-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/comp-main/person-detail/person-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  person-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/comp-main/person-detail/person-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/comp-main/person-detail/person-detail.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcC1tYWluL3BlcnNvbi1kZXRhaWwvcGVyc29uLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/comp-main/person-detail/person-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/comp-main/person-detail/person-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PersonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailComponent", function() { return PersonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonDetailComponent = /** @class */ (function () {
    function PersonDetailComponent() {
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
    };
    PersonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person-detail',
            template: __webpack_require__(/*! ./person-detail.component.html */ "./src/app/components/comp-main/person-detail/person-detail.component.html"),
            styles: [__webpack_require__(/*! ./person-detail.component.scss */ "./src/app/components/comp-main/person-detail/person-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/comp-main/search-people/search-people.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/comp-main/search-people/search-people.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  search-people works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/comp-main/search-people/search-people.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/comp-main/search-people/search-people.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcC1tYWluL3NlYXJjaC1wZW9wbGUvc2VhcmNoLXBlb3BsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/comp-main/search-people/search-people.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/comp-main/search-people/search-people.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchPeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPeopleComponent", function() { return SearchPeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPeopleComponent = /** @class */ (function () {
    function SearchPeopleComponent() {
    }
    SearchPeopleComponent.prototype.ngOnInit = function () {
    };
    SearchPeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-people',
            template: __webpack_require__(/*! ./search-people.component.html */ "./src/app/components/comp-main/search-people/search-people.component.html"),
            styles: [__webpack_require__(/*! ./search-people.component.scss */ "./src/app/components/comp-main/search-people/search-people.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchPeopleComponent);
    return SearchPeopleComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"reg-form\">\r\n    <div class=\"sideDetails\">\r\n      <img class=\"people\" src=\"../../../assets/people.jpg\" alt=\"people_laugh\">\r\n    </div>\r\n    <div class=\"login\">\r\n      <h2 class=\"title\">Login</h2>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=onSubmit()>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\">\r\n          <span [ngClass]=\"{show: !loginForm.get('email').valid && loginForm.get('email').touched}\" class=\"error\">\r\n            Invalid email!\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\"\r\n            placeholder=\"Enter Password\">\r\n          <span [ngClass]=\"{show: !loginForm.get('password').valid && loginForm.get('password').touched}\" class=\"error\">\r\n            Invalid password!\r\n          </span>\r\n        </div>\r\n        <div class=\"regType\">\r\n          <button class=\"button reg\" type=\"button\" routerLink=\"/register/company\">Register as Company</button>\r\n          <button class=\"button reg volunteer\" type=\"button\" routerLink=\"/register/volunteer\">Register as Volunteer</button>\r\n        </div>\r\n        <button class=\"button\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container:before {\n  content: '';\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: #F3ECEE; }\n\ncolors {\n  dark: #2B59AF;\n  lighter: #1E9DD6;\n  medium: #59B7DC;\n  gray: #8B7A8F;\n  whitey: #F3ECEE; }\n\nform, .form-group, .reg-form {\n  display: flex;\n  flex-direction: column; }\n\n.sideDetails {\n  height: 100%;\n  width: 50%; }\n\n.sideDetails img {\n  height: 100%; }\n\n.reg-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 800px;\n  height: 360px;\n  background: #59B7DC;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 2px 11px 14px -8px rgba(0, 0, 0, 0.75); }\n\n.login {\n  width: 400px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.avatar {\n  width: 50%;\n  border-radius: 50%;\n  align-self: center;\n  margin-bottom: 20px; }\n\n.reg-form h2 {\n  margin-top: 15px;\n  padding: 0 0 20px;\n  color: #F3ECEE;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.1em;\n  font-size: 30px; }\n\nform {\n  width: 100%;\n  align-items: center; }\n\n.form-group {\n  width: 80%; }\n\n.reg-form label {\n  margin: 0;\n  padding: 0;\n  color: #F3ECEE;\n  font-weight: bold;\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.1em;\n  font-size: 18px; }\n\n.reg-form input[type=\"text\"],\n.reg-form input[type=\"password\"] {\n  width: 100%;\n  margin-bottom: 10px;\n  border: none;\n  border-bottom: 1px solid #F3ECEE;\n  background: transparent;\n  outline: none;\n  height: 35px;\n  font-size: 17px;\n  color: #F3ECEE;\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.1em; }\n\n.reg-form input[type=\"text\"].ng-invalid.ng-touched,\n.reg-form input[type=\"password\"].ng-invalid.ng-touched {\n  border-bottom: 1px solid red; }\n\n.button {\n  height: 30px;\n  color: #F3ECEE;\n  cursor: pointer;\n  background: #2B59AF;\n  outline: none;\n  border: none;\n  margin-bottom: 20px;\n  box-shadow: 2px 11px 14px -8px rgba(0, 0, 0, 0.75);\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.1em;\n  width: 30%; }\n\n.button:hover {\n  background: #476db4; }\n\n.error {\n  color: red;\n  font-size: 12px;\n  margin-bottom: 10px;\n  visibility: hidden; }\n\n.show {\n  visibility: unset; }\n\n.regType {\n  display: flex;\n  width: 100%;\n  justify-content: center; }\n\n.reg {\n  height: 40px; }\n\n.volunteer {\n  margin-left: 20px; }\n\n@media screen and (max-width: 500px) {\n  .reg-form {\n    display: flex;\n    justify-content: center;\n    min-width: 100vw;\n    height: 100vh;\n    padding: 40px; } }\n\n@media screen and (min-width: 500px) and (max-width: 700px) {\n  .reg-form {\n    display: flex;\n    justify-content: center;\n    min-width: 100vw;\n    height: 100vh;\n    padding: 80px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXE3DoXJ0b25cXFZvbHVudGlmeVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxZQUFZO0VBQ1osVUFDRixFQUFBOztBQUVBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtEQUErQyxFQUFBOztBQUdqRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBSWpCOztFQUVFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLCtCQUErQjtFQUMvQixxQkFBcUIsRUFBQTs7QUFHdkI7O0VBRUUsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsWUFBWTtFQUNaLGNBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtEQUErQztFQUMvQywrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG1CQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFFRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRUNFRTtcclxufVxyXG5cclxuY29sb3JzIHtcclxuICBkYXJrOiAjMkI1OUFGO1xyXG4gIGxpZ2h0ZXI6ICMxRTlERDY7XHJcbiAgbWVkaXVtOiAjNTlCN0RDO1xyXG4gIGdyYXk6ICM4QjdBOEY7XHJcbiAgd2hpdGV5OiAjRjNFQ0VFO1xyXG59XHJcblxyXG5mb3JtLCAuZm9ybS1ncm91cCwgLnJlZy1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaWRlRGV0YWlscyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA1MCVcclxufVxyXG5cclxuLnNpZGVEZXRhaWxzIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucmVnLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgYmFja2dyb3VuZDogIzU5QjdEQztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm94LXNoYWRvdzogMnB4IDExcHggMTRweCAtOHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yZWctZm9ybSBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICBjb2xvcjogI0YzRUNFRTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ucmVnLWZvcm0gbGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjRjNFQ0VFO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuXHJcbi5yZWctZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLnJlZy1mb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGM0VDRUU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiAjRjNFQ0VFO1xyXG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG4ucmVnLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0ubmctaW52YWxpZC5uZy10b3VjaGVkLFxyXG4ucmVnLWZvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiAgI0YzRUNFRTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzJCNTlBRjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAxMXB4IDE0cHggLThweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYig3MSwgMTA5LCAxODApO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgdmlzaWJpbGl0eTogdW5zZXQ7XHJcbn1cclxuXHJcbi5yZWdUeXBlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi52b2x1bnRlZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5yZWctZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweClcclxuYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLnJlZy1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogODBweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(logService) {
        this.logService = logService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.logService.login(this.loginForm.value);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main/contactus/contactus.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/main/contactus/contactus.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- this section wraps the team members as a container-->\r\n\r\n<section class=\"team-container\">\r\n  <h1 class=\"team-h1\">Meet the team</h1>\r\n\r\n    <!-- member-->  \r\n    <div class=\"team-member\" *ngFor=\"let teammember of teammembers\">\r\n      <img class=\"team-photo\" src={{teammember.picture}}>\r\n      <h3>{{teammember.name}}</h3>\r\n      <span>{{teammember.title}}</span>\r\n      <div class= \"social\">\r\n        <a class=\"github\" href=\"{{teammember.github}}\"><i class=\"fab fa-github\"></i></a>\r\n        <a class=\"linkedin\" href=\"{{teammember.linkedin}}\"><i class=\"fab fa-linkedin\"></i></a>\r\n      </div>\r\n    </div>\r\n </section>"

/***/ }),

/***/ "./src/app/components/main/contactus/contactus.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/main/contactus/contactus.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Team Member CSS \r\n===========================*/\nh1.team-h1 {\n  margin: 0;\n  position: absolute;\n  top: -16px;\n  text-align: center;\n  padding: 0px 20px;\n  color: #222;\n  position: absolute;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  font-size: 50px; }\n.team-container {\n  max-width: 1000px;\n  margin: auto;\n  border-top: 1px #e9e9e9 solid;\n  border-bottom: 1px #e9e9e9 solid;\n  padding-top: 5em;\n  padding-bottom: 5em;\n  margin-top: 3em;\n  position: relative; }\n.team-member {\n  width: 16%;\n  float: left;\n  text-align: center;\n  margin-right: 5%;\n  position: relative;\n  margin-top: 50px; }\n.github {\n  font-size: 40px;\n  color: #333; }\n.linkedin {\n  font-size: 40px;\n  color: #0077B5; }\n.social {\n  display: flex; }\n.team-member:last-child {\n  margin-right: 0; }\n.team-member span,\n.team-member h3 {\n  max-width: 200px;\n  font-family: sans-serif;\n  letter-spacing: -1px; }\n.team-member h3 {\n  color: #1CA3A3; }\n.team-member span {\n  display: block; }\n.team-photo {\n  border-radius: 50%;\n  text-align: center;\n  margin: auto;\n  max-width: 100%;\n  height: auto;\n  transition: 0.1s -webkit-transform ease-in-out;\n  transition: 0.1s transform ease-in-out;\n  transition: 0.1s transform ease-in-out, 0.1s -webkit-transform ease-in-out; }\n.team-photo:hover {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  cursor: pointer; }\n/* code for phone layout */\n@media (max-width: 980px) {\n  .team-member {\n    width: 15%;\n    margin-right: 4%;\n    margin-bottom: 40px;\n    margin-left: 5px; }\n  h3 {\n    font-size: 13px; }\n  span {\n    font-size: 12px; } }\n@media (max-width: 750px) {\n  h3 {\n    font-size: 12px; }\n  span {\n    font-size: 11px; } }\n@media (max-width: 670px) {\n  .team-member {\n    float: none;\n    display: block;\n    width: 35%;\n    text-align: center; }\n  .social {\n    display: inline; }\n  .team-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  h1.team-h1 {\n    display: none; }\n  h3 {\n    font-size: 16px; }\n  span {\n    font-size: 15px; }\n  .team-member h3,\n  .team-member span {\n    margin: 15px auto; } }\n/* ENDS Team Member CSS \r\n===========================*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2NvbnRhY3R1cy9DOlxcVXNlcnNcXE3DoXJ0b25cXFZvbHVudGlmeVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXGNvbnRhY3R1c1xcY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs0QkNDNEI7QURFNUI7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0VBQXdFO0VBQ3hFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBO0FBR2I7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsYUFBWSxFQUFBO0FBR2Q7RUFBeUIsZUFBZSxFQUFBO0FBRXhDOztFQUVFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsb0JBQW9CLEVBQUE7QUFHdEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxrQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLDhDQUFzQztFQUF0QyxzQ0FBc0M7RUFBdEMsMEVBQXNDLEVBQUE7QUFHeEM7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTtBQUdqQiwwQkFBQTtBQUNBO0VBQ0U7SUFDRSxVQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLGVBQWUsRUFBQTtFQUVqQjtJQUNFLGVBQWUsRUFBQSxFQUNoQjtBQUdIO0VBQ0U7SUFDRSxlQUFlLEVBQUE7RUFFakI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7QUFJSDtFQUNFO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxlQUFlLEVBQUE7RUFLakI7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxlQUFlLEVBQUE7RUFHakI7O0lBRUUsaUJBQWlCLEVBQUEsRUFDbEI7QUFJSDs0QkNsQzRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUZWFtIE1lbWJlciBDU1MgXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5oMS50ZWFtLWgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIGNvbG9yOiAjMjIyOyBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLnRlYW0tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXRvcDogMXB4ICNlOWU5ZTkgc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNlOWU5ZTkgc29saWQ7XHJcbiAgcGFkZGluZy10b3A6IDVlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNWVtO1xyXG4gIG1hcmdpbi10b3A6IDNlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50ZWFtLW1lbWJlciB7XHJcbiAgd2lkdGg6IDE2JTtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmdpdGh1YntcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5saW5rZWRpbntcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6ICMwMDc3QjU7XHJcbn1cclxuXHJcbi5zb2NpYWx7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4udGVhbS1tZW1iZXI6bGFzdC1jaGlsZCB7bWFyZ2luLXJpZ2h0OiAwO31cclxuXHJcbi50ZWFtLW1lbWJlciBzcGFuLFxyXG4udGVhbS1tZW1iZXIgaDMge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbn1cclxuXHJcbi50ZWFtLW1lbWJlciBoMyB7XHJcbiAgY29sb3I6ICMxQ0EzQTM7XHJcbn1cclxuXHJcbi50ZWFtLW1lbWJlciBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRlYW0tcGhvdG8ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IDAuMXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udGVhbS1waG90bzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogY29kZSBmb3IgcGhvbmUgbGF5b3V0ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk4MHB4KXtcclxuICAudGVhbS1tZW1iZXIge1xyXG4gICAgd2lkdGg6MTUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc1MHB4KXtcclxuICBoM3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2NzBweCl7XHJcbiAgLnRlYW0tbWVtYmVyIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc29jaWFse1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAudGVhbS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBoMS50ZWFtLWgxe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGgze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiBcclxuICAudGVhbS1tZW1iZXIgaDMsXHJcbiAgLnRlYW0tbWVtYmVyIHNwYW4ge1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogRU5EUyBUZWFtIE1lbWJlciBDU1MgXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSovIiwiLyogVGVhbSBNZW1iZXIgQ1NTIFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuaDEudGVhbS1oMSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBjb2xvcjogIzIyMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNTBweDsgfVxuXG4udGVhbS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItdG9wOiAxcHggI2U5ZTllOSBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNlOWU5ZTkgc29saWQ7XG4gIHBhZGRpbmctdG9wOiA1ZW07XG4gIHBhZGRpbmctYm90dG9tOiA1ZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi50ZWFtLW1lbWJlciB7XG4gIHdpZHRoOiAxNiU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNTBweDsgfVxuXG4uZ2l0aHViIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzMzMzsgfVxuXG4ubGlua2VkaW4ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMDA3N0I1OyB9XG5cbi5zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi50ZWFtLW1lbWJlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XG5cbi50ZWFtLW1lbWJlciBzcGFuLFxuLnRlYW0tbWVtYmVyIGgzIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4OyB9XG5cbi50ZWFtLW1lbWJlciBoMyB7XG4gIGNvbG9yOiAjMUNBM0EzOyB9XG5cbi50ZWFtLW1lbWJlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnRlYW0tcGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogMC4xcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7IH1cblxuLnRlYW0tcGhvdG86aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4vKiBjb2RlIGZvciBwaG9uZSBsYXlvdXQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xuICAudGVhbS1tZW1iZXIge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7IH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMTNweDsgfVxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDExcHg7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLnRlYW0tbWVtYmVyIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuc29jaWFsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7IH1cbiAgLnRlYW0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICBoMS50ZWFtLWgxIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7IH1cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNXB4OyB9XG4gIC50ZWFtLW1lbWJlciBoMyxcbiAgLnRlYW0tbWVtYmVyIHNwYW4ge1xuICAgIG1hcmdpbjogMTVweCBhdXRvOyB9IH1cblxuLyogRU5EUyBUZWFtIE1lbWJlciBDU1MgXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/main/contactus/contactus.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/main/contactus/contactus.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
        this.teammembers = [
            {
                name: 'Sántha-Gősi Réka',
                title: 'Lead UI/UX Designer',
                picture: '/assets/Réka.png',
                github: 'https://bit.ly/2U2iftn',
                linkedin: 'https://bit.ly/2HYiTRu',
            },
            {
                name: 'Szendrei Lili',
                title: 'Lead Database Engineer',
                picture: '/assets/Lili.png',
                github: 'https://bit.ly/2U2O5GK',
                linkedin: 'https://bit.ly/2Wjy8JL',
            },
            {
                name: 'Bakó Farkas',
                title: 'Lead Java Architect',
                picture: '/assets/Farkas.png',
                github: 'https://bit.ly/2G16qM1',
                linkedin: 'https://bit.ly/2K0CZxp',
            },
            {
                name: 'Kalamár Ábel',
                title: 'Lead Angular Developer',
                picture: '/assets/Ábel.png',
                github: 'https://bit.ly/2Se0uFQ',
                linkedin: 'https://bit.ly/2RU49cD',
            },
            {
                name: 'Szél Márton',
                title: 'Lead Devops Engineer',
                picture: '/assets/Marci.png',
                github: 'https://bit.ly/2RUJsNG',
                linkedin: 'https://bit.ly/2sQiIz0',
            },
        ];
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/main/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.scss */ "./src/app/components/main/contactus/contactus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/main/event-detail/event-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/event-detail/event-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event-detail jiedjiedjeidjeidjiedj\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/main/event-detail/event-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/event-detail/event-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main/event-detail/event-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/main/event-detail/event-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent() {
    }
    EventDetailComponent.prototype.ngOnInit = function () {
    };
    EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/components/main/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.scss */ "./src/app/components/main/event-detail/event-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/main/event-list/event-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/event-list/event-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/main/event-list/event-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/event-list/event-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/event-list/event-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/main/event-list/event-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/event.service */ "./src/app/services/event.service.ts");




var EventListComponent = /** @class */ (function () {
    function EventListComponent(router, eventService) {
        var _this = this;
        this.router = router;
        this.eventService = eventService;
        this.getAll = true;
        this.router.events.subscribe(function (value) {
            if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (value.url !== '/main') {
                    _this.getAll = false;
                }
                else {
                    _this.getAll = true;
                }
            }
        });
    }
    EventListComponent.prototype.ngOnInit = function () {
        if (this.getAll) {
            this.eventService.getEvents();
            // .subscribe(events => {
            //   this.eventList = events;
            // });
        }
        else {
            this.eventService.getUserEvents();
            // .subscribe(events => {
            //   this.eventList = events;
            // });
        }
        // console.log(this.eventList);
    };
    EventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/components/main/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.scss */ "./src/app/components/main/event-list/event-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/main/navbar/navbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/main/navbar/navbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"logo\" >\r\n    <img class=\"logo-img\" src=\"../../../../assets/Wowlunteer8.png\" routerLink=\"/main\" (click)=\"select('all')\">\r\n  </div>\r\n  <div class=\"row-container\">\r\n    <div class=\"menu-container\">\r\n      <a (click)=\"select('events')\" [class.selected]=\"selected==='events'\" routerLink=\"/main/event/list\"><i class=\"far fa-calendar\"></i>My events</a>\r\n      <a (click)=\"select('profile')\" [class.selected]=\"selected==='profile'\" routerLink=\"/main/profile\"><i class=\"far fa-address-card\"></i>My profile</a>\r\n      <a (click)=\"select('contact')\" [class.selected]=\"selected==='contact'\"routerLink=\"/main/contactus\" ><i class=\"far fa-envelope\"></i>Contact us</a>\r\n    </div>\r\n    <div class=\"user-container\">\r\n      <img class=\"profile-photo\" src=\"../../../../assets/profile.png\">\r\n      <h3 class=\"user-name\">somebody@gmail.com</h3>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/main/navbar/navbar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/main/navbar/navbar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  display: flex;\n  padding: 5px 0 0 0;\n  width: 100%;\n  background-color: #2B59AF;\n  color: #F3ECEE;\n  display: flex;\n  flex-wrap: wrap;\n  font-family: 'Open Sans Condensed', sans-serif; }\n  .navbar .logo {\n    width: 25%; }\n  .navbar .logo .logo-img {\n      width: 60%; }\n  .navbar .logo .logo-img:focus {\n        outline: none; }\n  .navbar .logo .logo-img:hover {\n        cursor: pointer; }\n  .navbar .row-container {\n    width: 75%;\n    display: flex; }\n  .navbar .menu-container {\n    width: 75%;\n    display: flex;\n    align-items: flex-end;\n    text-transform: uppercase;\n    justify-content: space-between; }\n  .navbar .menu-container a {\n      text-decoration: none;\n      letter-spacing: 1px;\n      color: #b1b1b1;\n      text-align: center;\n      font-size: 16px;\n      padding: 10px 0;\n      transition: 0.7s linear;\n      border-top: 1px solid transparent;\n      border-right: 1px solid transparent;\n      border-left: 1px solid transparent;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px; }\n  .navbar .menu-container a:hover {\n        color: #F3ECEE;\n        cursor: pointer; }\n  .navbar .menu-container a i {\n        font-size: 20px; }\n  .navbar .menu-container a.selected {\n        border-top: 1px solid #F3ECEE;\n        border-right: 1px solid #F3ECEE;\n        border-left: 1px solid #F3ECEE;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        background-color: #f3ecee;\n        color: #2B59AF; }\n  .navbar .user-container {\n    width: 15%;\n    display: flex;\n    align-items: center;\n    padding: 0 0 10px 0; }\n  .navbar .user-container .profile-photo {\n      height: 50px;\n      width: 50px;\n      border-radius: 25px;\n      margin: 0 15px; }\n  .navbar .user-container .user-name {\n      margin-right: 10px;\n      letter-spacing: 2px;\n      font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL25hdmJhci9DOlxcVXNlcnNcXE3DoXJ0b25cXFZvbHVudGlmeVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhDQUE4QyxFQUFBO0VBUmhEO0lBVUksVUFBVSxFQUFBO0VBVmQ7TUFZTSxVQUFVLEVBQUE7RUFaaEI7UUFjUSxhQUFhLEVBQUE7RUFkckI7UUFpQlEsZUFBZSxFQUFBO0VBakJ2QjtJQXNCSSxVQUFVO0lBQ1YsYUFBYSxFQUFBO0VBdkJqQjtJQTJCSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsOEJBQThCLEVBQUE7RUEvQmxDO01BaUNNLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsY0FBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLGlDQUFpQztNQUNqQyxtQ0FBbUM7TUFDbkMsa0NBQWtDO01BQ2xDLDRCQUE0QjtNQUM1Qiw2QkFBNkIsRUFBQTtFQTVDbkM7UUE4Q1EsY0FBYztRQUNkLGVBQWUsRUFBQTtFQS9DdkI7UUFrRFEsZUFBZSxFQUFBO0VBbER2QjtRQXFEUSw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHlCQUFvQztRQUNwQyxjQUFjLEVBQUE7RUEzRHRCO0lBZ0VJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0VBbkV2QjtNQXFFTSxZQUFZO01BQ1osV0FBVztNQUNYLG1CQUFtQjtNQUNuQixjQUFjLEVBQUE7RUF4RXBCO01BMkVNLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogNXB4IDAgMCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQjU5QUY7XHJcbiAgY29sb3I6ICNGM0VDRUU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAubG9nb3tcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAubG9nby1pbWd7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucm93LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICBcclxuICB9XHJcbiAgLm1lbnUtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjdzIGxpbmVhcjtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNGM0VDRUU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGl7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICYuc2VsZWN0ZWR7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGM0VDRUU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0YzRUNFRTtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNGM0VDRUU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyMzYsIDIzOCk7XHJcbiAgICAgICAgY29sb3I6ICMyQjU5QUY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnVzZXItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcclxuICAgIC5wcm9maWxlLXBob3RvIHtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1uYW1lIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGxvZ28sIG15IHByb2ZpbGUsIGvDqXArbsOpdiwgbXkgZXZlbnRzLCBjb250YWN0IHVzICJdfQ== */"

/***/ }),

/***/ "./src/app/components/main/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/main/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.selected = null;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.select = function (item) {
        this.selected = item;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/main/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/main/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/main/update-profile/update-profile.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/update-profile/update-profile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  update-profile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/main/update-profile/update-profile.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/update-profile/update-profile.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi91cGRhdGUtcHJvZmlsZS91cGRhdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/main/update-profile/update-profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/main/update-profile/update-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent() {
    }
    UpdateProfileComponent.prototype.ngOnInit = function () {
    };
    UpdateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-profile',
            template: __webpack_require__(/*! ./update-profile.component.html */ "./src/app/components/main/update-profile/update-profile.component.html"),
            styles: [__webpack_require__(/*! ./update-profile.component.scss */ "./src/app/components/main/update-profile/update-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"reg-form\">\r\n    <div class=\"sideDetails\">\r\n      <img class=\"people\" src=\"../../../assets/people_reg.jpg\" alt=\"people_laugh\">\r\n    </div>\r\n    <div class=\"register\">\r\n      <h2 class=\"title\">Register</h2>\r\n      <form [formGroup]=\"signupForm\" (ngSubmit)=onSubmit()>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter Email\">\r\n          <span [ngClass]=\"{show: !signupForm.get('email').valid && signupForm.get('email').touched}\" class=\"error\">\r\n            Invalid email!\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\"\r\n            placeholder=\"Enter Password\">\r\n          <span [ngClass]=\"{show: !signupForm.get('password').valid && signupForm.get('password').touched}\"\r\n            class=\"error\">\r\n            Invalid password!\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"type\">Confirm Password</label>\r\n          <input type=\"password\" class=\"form-control\" \r\n            placeholder=\"Enter your password again\">\r\n          <!-- <span [ngClass]=\"{show: !signupForm.get('confPassword').valid && signupForm.get('confPassword').touched}\"\r\n            class=\"error\">\r\n            Passwords don't mach!\r\n          </span> -->\r\n        </div>\r\n        <footer>\r\n          <button class=\"button\" type=\"button\" routerLink=\"/login\">Back to Login</button>\r\n          <button class=\"button reg\" type=\"submit\" [disabled]=\"!signupForm.valid\">Register</button>\r\n        </footer>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container:before {\n  content: '';\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: #F3ECEE; }\n\ncolors {\n  dark: #2B59AF;\n  lighter: #1E9DD6;\n  medium: #59B7DC;\n  gray: #8B7A8F;\n  whitey: #F3ECEE; }\n\nform, .form-group, .reg-form {\n  display: flex;\n  flex-direction: column; }\n\n.sideDetails {\n  height: 100%;\n  width: 50%; }\n\n.sideDetails img {\n  height: 100%; }\n\n.reg-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 800px;\n  height: 420px;\n  background: #59B7DC;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 2px 11px 14px -8px rgba(0, 0, 0, 0.75); }\n\n.register {\n  width: 400px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.avatar {\n  width: 50%;\n  border-radius: 50%;\n  align-self: center;\n  margin-bottom: 20px; }\n\n.reg-form h2 {\n  margin-top: 20px;\n  padding: 0 0 20px;\n  color: #F3ECEE;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.1em;\n  font-size: 30px; }\n\nform {\n  width: 100%;\n  align-items: center; }\n\n.form-group {\n  width: 80%; }\n\n.reg-form label {\n  margin: 0;\n  padding: 0;\n  color: #F3ECEE;\n  font-weight: bold;\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.1em;\n  font-size: 18px; }\n\n.reg-form input {\n  width: 100%;\n  margin-bottom: 10px; }\n\n.reg-form input[type=\"text\"],\n.reg-form input[type=\"password\"] {\n  border: none;\n  border-bottom: 1px solid #F3ECEE;\n  background: transparent;\n  outline: none;\n  height: 35px;\n  font-size: 17px;\n  color: #F3ECEE;\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.1em; }\n\n.reg-form input[type=\"text\"].ng-invalid.ng-touched,\n.reg-form input[type=\"password\"].ng-invalid.ng-touched {\n  border-bottom: 1px solid red; }\n\nfooter {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center; }\n\n.button {\n  height: 30px;\n  color: #F3ECEE;\n  cursor: pointer;\n  background: #2B59AF;\n  outline: none;\n  border: none;\n  margin-top: 20px;\n  box-shadow: 2px 11px 14px -12px rgba(0, 0, 0, 0.75);\n  font-family: 'Jura', sans-serif;\n  letter-spacing: 0.1em;\n  width: 30%; }\n\n.button:hover {\n  background: #476db4; }\n\n.reg {\n  margin-left: 20px; }\n\n.error {\n  color: red;\n  font-size: 12px;\n  margin-bottom: 10px;\n  visibility: hidden; }\n\n.show {\n  visibility: unset; }\n\n@media screen and (max-width: 500px) {\n  .reg-form {\n    display: flex;\n    justify-content: center;\n    min-width: 100vw;\n    height: 100vh;\n    padding: 40px; } }\n\n@media screen and (min-width: 500px) and (max-width: 700px) {\n  .reg-form {\n    display: flex;\n    justify-content: center;\n    min-width: 100vw;\n    height: 100vh;\n    padding: 80px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9DOlxcVXNlcnNcXE3DoXJ0b25cXFZvbHVudGlmeVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxZQUFZO0VBQ1osVUFDRixFQUFBOztBQUVBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtEQUErQyxFQUFBOztBQUdqRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjs7RUFFRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLHFCQUFxQixFQUFBOztBQUd2Qjs7RUFFRSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxZQUFZO0VBQ1osY0FBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbURBQWdEO0VBQ2hELCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsbUJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFFRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRUNFRTtcclxufVxyXG5cclxuY29sb3JzIHtcclxuICBkYXJrOiAjMkI1OUFGO1xyXG4gIGxpZ2h0ZXI6ICMxRTlERDY7XHJcbiAgbWVkaXVtOiAjNTlCN0RDO1xyXG4gIGdyYXk6ICM4QjdBOEY7XHJcbiAgd2hpdGV5OiAjRjNFQ0VFO1xyXG59XHJcblxyXG5mb3JtLCAuZm9ybS1ncm91cCwgLnJlZy1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaWRlRGV0YWlscyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA1MCVcclxufVxyXG5cclxuLnNpZGVEZXRhaWxzIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucmVnLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogNDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzU5QjdEQztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm94LXNoYWRvdzogMnB4IDExcHggMTRweCAtOHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yZWctZm9ybSBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICBjb2xvcjogI0YzRUNFRTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ucmVnLWZvcm0gbGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjRjNFQ0VFO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnJlZy1mb3JtIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmVnLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5yZWctZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YzRUNFRTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICNGM0VDRUU7XHJcbiAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbi5yZWctZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbi5yZWctZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiAgI0YzRUNFRTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzJCNTlBRjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAxMXB4IDE0cHggLTEycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNzEsIDEwOSwgMTgwKTtcclxufVxyXG5cclxuLnJlZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICB2aXNpYmlsaXR5OiB1bnNldDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAucmVnLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpXHJcbmFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5yZWctZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDgwcHg7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(logService, route) {
        this.logService = logService;
        this.route = route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.route.snapshot.params['type'])
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        // this.logService.register(this.signupForm.value);
        // this.signupForm.reset();
        console.log(this.signupForm.value);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



// import { Observable } from 'rxjs';

var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl2;
    }
    EventService.prototype.getEvents = function () {
        console.log('all events');
        // return this.http.get(`${this.baseUrl}/`);
    };
    EventService.prototype.getUserEvents = function () {
        console.log('user events');
        // return this.http.get(`${this.baseUrl}/`);
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrlLili;
    }
    LoginService.prototype.register = function (userData) {
        console.log(userData);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        this.http.post(this.baseUrl + "/api/user/register", {
            email: userData.email,
            password: userData.password,
            type: userData.type
        }, { headers: headers })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    LoginService.prototype.login = function (userData) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('X-Requested-With', 'XMLHttpRequest');
        this.http.post(this.baseUrl + "/api/auth/login", {
            email: userData.email,
            password: userData.password
        }, { headers: headers })
            .subscribe(function (data) {
            window.localStorage.setItem('token', data.token);
            console.log(data);
            _this.router.navigate(['/main']);
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl2: 'http://10.27.6.36:8080',
    baseUrlLili: 'http://10.27.6.29:8080'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Márton\Voluntify\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map