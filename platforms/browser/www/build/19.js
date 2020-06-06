webpackJsonp([19],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_pipe__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_pipe__["a" /* AppPipe */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_1__app_pipe__["a" /* AppPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppPipe = /** @class */ (function () {
    function AppPipe() {
    }
    AppPipe.prototype.transform = function (value, args) {
        if (value) {
            var limit = args.length > 0 ? parseInt(args[0], 50) : 50;
            var trail = args.length > 1 ? args[1] : "...";
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    AppPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "limitPipe"
        })
    ], AppPipe);
    return AppPipe;
}());

//# sourceMappingURL=app.pipe.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wallet_wallet__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, db, navParams, af, toastCtrl, actionSheetCtrl, platform, translate, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.af = af;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.translate = translate;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.url = "assets/img/profile.jpg";
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 2000,
            pager: false
        };
        this.Cart = [];
        this.options = [
            {
                language: "ENGLISH",
                value: "en"
            },
            {
                language: "FRENCH",
                value: "fr"
            },
            {
                language: "ARABIC",
                value: "ar"
            }
        ];
        this.file = {};
        this.storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]();
        this.ComingData = [];
        this.Categories = [];
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
        this.noOfItems = this.Cart != null ? this.Cart.length : null;
        this.uid = localStorage.getItem('uid');
        if (this.uid != null) {
            if (localStorage.getItem("playerId")) {
                this.af.object("/users/" + this.uid).update({
                    playerId: localStorage.getItem("playerId")
                });
            }
        }
        if (this.db.auth.currentUser) {
            this.af
                .object("/users/" + this.db.auth.currentUser.uid)
                .valueChanges()
                .subscribe(function (res) {
                _this.user = res;
                localStorage.setItem("uid", res.uid);
                _this.user.image = res.image ? res.image : "";
                _this.url = res.image ? res.image : "assets/img/profile.jpg";
            });
        }
        loader.dismiss();
    };
    DashboardPage.prototype.navigate = function (id) {
        console.log(id);
        this.navCtrl.push("ProductListPage", { id: id });
    };
    DashboardPage.prototype.navcart = function () {
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.navCtrl.push("CartPage");
        loader.dismiss();
    };
    DashboardPage.prototype.navCategory = function () {
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.navCtrl.push("CategoryPage");
        loader.dismiss();
    };
    DashboardPage.prototype.navProductList = function () {
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.navCtrl.parent.select(1);
        loader.dismiss();
    };
    DashboardPage.prototype.navContact = function () {
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.navCtrl.push("ContactPage");
        loader.dismiss();
    };
    DashboardPage.prototype.readUrl = function (event) {
        var _this = this;
        this.file = document.getElementById("file").files[0];
        var metadata = {
            contentType: "image/*"
        };
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.storageRef
            .ref()
            .child("profile/" + this.file.name)
            .put(this.file, metadata)
            .then(function (res) {
            _this.user.image = res.downloadURL;
            _this.url = res.downloadURL;
            _this.af
                .object("users" + "/" + _this.db.auth.currentUser.uid + "/image")
                .set(res.downloadURL);
            loader.dismiss();
        })
            .catch(function (error) {
            loader.dismiss();
        });
    };
    DashboardPage.prototype.changeLanguage = function () {
        localStorage.setItem("language", this.value);
        if (this.value == "fr") {
            this.platform.setDir("ltr", true);
            this.translate.use("fr");
        }
        else if (this.value == "ar") {
            this.platform.setDir("rtl", true);
            this.translate.use("ar");
        }
        else {
            this.platform.setDir("ltr", true);
            this.translate.use("en");
        }
    };
    DashboardPage.prototype.onSubmit = function (user) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        if (this.db.auth.currentUser) {
            this.af
                .object("/users/" + this.db.auth.currentUser.uid)
                .update({
                name: this.user.name,
                image: this.user.image,
                email: this.user.email,
                mobileNo: this.user.mobileNo,
                location: this.user.location
            })
                .then(function () {
                loader.dismiss();
                _this.createToaster("user information updated successfully", 3000);
                _this.events.publish("imageUrl", _this.user);
            });
        }
    };
    DashboardPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    DashboardPage.prototype.navWallet = function () {
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wallet_wallet__["a" /* WalletPage */]);
        loader.dismiss();
    };
    DashboardPage.prototype.navCS = function () {
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.navCtrl.push('CsPage');
        loader.dismiss();
    };
    DashboardPage.prototype.navRT = function () {
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.navCtrl.push('RtPage');
        loader.dismiss();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img class="social-iconic" src="assets/img/kw.png">\n<!--- <ion-title class="title">{{"Home" | translate}}  \n    </ion-title>  -->\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="navcart()" class="header-btn-cart">\n        <ion-icon name="cart"></ion-icon>\n        <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n <ion-content>\n\n \n\n\n  <ion-row>\n   <!---- <div class="topp">\n        <br>\n       \n    </div>  -->\n    <br>\n    <img src="assets/img/cook.png">\n  <!----  <h4 class="topp">Welcome, {{user.firstName}}</h4>  --->\n  \n    <br>\n   \n\n\n  </ion-row> \n\n  <ion-grid class="grid">\n\n   \n\n    <!-----    <img class="imgg" src="https://res.cloudinary.com/ethion/image/upload/v1579991113/cooking-pot-gas_nyismd.jpg"> -->\n\n\n    \n   <!--- <h2 text-center>{{"Categories" | translate}}</h2> -->\n   <br>\n   \n    <ion-row class="categories">\n      <ion-col col-6 >\n        <ion-card (click)="navProductList()">\n          <br>\n        <img class="img" src="assets/img/gass.png">\n     <br>\n     <h2 class="papa"   text-center>Buy Gas</h2>\n     <br>\n      </ion-card>\n      </ion-col>\n      <ion-col col-6 >\n        <ion-card (click)="navCategory()">\n          <br>\n        <img class="img" src="assets/img/blender.png">\n      <br>\n      <h2 class="papa"   text-center>Gas Accessories</h2>\n      <br>\n      </ion-card>\n      </ion-col>\n    \n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="grid">\n    <ion-row class="categories">\n      <ion-col col-6 >\n        <ion-card (click)="navWallet()">\n          <br>\n        <img class="img" src="assets/img/wallet.png">\n      <br>\n      <h2  class="papa"  text-center>Wallet</h2>\n      <br>\n      </ion-card>\n      </ion-col>\n      <ion-col col-6 >\n        <ion-card (click)="navCS()"> \n          <br>\n        <img class="img" src="assets/img/cs.png">\n      <br>\n      <h2 class="papa" text-center>Consultancy Service</h2>\n      <br>\n      </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n \n\n  <ion-grid class="grid">\n    <ion-row class="categories">\n\n     \n      <ion-col col-6 >\n      <ion-card (click)="navRT()"> \n        <br>\n      <img class="img" src="assets/img/rt.png">\n      <br>\n      <h2 class="papa" text-center>Request a Technician</h2>\n      <br>\n      </ion-card>\n      </ion-col>\n      <ion-col col-6 >\n        <ion-card (click)="navContact()"> \n          <br>\n        <img class="img" src="assets/img/conversation.png">\n      <br>\n      <h2 class="papa" text-center>Help</h2>\n      <br>\n      </ion-card>\n    </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n\n\n\n'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=19.js.map