webpackJsonp([30],{

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryPageModule", function() { return BookingHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_history__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingHistoryPageModule = /** @class */ (function () {
    function BookingHistoryPageModule() {
    }
    BookingHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__booking_history__["a" /* BookingHistoryPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booking_history__["a" /* BookingHistoryPage */])]
        })
    ], BookingHistoryPageModule);
    return BookingHistoryPageModule;
}());

//# sourceMappingURL=booking-history.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingHistoryPage = /** @class */ (function () {
    function BookingHistoryPage(navCtrl, dbService, toastCtrl, actionSheetCtrl, af) {
        //   this.bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
        //  this.noOfItems = this.bookingDetails != null ? this.bookingDetails.length : null;
        var _this = this;
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.af = af;
        this.bookingDetails = [];
        this.uid = this.af.auth.currentUser.uid;
        //   this.uid = localStorage.getItem("uid");
        this.dbService
            .object("users/" + this.uid)
            .valueChanges()
            .subscribe(function (user) {
            console.log(user);
            //   if (user != null) {
            //   this.username = user.name;
            //   }
        });
        dbService
            .list("table-bookings")
            .valueChanges()
            .subscribe(function (res) {
            _this.bookingDetails = [];
            res.forEach(function (item) {
                if (item.userID == _this.uid) {
                    //    item["username"] = this.username;
                    _this.bookingDetails.push(item);
                }
            });
        }, function (error) {
            _this.presentToast(error.message);
        });
    }
    BookingHistoryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    BookingHistoryPage.prototype.isBooking = function () {
        if (this.bookingDetails.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    BookingHistoryPage.prototype.addressMenu = function () {
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
    BookingHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-booking-history",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/booking-history/booking-history.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Refill History</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="addressMenu()" class="header-btn-cart">\n          <ion-icon name="list"></ion-icon>\n          \n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content [ngClass]="{bg:!isBooking()}">\n\n  <div *ngIf="!isBooking()">\n    <ion-row>\n        <ion-icon class="empty-cart" name="information"></ion-icon>\n    </ion-row>\n    <h4 class="wis">Your refill history is empty!</h4>\n</div>\n\n<div *ngIf="isBooking()">\n  <ion-card class="card_content" *ngFor="let item of bookingDetails; let i=index;">\n    <ion-list class="overlay_top">\n      \n      <h2 class="id" padding> <ion-icon name="beaker"></ion-icon> &nbsp; Cylinder Refil History: {{i+1}}</h2>\n    </ion-list>\n    <ion-card-content class="overlay_content">\n     \n      <ion-row class="details" text-center>\n        <ion-col col-6>\n          <h1 class="persons">{{item.csize}}</h1>\n          <p class="subline">Cylinder Type</p>\n        </ion-col>\n        <ion-col col-6>\n          <h1 class="persons">{{item?.tableNumber? item?.tableNumber: item.status }}</h1>\n          <p (click)="delete(item)" class="subline">Response</p>\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-center padding>\n        <ion-col col-6 class="date">\n          <ion-icon ios="ios-calendar-outline" name="calendar" class="icon"></ion-icon>\n          <h3 class="descrption">{{item.date}}</h3>\n        </ion-col>\n        <ion-col col-6 class="time">\n          <ion-icon ios="ios-clock-outline" name="clock" class="icon"></ion-icon>\n          <h3 class="descrption">{{item.time}}</h3>\n        </ion-col>\n      <!----  <h4 style="color: white;"> Location: {{item.location}}</h4>  -->\n      </ion-row>\n    </ion-card-content>\n    <ion-list class="overlay_bottom" padding>\n      <ion-list col-6 class="status">\n        <h4 style="color: white;"> Status: <span style="color: red;">{{item.status}}</span></h4>\n        <!-- <ion-icon padding-left ios="ios-heart" name="heart" class="icon" ></ion-icon> -->\n      </ion-list>\n      <!-- <ion-list col-6 class="rating">\n          <h4>Rating</h4>\n          <div class="star">\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star-half"></ion-icon>\n            <ion-icon name="star-outline"></ion-icon>\n          </div>\n        </ion-list> -->\n    </ion-list>\n  </ion-card>\n</div>\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/booking-history/booking-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], BookingHistoryPage);
    return BookingHistoryPage;
}());

//# sourceMappingURL=booking-history.js.map

/***/ })

});
//# sourceMappingURL=30.js.map