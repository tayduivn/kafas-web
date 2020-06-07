webpackJsonp([11],{

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]), __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */]]
        })
    ], SettingsModule);
    return SettingsModule;
}());

//# sourceMappingURL=settings.module.js.map

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

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_imghandler_imghandler__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_autocomplete_autocomplete__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//Maps
var Settings = /** @class */ (function () {
    function Settings(af, storage, userservice, alertCtrl, imghandler, db, toastCtrl, loadingCtrl, navCtrl, actionSheetCtrl, platform, modalCtrl, translate, navParams, zone, events) {
        this.af = af;
        this.storage = storage;
        this.userservice = userservice;
        this.alertCtrl = alertCtrl;
        this.imghandler = imghandler;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.navParams = navParams;
        this.zone = zone;
        this.events = events;
        this.avatar = "assets/img/profile.jpg";
        this.user = {};
        this.url = "assets/img/profile.jpg";
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
        var value = localStorage.getItem("language");
        this.value = value != null ? value : "en";
        this.translate.setDefaultLang("en");
    }
    Settings.prototype.showError = function () {
        var alert = this.alertCtrl.create({
            title: 'Please input an address before saving!',
            //  subTitle: 'Please do not exit or close the app.',
            buttons: ['OK']
        });
        alert.present();
    };
    Settings.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        if (this.af.auth.currentUser) {
            this.db
                .object("/users/" + this.af.auth.currentUser.uid)
                .valueChanges()
                .subscribe(function (res) {
                _this.user = res;
                _this.user.location = res.location;
                //  this.avatar = res.photoURL;
                _this.user.photoURL = res.photoURL ? res.photoURL : "";
                _this.avatar = res.photoURL ? res.photoURL : "assets/img/profile.jpg";
            });
        }
        // this.userservice.getuserdetails().then((res: any) => {
        //  this.zone.run(() => {
        //   this.avatar = res.photoURL;
        //  })
        //  })
        loader.dismiss();
    };
    //Maps
    // end
    Settings.prototype.readUrl = function (event) {
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
            _this.db
                .object("users/" + _this.af.auth.currentUser.uid + "/image")
                .set(res.downloadURL);
            loader.dismiss();
        })
            .catch(function (error) {
            loader.dismiss();
        });
    };
    Settings.prototype.editimage = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        this.imghandler.uploadimage().then(function (url) {
            _this.userservice.updateimage(url).then(function (res) {
                if (res.success) {
                    statusalert.setTitle('Updated');
                    statusalert.setSubTitle('Your profile pic has been changed successfully! It might take a while for changes to reflect.');
                    _this.storage.set('avatar', _this.avatar);
                    statusalert.present();
                    _this.zone.run(function () {
                        _this.avatar = url;
                    });
                }
            }).catch(function (err) {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your profile pic was not changed. Please try');
                statusalert.present();
            });
        });
    };
    Settings.prototype.changeLanguage = function () {
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
    Settings.prototype.onSubmit = function (user) {
        var _this = this;
        if (this.user.location != null) {
            var loader_1 = this.loadingCtrl.create({
                //  content: "Please wait..",
                spinner: "dots",
                cssClass: 'my-loading-class'
            });
            loader_1.present();
            if (this.af.auth.currentUser) {
                this.db
                    .object("/users/" + this.af.auth.currentUser.uid)
                    .update({
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    //   photoURL: this.user.photoURL,
                    gender: this.user.gender,
                    email: this.user.email,
                    mobileNo: this.user.mobileNo,
                    location: this.user.location
                });
                this.db
                    .object("/address/" + this.af.auth.currentUser.uid)
                    .update({
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email,
                    mobileNo: this.user.mobileNo,
                    location: this.user.location,
                    userId: this.af.auth.currentUser.uid
                })
                    .then(function () {
                    loader_1.dismiss();
                    _this.navCtrl.push('TabPage');
                    _this.createToaster("user information updated successfully", 3000);
                    _this.events.publish("imageUrl", _this.user);
                });
            }
        }
        else {
            this.showError();
        }
    };
    Settings.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    Settings.prototype.onClickCancel = function () {
        this.navCtrl.push('TabPage');
    };
    Settings.prototype.addressMenu = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            //   title: 'Modify your album',
            cssClass: 'myPage',
            buttons: [
                {
                    text: 'Wishlist',
                    role: 'destructive',
                    cssClass: 'textSize',
                    handler: function () {
                        _this.navCtrl.push("FavouritePage");
                    }
                }, {
                    text: 'Contact Us',
                    role: 'destructive',
                    cssClass: 'textSize',
                    handler: function () {
                        _this.navCtrl.push("ContactPage");
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'myActionSheetBtnStyle',
                }
            ]
        });
        actionSheet.present();
    };
    // Autocomplete Address
    Settings.prototype.showAddressModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_autocomplete_autocomplete__["a" /* AutocompletePage */]);
        var me = this;
        modal.onDidDismiss(function (data) {
            _this.user.location = data;
        });
        modal.present();
    };
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-settings",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{"Profile" | translate}}</ion-title>\n     <!----   <ion-buttons left>\n            <button ion-button icon-only (click)="onClickCancel()">\n              <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>   --->\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="addressMenu()" class="header-btn-cart">\n                <ion-icon name="list"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n  \n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n     \n    <form (ngSubmit)="onSubmit(f)" #f="ngForm">\n\n          <div class="profile-image" (click)="editimage()">\n         <img src="{{avatar}}">\n         <p (click)="editimage()" class="textt" item-center>Change Profile Picture</p>\n       </div>\n       <br>\n\n     \n\n         <ion-row class="center2">\n     <ion-col  col-10 col-xl-5 col-lg-5 col-md-6>\n\n\n            <ion-item>\n                <ion-label  class="size" >{{"*First Name:"}}</ion-label>\n                <ion-input class="sizer" type="text" name="firstName" id="firstName" required [(ngModel)]="user.firstName" ></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label  class="size" >{{"*Last Name:"}}</ion-label>\n                <ion-input class="sizer" type="text" name="lastName" id="lastName" required [(ngModel)]="user.lastName" ></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label class="size" >{{"*Gender:" | translate}}</ion-label>\n                <ion-input class="sizer" type="text" name="gender" id="gender" required  [(ngModel)]="user.gender" ></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label class="size" >{{"*Email:" | translate}}</ion-label>\n                <ion-input class="sizer" type="email" name="email" id="email" required [(ngModel)]="user.email" ></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n                <ion-label class="size" >{{"*Phone:" | translate}}</ion-label>\n                <ion-input class="sizer" type="text" name="mobileNo" id="mobileNo" required [(ngModel)]="user.mobileNo" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="size" >{{"*Address:" | translate}}</ion-label>\n                <ion-input class="sizer" type="text" name="location" id="location" required [(ngModel)]="user.location" ></ion-input>\n                <button (click)="showAddressModal()" ion-button clear class="para" type="button" item-right> SET ON MAP</button>\n            </ion-item>\n\n           <br>\n\n        <!--button-->\n        <button class="login-btn"  type="submit"  [disabled]="!f.valid" > <ion-icon name="checkmark"></ion-icon> &nbsp; {{"Save" | translate}}</button>\n   \n    <p text-center>*Ensure to always keep your profile updated.</p>\n\n\n    </ion-col>\n   </ion-row>\n  \n   \n    <br>\n    </form>\n\n     \n\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=11.js.map