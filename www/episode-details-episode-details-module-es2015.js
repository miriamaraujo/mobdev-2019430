(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-details-episode-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n <ion-toolbar color=\"dark\">\n   <ion-buttons slot=\"start\">\n     <ion-back-button defaulthref=\"/tabs/episodes\"></ion-back-button>\n   </ion-buttons>\n   \n <ion-title>{{ episode?.title }}</ion-title>\n\n\n   <ion-buttons slot=\"end\">\n   <ion-button (click)=\"unfavouriteEpisode()\" *ngIf=\"isFavourite\">\n     \n      <ion-icon color=\"warning\" name=\"star\" slot=\"icon-only\"></ion-icon>\n  \n   </ion-button>\n   \n    <ion-button (click)=\"favouriteEpisode()\" *ngIf=\"!isFavourite\">\n     \n      <ion-icon color=\"warning\"name=\"star-outline\" slot=\"icon-only\"></ion-icon>\n   \n    </ion-button>\n  \n   </ion-buttons>\n\n </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card *ngIf=\"episode\">\n\n\n<ion-item class=\"movie-info\" lines=\"inset\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"key-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tID : {{ episode.episode_id }}\n\t\t\t</ion-item>\n\n\n<ion-item class=\"movie-info\" lines=\"inset\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"calendar-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tAir Date : {{ episode.air_date }}\n\t\t\t</ion-item>\n\n<ion-item class=\"movie-info\" lines=\"inset\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"list-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tSeason : {{ episode.season }}\n\t\t\t</ion-item>\n\n<ion-item class=\"movie-info\"  lines=\"inset\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"pin-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tEpisode : {{ episode.episode }}\n\t\t\t</ion-item>\n\n<ion-item class=\"movie-info\" lines=\"inset\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"people-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tCharacters : {{ episode.characters }}\n\t\t\t</ion-item>\n\n<ion-item class=\"movie-info\" lines=\"inset\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"film-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tSeries : {{ episode.series }}\n\t\t\t</ion-item>\n\n\n\n\n</ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/episode-details/episode-details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EpisodeDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageRoutingModule", function() { return EpisodeDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episode_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episode-details.page */ "./src/app/pages/episode-details/episode-details.page.ts");




const routes = [
    {
        path: '',
        component: _episode_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodeDetailsPage"]
    }
];
let EpisodeDetailsPageRoutingModule = class EpisodeDetailsPageRoutingModule {
};
EpisodeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodeDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: EpisodeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageModule", function() { return EpisodeDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episode-details-routing.module */ "./src/app/pages/episode-details/episode-details-routing.module.ts");
/* harmony import */ var _episode_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episode-details.page */ "./src/app/pages/episode-details/episode-details.page.ts");







let EpisodeDetailsPageModule = class EpisodeDetailsPageModule {
};
EpisodeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailsPageRoutingModule"]
        ],
        declarations: [_episode_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodeDetailsPage"]]
    })
], EpisodeDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.page.ts ***!
  \***************************************************************/
/*! exports provided: EpisodeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPage", function() { return EpisodeDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");





let EpisodeDetailsPage = class EpisodeDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.episodeId = null;
        this.isFavourite = false;
    }
    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episode.episode_id));
        });
        this.favouriteService.isFavourite(this.episodeId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    favouriteEpisode() {
        this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = true;
        });
    }
    unfavouriteEpisode() {
        this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = false;
        });
    }
};
EpisodeDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"] }
];
EpisodeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-episode-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episode-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episode-details.page.scss */ "./src/app/pages/episode-details/episode-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])
], EpisodeDetailsPage);



/***/ })

}]);
//# sourceMappingURL=episode-details-episode-details-module-es2015.js.map