webpackJsonp([22],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListPageModule", function() { return AddressListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_list__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddressListPageModule = /** @class */ (function () {
    function AddressListPageModule() {
    }
    AddressListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__address_list__["a" /* AddressListPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address_list__["a" /* AddressListPage */]), __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__address_list__["a" /* AddressListPage */]]
        })
    ], AddressListPageModule);
    return AddressListPageModule;
}());

//# sourceMappingURL=address-list.module.js.map

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

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(159);
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







// declare let google: any;
var AddressListPage = /** @class */ (function () {
    function AddressListPage(storage, actionSheetCtrl, af, db, navCtrl, navParams, alertCtrl, loadingCtrl) {
        var _this = this;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.af = af;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.address = {};
        this.addressList = [];
        this.orderDetails = {};
        this.pincodeMatched = true;
        this.loyaltyPercentage = 0;
        this.loyaltyPoints = 0;
        this.leftLoyaltyPoint = 0;
        this.checked = false;
        this.loyaltyArray = [];
        this.user = {};
        //added newly
        this.Cart = [];
        this.settings = {};
        this.coupons = [];
        this.add = {};
        this.currency = JSON.parse(localStorage.getItem('currency'));
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
        //  this.title = JSON.parse(localStorage.getItem("names"));
        // this.title2 = localStorage.getItem("details");
        // localStorage.setItem("names", JSON.stringify(this.Cart));
        // this.title = this.navParams.get("title");
        //    localStorage.setItem("title", JSON.stringify(this.title));
        //console.log("cart-"+JSON.stringify(this.Cart));
        if (this.Cart != null) {
            this.noOfItems = this.Cart.length;
            this.callFunction();
        }
        this.db
            .list("/coupons", function (ref) { return ref.orderByChild("value"); })
            .valueChanges()
            .subscribe(function (response) {
            _this.coupons = response;
        });
        this.currency = JSON.parse(localStorage.getItem('currency'));
        this.orderDetails.grandTotal = this.navParams.get("grandTotal");
        // newly added
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
        //   this.title = JSON.parse(localStorage.getItem("names"));
        // this.title2 = localStorage.getItem("details");
        //  this.orderDetails.quantity = this.navParams.get("pname");
        //  this.orderDetails.name = this.navParams.get("xpname");
        //  this.orderDetails.xpname = this.navParams.get("name")
        this.storage.get('title').then(function (val) {
            _this.orderDetails.ntitle = val;
        });
        this.storage.get('thumb').then(function (val) {
            _this.orderDetails.thumb = val;
        });
        this.storage.get('qty').then(function (val) {
            _this.orderDetails.nqty = val;
        });
        this.storage.get('additionService').then(function (val) {
            _this.orderDetails.naddservice = val;
        });
        this.payTotal = this.orderDetails.grandTotal;
        this.orderDetails.couponDiscount = this.navParams.get("couponDiscount");
        this.orderDetails.subTotal = this.navParams.get("subTotal");
        this.orderDetails.deductedPrice = this.navParams.get("deductedPrice");
        this.orderDetails.tax = this.navParams.get("totalVat");
        this.orderDetails.delivery = "Not Assigned";
        this.orderDetails.driverId = " ";
        if (this.orderDetails.grandTotal == undefined) {
            this.navCtrl.push("CartPage");
        }
        if (this.af.auth.currentUser) {
            this.db
                .list("/users/" + this.af.auth.currentUser.uid + "/address")
                .snapshotChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ $key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (res) {
                _this.addressList = res;
            });
            // .subscribe(res => {
            //   this.addressList = [];
            //   res.forEach(item => {
            //     let temp = item.payload.toJSON();
            //     temp["$key"] = item.payload.key;
            //     this.addressList.push(temp);
            //   });
            // });
            if (this.af.auth.currentUser) {
                this.db
                    .object("/users/" + this.af.auth.currentUser.uid)
                    .valueChanges()
                    .subscribe(function (res) {
                    _this.user = res;
                });
                this.db
                    .object("/address/" + this.af.auth.currentUser.uid)
                    .valueChanges()
                    .subscribe(function (res) {
                    _this.add = res;
                });
            }
            this.db
                .list("delivery-options")
                .valueChanges()
                .subscribe(function (res) {
                _this.pincodes = res;
                console.log("pincodes-" + JSON.stringify(res));
            });
            this.db
                .object("loyalitys")
                .valueChanges()
                .subscribe(function (loyalty) {
                var res = loyalty;
                if (res.enable) {
                    _this.loyaltyPercentage = res.loylityPercentage;
                    _this.loyaltyLimit = _this.payTotal;
                }
            });
            this.userRef = this.db.list("users/" + this.af.auth.currentUser.uid + "/loyaltyPoints");
            this.userRef.valueChanges().subscribe(function (res) {
                var points = res;
                _this.loyaltyArray = points;
                var _points = 0;
                for (var i = 0; i < _this.loyaltyArray.length; i++) {
                    _points = Number(Number(_points) + Number(_this.loyaltyArray[i].points));
                    _this.loyaltyPoints = _points;
                }
            });
        }
        this.orderDetails.cart;
    }
    // Add Address
    AddressListPage.prototype.addAddress = function () {
        this.navCtrl.push("Settings" //, {
        //  id: 0
        //  }
        );
    };
    //Selected Address
    AddressListPage.prototype.selectAddress = function (key, address) {
        this.pincodeMatched = true;
        this.orderDetails.shippingAddress = address;
        for (var i = 0; i < this.pincodes.length; i++) {
            if (this.pincodes[i].pincode == address.pincode) {
                this.pincodeMatched = true;
            }
        }
    };
    AddressListPage.prototype.checkOut = function (data) {
        this.orderDetails.usedLoyaltyPoints =
            this.checked == true ? this.loyaltyPoints : 0;
        this.orderDetails.appliedLoyaltyPoints = this.checked;
        this.orderDetails.orderView = false;
        //new code
        this.orderDetails.name = this.user.name;
        this.orderDetails.email = this.user.email;
        this.orderDetails.mobileNo = this.user.mobileNo;
        this.orderDetails.location = this.user.location;
        if (this.orderDetails.shippingAddress && this.pincodeMatched) {
            this.navCtrl.push("CheckoutPage", {
                orderDetails: this.orderDetails,
                payTotal: this.payTotal
            });
        }
        else if (this.pincodeMatched == false) {
            this.showAlert("We can not deliver to your Area!");
        }
        else {
            this.showAlert("Select Your Address First!");
        }
    };
    AddressListPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: "Sorry!",
            subTitle: message,
            buttons: ["OK"]
        });
        alert.present();
    };
    AddressListPage.prototype.navSupport = function () {
        this.navCtrl.push("ContactPage");
    };
    AddressListPage.prototype.updateLoyality = function (event) {
        if (this.loyaltyPoints >= this.loyaltyLimit) {
            this.checked = event.value;
            if (event.value == true) {
                if (this.payTotal < this.loyaltyPoints) {
                    this.orderDetails.grandTotal = 0;
                    this.leftLoyaltyPoint = this.loyaltyPoints - this.payTotal;
                }
                else if (this.payTotal > this.loyaltyPoints) {
                    this.orderDetails.grandTotal = this.payTotal - this.loyaltyPoints;
                    this.leftLoyaltyPoint = 0;
                }
            }
            else {
                this.orderDetails.grandTotal = this.navParams.get("grandTotal");
            }
        }
    };
    AddressListPage.prototype.addressMenu = function () {
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
    AddressListPage.prototype.deleteItem = function (data) {
        for (var i = 0; i <= this.Cart.length - 1; i++) {
            if (this.Cart[i].item.itemId == data.item.itemId &&
                this.Cart[i].item.price.pname == data.item.price.pname) {
                this.Cart.splice(i, 1);
                this.callFunction();
                if (this.Cart.length == 0) {
                    localStorage.removeItem("Cart");
                    this.noOfItems = null;
                }
                else {
                    localStorage.setItem("Cart", JSON.stringify(this.Cart));
                    this.Cart = JSON.parse(localStorage.getItem("Cart"));
                    this.noOfItems = this.noOfItems - 1;
                }
            }
        }
    };
    AddressListPage.prototype.callFunction = function () {
        var _this = this;
        this.setting = this.db.object("/settings");
        var subTotal = 0;
        this.setting.valueChanges().subscribe(function (data) {
            _this.settings = data;
            for (var i = 0; i <= _this.Cart.length - 1; i++) {
                subTotal = subTotal + _this.Cart[i].itemTotalPrice;
            }
            _this.subTotal = Number(subTotal.toFixed(2));
            _this.otherTaxes = Number(_this.settings.taxes.toFixed(2));
            _this.total = Number((_this.subTotal * _this.settings.totalVat / 100).toFixed(2));
            _this.GrandTotal = Number((_this.subTotal + _this.total + _this.otherTaxes).toFixed(2));
        });
    };
    // to remove data from cart
    AddressListPage.prototype.remove = function (data) {
        if (data.item.itemQunatity > 1) {
            data.item.itemQunatity = data.item.itemQunatity - 1;
            for (var i = 0; i <= this.Cart.length - 1; i++) {
                var ExtotalPrice = 0;
                var totalPrice = 0;
                if (this.Cart[i].item.itemId == data.item.itemId &&
                    this.Cart[i].item.price.pname == data.item.price.pname) {
                    this.Cart[i].item.itemQunatity = data.item.itemQunatity;
                    for (var j = 0; j <= this.Cart[i].item.extraOptions.length - 1; j++) {
                        ExtotalPrice =
                            ExtotalPrice + this.Cart[i].item.extraOptions[j].exvalue;
                    }
                    if (this.Cart[i].item.price.specialPrice) {
                        totalPrice = ExtotalPrice + this.Cart[i].item.price.specialPrice;
                    }
                    else {
                        totalPrice = ExtotalPrice + this.Cart[i].item.price.value;
                    }
                    this.Cart[i].itemTotalPrice = totalPrice * data.item.itemQunatity;
                }
            }
            localStorage.setItem("Cart", JSON.stringify(this.Cart));
            this.callFunction();
            this.applyCoupon();
        }
    };
    AddressListPage.prototype.isCart = function () {
        return localStorage.getItem("Cart") == null || this.Cart.length == 0
            ? false
            : true;
    };
    AddressListPage.prototype.applyCoupon = function () {
        var subTotals = this.subTotal;
        this.deductedPrice = Number((this.couponDiscount / 100 * subTotals).toFixed(2));
        subTotals = subTotals - this.couponDiscount / 100 * subTotals;
        this.GrandTotal = Number((subTotals + this.total + this.otherTaxes).toFixed(2));
    };
    AddressListPage.prototype.navcart = function () {
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.navCtrl.push("CartPage");
        loader.dismiss();
    };
    AddressListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-address-list",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/address-list/address-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title">{{"Delivery" | translate}}\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="navcart()" color="royal" class="header-btn">\n                <ion-icon name="cart"></ion-icon>\n                <div *ngIf="noOfItems > 0">\n                    <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n                </div>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <!--amount calculation-->\n    <ion-row class="amount-block">\n        <ion-col col-6>\n            <p class="total"> {{"Order Total:" | translate}}\n                <span class="currency"> ₦ {{payTotal | number:\'.2-2\'}}\n                </span>\n            </p>\n        </ion-col>\n        <ion-col col-6>\n            <p class="total">Wallet:\n                <span class="currency"> ₦ {{ loyaltyPoints | number:\'.2-2\'}}</span>\n            </p>\n        </ion-col>\n        <ion-item class="loyality-check">\n            <ion-label>Pay from wallet</ion-label>\n            <ion-checkbox [disabled]="loyaltyPoints <loyaltyLimit" checked="checked" (ionChange)="updateLoyality($event)"></ion-checkbox>\n        </ion-item>\n        <p class="warning" *ngIf="loyaltyPoints <loyaltyLimit">You should have minimum ₦{{loyaltyLimit | number:\'.2-2\'}} to use from your wallet</p>\n        <div *ngIf="checked == true">\n           <p class="total"> Amount to be paid:\n                <span class="currency"> ₦ {{orderDetails.grandTotal | number:\'.2-2\'}}</span>\n            </p>\n        </div>\n    </ion-row>\n    <!--pick up/delivery option-->\n\n    <div>\n        <ion-list radio-group class="size-list">\n            <!--New  Address-->\n            <ion-item class="add" (click)="addAddress()">{{"Update your Delivery Address" | translate}}\n                <ion-icon name="create"></ion-icon>\n            </ion-item>\n        </ion-list>\n        <!--saved address list-->\n        <ion-list radio-group class="address-radio">\n            <ion-item>\n                <ion-label>\n                    <p class="show">{{add.firstName}} {{add.lastName}} </p>\n                    <p class="show">{{add.email}}</p>\n                    <p class="show">{{add.mobileNo}}</p>\n                    <p class="show">{{add.location}}</p>\n                </ion-label>\n                <ion-radio (ionSelect)="selectAddress(address.$key,address)"></ion-radio>\n            </ion-item>\n        </ion-list>\n        <button  block class="continue-btn" (click)="checkOut()">{{"Proceed to payment methods" | translate}} &nbsp;\n          <!--  <ion-icon name="arrow-forward"></ion-icon> -->\n        </button>\n    </div>\n    <br>\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/address-list/address-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], AddressListPage);
    return AddressListPage;
}());

//# sourceMappingURL=address-list.js.map

/***/ })

});
//# sourceMappingURL=22.js.map