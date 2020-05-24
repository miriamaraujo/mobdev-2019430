function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharacterDetailsCharacterDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"dark\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title> {{ character?.name }}</ion-title>\n\n       \n <ion-buttons slot=\"end\">\n   <ion-button (click)=\"unfavouriteCharacter()\" *ngIf=\"isLiked\">\n    \n      <ion-icon color=\"warning\" name=\"thumbs-up\" slot=\"icon-only\"></ion-icon>\n  \n   </ion-button>\n\n    <ion-button (click)=\"favouriteCharacter()\" *ngIf=\"!isLiked\">\n  \n      <ion-icon color=\"warning\"name=\"thumbs-up-outline\" slot=\"icon-only\"></ion-icon>\n  \n    </ion-button>\n \n   </ion-buttons>\n\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"\" >\n\t<ion-card class=\"movie-card\" *ngIf=\"character\">\n\n\t\t    <ion-item class=\"movie-info\" lines=\"none\" padding=\"\">\n\t\t\t<img [src]=\"character.img\" >\n            </ion-item>\n            \n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"key-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tID : {{ character.char_id }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"gift-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tBirthday : {{ character.birthday }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tOccupation : {{ character.occupation }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"warning-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tStatus : {{ character.status }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"at-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tNickname : {{ character.nickname }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"eye-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tAppearance : {{ character.appearance }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"videocam-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tPortrayed : {{ character.portrayed }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"warning\" name=\"film-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tCategory : {{ character.category }}\n\t\t\t</ion-item>\n\n\n\t</ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: CharacterDetailsPageRoutingModule */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function () {
      return CharacterDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./character-details.page */
    "./src/app/pages/character-details/character-details.page.ts");

    var routes = [{
      path: '',
      component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }];

    var CharacterDetailsPageRoutingModule = function CharacterDetailsPageRoutingModule() {
      _classCallCheck(this, CharacterDetailsPageRoutingModule);
    };

    CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharacterDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CharacterDetailsPageModule */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function () {
      return CharacterDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./character-details-routing.module */
    "./src/app/pages/character-details/character-details-routing.module.ts");
    /* harmony import */


    var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./character-details.page */
    "./src/app/pages/character-details/character-details.page.ts");

    var CharacterDetailsPageModule = function CharacterDetailsPageModule() {
      _classCallCheck(this, CharacterDetailsPageModule);
    };

    CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]],
      declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })], CharacterDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.page.ts ***!
    \*******************************************************************/

  /*! exports provided: CharacterDetailsPage */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function () {
      return CharacterDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/favourite.service */
    "./src/app/services/favourite.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/api.service */
    "./src/app/services/api.service.ts");

    var CharacterDetailsPage = /*#__PURE__*/function () {
      function CharacterDetailsPage(activatedRoute, api, favouriteService) {
        _classCallCheck(this, CharacterDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.characterId = null;
        this.isLiked = false;
      }

      _createClass(CharacterDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getCharacter(this.characterId).subscribe(function (res) {
            _this.character = res[0];
            console.log(JSON.stringify(_this.character.characterId));
          });
          this.favouriteService.isLiked(this.characterId).then(function (isFav) {
            _this.isLiked = isFav;
          });
        }
      }, {
        key: "favouriteCharacter",
        value: function favouriteCharacter() {
          var _this2 = this;

          this.favouriteService.favouriteCharacter(this.characterId).then(function () {
            _this2.isLiked = true;
          });
        }
      }, {
        key: "unfavouriteCharacter",
        value: function unfavouriteCharacter() {
          var _this3 = this;

          this.favouriteService.unfavouriteCharacter(this.characterId).then(function () {
            _this3.isLiked = false;
          });
        }
      }]);

      return CharacterDetailsPage;
    }();

    CharacterDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]
      }];
    };

    CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-character-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character-details.page.scss */
      "./src/app/pages/character-details/character-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])], CharacterDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=character-details-character-details-module-es5.js.map