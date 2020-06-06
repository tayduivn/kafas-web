webpackJsonp([27],{

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBookingPageModule", function() { return TableBookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_booking__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TableBookingPageModule = /** @class */ (function () {
    function TableBookingPageModule() {
    }
    TableBookingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__table_booking__["a" /* TableBookingPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__table_booking__["a" /* TableBookingPage */])]
        })
    ], TableBookingPageModule);
    return TableBookingPageModule;
}());

//# sourceMappingURL=table-booking.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TableBookingPage = /** @class */ (function () {
    function TableBookingPage(navCtrl, datePicker, dbService, alertCtrl, toastCtrl, af, db, loadingCtrl, actionSheetCtrl, platform, translate, events) {
        this.navCtrl = navCtrl;
        this.datePicker = datePicker;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.af = af;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.translate = translate;
        this.events = events;
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
        this.storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["storage"]();
        this.uid = this.af.auth.currentUser.uid;
    }
    TableBookingPage.prototype.onClickBookTable = function (user) {
        this.bookTable = {
            userID: this.uid,
            status: "Pending",
            time: this.time,
            date: this.date,
            //   person: this.person,
            csize: (" " + this.csize),
        };
        this.presentConfirm();
    };
    TableBookingPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm Cylinder Refill?",
            message: "After confirmation, our representative would reach out to you via Phone after which, plans for your refill would be processed. ",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        _this.presentToast("Not Intrested?. Going back...");
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: "Confirm",
                    handler: function () {
                        if (_this.af.auth.currentUser) {
                            _this.dbService
                                .list("table-bookings")
                                .push(_this.bookTable)
                                .then(function (res) {
                                _this.presentToast("Cylinder Refill Schedule has been created succesfully!");
                                _this.navCtrl.pop();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    TableBookingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    TableBookingPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.af.auth.currentUser) {
            this.db
                .object("/users/" + this.af.auth.currentUser.uid)
                .valueChanges()
                .subscribe(function (res) {
                _this.user = res;
                _this.user.image = res.image ? res.image : "";
                _this.url = res.image ? res.image : "assets/img/profile.jpg";
            });
        }
    };
    TableBookingPage.prototype.readUrl = function (event) {
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
                .object("users" + "/" + _this.af.auth.currentUser.uid + "/image")
                .set(res.downloadURL);
            loader.dismiss();
        })
            .catch(function (error) {
            loader.dismiss();
        });
    };
    TableBookingPage.prototype.changeLanguage = function () {
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
    TableBookingPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    TableBookingPage.prototype.addressMenu = function () {
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
    TableBookingPage.prototype.goToProfile = function () {
        this.navCtrl.push("Settings");
    };
    TableBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-table-booking",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/table-booking/table-booking.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="title">Schedule Refill</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="addressMenu()" class="header-btn-cart">\n          <ion-icon name="list"></ion-icon>\n          \n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content-wrap">\n  <div class="side-headline">\n    <br><br>\n    <p class="bitback"> Select Date and Time to Schedule Cylinder Refill from any Location</p>\n    <br>\n  </div>\n  <div class="order">\n    <ion-label class="form">&nbsp;&nbsp;Select Date:</ion-label>\n    <div class="select-box">\n      <ion-item class="data-holder">\n        <ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="date"></ion-datetime>\n        <ion-label>\n          <ion-icon name="calendar" class="icons"></ion-icon>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n  <!--order-->\n  <div class="order">\n    <ion-label class="form">&nbsp;&nbsp;Select Time:</ion-label>\n    <div class="select-box">\n      <ion-item class="data-holder">\n        <ion-datetime displayFormat="hh-mm A" [(ngModel)]="time"></ion-datetime>\n        <ion-label>\n          <ion-icon name="time" class="icons"></ion-icon>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n\n\n<div class="order">\n\n  <ion-label class="form">&nbsp;&nbsp;Location:</ion-label>\n    <div class="select-box">\n  <ion-item>\n    <ion-label>\n      <ion-icon color="black" name="pin" class="icons"></ion-icon>\n      {{user.location}}\n    </ion-label>\n</ion-item>\n</div>\n\n</div>\n\n\n<div class="order">\n<ion-label class="texter">Wrong Location? <span (click)="goToProfile()" class="text">Update your Profile</span></ion-label>\n</div>\n<br>\n  <!--order-->\n <!----- <div class="order">\n    <ion-label class="form">&nbsp;&nbsp;Select Cylinder Type:</ion-label>\n    <div class="select-box">\n      <ion-item class="data-holder">\n        <ion-item>\n        <ion-label>Cylinder Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n        <ion-select [(ngModel)]="person">\n          <ion-option value="12kg Gas Cylinder">12kg Gas Cylinder</ion-option>\n          <ion-option value="25kg Gas Cylinder">25kg Gas Cylinder</ion-option>\n          <ion-option value="50kg Gas Cylinder">50kg Gas Cylinder</ion-option>\n          <ion-option value="My Cylinder is not listed">My Cylinder is not listed</ion-option>\n          <ion-option value="I don\'t know my Cylinder Type">I don\'t know my Cylinder Type</ion-option>\n        </ion-select>\n        </ion-item>\n      </ion-item>\n    </div>\n  </div> -->\n\n  <div  class="hitback">\n  <ion-item>\n    <ion-label ></ion-label>\n    <ion-input placeholder="Enter Cylinder Size: (kg)"  type="text" name="csize" id="csize" [(ngModel)]="csize"></ion-input>\n</ion-item>\n</div>\n\n<br>\n<br>\n\n  <!--order-->\n  <div>\n    <button  full type="button" class="book-button" (click)="onClickBookTable()">Confirm Cylinder Refill</button>\n  </div>\n\n\n  <br>\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/table-booking/table-booking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], TableBookingPage);
    return TableBookingPage;
}());

//# sourceMappingURL=table-booking.js.map

/***/ })

});
//# sourceMappingURL=27.js.map