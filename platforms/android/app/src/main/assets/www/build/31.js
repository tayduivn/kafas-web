webpackJsonp([31],{

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(657);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
    AddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */]),
            ],
        })
    ], AddressPageModule);
    return AddressPageModule;
}());

//# sourceMappingURL=address.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = /** @class */ (function () {
    function AddressPage(navCtrl, actionSheetCtrl, navParams, af, db, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.af = af;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.address = {};
        this.addressList = [];
        this.orderDetails = {};
        this.pincodeMatched = true;
        if (this.af.auth.currentUser) {
            this.db
                .list("/users/" + this.af.auth.currentUser.uid + "/address")
                .snapshotChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ $key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (res) {
                _this.addressList = res;
            });
            this.db
                .list("delivery-options")
                .valueChanges()
                .subscribe(function (res) {
                _this.pincodes = res;
                console.log("pincodes-" + JSON.stringify(res));
            });
            this.userRef = this.db.list("users/" + this.af.auth.currentUser.uid + "/loyaltyPoints");
        }
    }
    // Add Address
    AddressPage.prototype.addAddress = function () {
        this.navCtrl.push("AddAddressPage", {
            id: 0
        });
    };
    //Selected Address
    AddressPage.prototype.selectAddress = function (key, address) {
        this.pincodeMatched = true;
        this.orderDetails.shippingAddress = address;
        for (var i = 0; i < this.pincodes.length; i++) {
            if (this.pincodes[i].pincode == address.pincode) {
                this.pincodeMatched = true;
            }
        }
    };
    AddressPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: "Sorry!",
            subTitle: message,
            buttons: ["OK"]
        });
        alert.present();
    };
    AddressPage.prototype.navSupport = function () {
        this.navCtrl.push("ContactPage");
    };
    AddressPage.prototype.addressMenu = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            //   title: 'Modify your album',
            cssClass: 'myPage',
            buttons: [
                {
                    text: 'Contact Us',
                    role: 'destructive',
                    cssClass: 'textSize',
                    handler: function () {
                        _this.navCtrl.push("ContactPage");
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'myActionSheetBtnStyle',
                }
            ]
        });
        actionSheet.present();
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-address',template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/address/address.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title class="title">{{"Manage Address"}}\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="addressMenu()" class="header-btn-cart">\n              <ion-icon name="list"></ion-icon>\n              <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div>\n  <ion-list class="size-list">\n    <!--New  Address-->\n    <ion-item class="add" (click)="addAddress()">{{"Add New Address"}}\n        <ion-icon name="add"></ion-icon>\n    </ion-item>\n</ion-list>\n <!--saved address list-->\n <ion-list >\n  <ion-item *ngFor="let address of addressList">\n      <ion-label>\n          <p class="show">{{address.name}} </p>\n          <p class="show">{{address.address}}</p>\n          <p class="show">{{address.city}}</p>\n          <p class="show">{{address.pincode}}</p>\n      </ion-label>\n  </ion-item>\n</ion-list>\n</div>\n<br>\n\n</ion-content>\n'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ })

});
//# sourceMappingURL=31.js.map