webpackJsonp([21],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]), __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]]
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

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

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = /** @class */ (function () {
    // menuItem: AngularFireObject<unknown>;
    function CartPage(storage, db, navCtrl, navParams, alertCtrl, loadingCtrl, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.Cart = [];
        this.settings = {};
        this.couponDiscount = 0;
        this.deductedPrice = 0;
        this.coupons = [];
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
    }
    CartPage.prototype.applyCoupon = function () {
        var subTotals = this.subTotal;
        this.deductedPrice = Number((this.couponDiscount / 100 * subTotals).toFixed(2));
        subTotals = subTotals - this.couponDiscount / 100 * subTotals;
        this.GrandTotal = Number((subTotals + this.total + this.otherTaxes).toFixed(2));
    };
    CartPage.prototype.deleteItem = function (data) {
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
    CartPage.prototype.onClickCancel = function () {
        this.navCtrl.push('TabPage');
    };
    CartPage.prototype.callFunction = function () {
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
    CartPage.prototype.nav = function (data, i) {
        var _this = this;
        if (localStorage.getItem("uid") == null) {
            var alert_1 = this.alertCtrl.create({
                title: "SORRY!",
                subTitle: "You Have to Login First!",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            _this.navCtrl.push("LoginPage");
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            //  this.storage.set('qty', this.noOfItems);
            this.navCtrl.push("AddressListPage", {
                grandTotal: this.GrandTotal,
                subTotal: this.subTotal,
                //  title: this.title,
                //  xpname: data.item.itemQunatity,
                //  name: data.item.itemQunatity,
                couponDiscount: this.couponDiscount,
                deductedPrice: this.deductedPrice,
                totalVat: this.total,
                taxes: this.otherTaxes
            });
        }
    };
    CartPage.prototype.add = function (data) {
        if (data.item.itemQunatity < 20) {
            data.item.itemQunatity = data.item.itemQunatity + 1;
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
            this.storage.set('qty', data.item.itemQunatity);
            localStorage.setItem("Cart", JSON.stringify(this.Cart));
            this.callFunction();
            this.applyCoupon();
        }
    };
    // to remove data from cart
    CartPage.prototype.remove = function (data) {
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
    CartPage.prototype.isCart = function () {
        return localStorage.getItem("Cart") == null || this.Cart.length == 0
            ? false
            : true;
    };
    CartPage.prototype.gotoProductList = function () {
        localStorage.removeItem("Cart");
        this.navCtrl.push("CategoryPage");
    };
    CartPage.prototype.goToHome = function () {
        this.navCtrl.push("TabPage");
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-cart",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/cart/cart.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <ion-title>{{"My Cart" | translate}}</ion-title>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="onClickCancel()">\n              <ion-icon name="arrow-back"></ion-icon>\n            </button>\n          </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" class="header-btn">\n                <ion-icon name="cart"></ion-icon>\n                <div *ngIf="noOfItems > 0">\n                    <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n                </div>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="{bg:!isCart()}">\n    <div *ngIf="!isCart()">\n        <ion-row>\n            <ion-icon class="empty-cart" name="cart"></ion-icon>\n        </ion-row>\n        <h4>Your Cart is empty!</h4>\n        <button  class="empty-btn" (click)="gotoProductList()">{{\'Continue Shopping\' | translate}}</button>\n    </div>\n    <div *ngIf="isCart()">\n        <ion-list class="cart-list" *ngFor="let data of Cart">\n            <!-- item-list -->\n            <ion-item class="cart-item">\n                <!-- item -->\n                <ion-row class="full">\n                    <ion-col col-12>\n                        <!-- col-for item-image and details -->\n                        <ion-row>\n                            <ion-col col-4>\n                                <!-- item-image -->\n                                <img src={{data.item.thumb}} alt="">\n                            </ion-col>\n                            <ion-col col-8>\n                                <p class="item-name" text-wrap><b>{{data.item.title}}</b></p>\n                                <p class="item-detail" text-wrap><b>{{"Quantity:" | translate}}</b> {{data.item.itemQunatity}}</p>\n                                <p class="item-detail" text-wrap><b>{{"Order:" | translate}}</b> {{data?.item?.price?.pname}}</p>\n                                <span *ngIf="data.item.price.specialPrice">\n                                    <p class="item-detail"><b>Price:</b>\n                                        <span class="item-price">\n                                            <strong class="cut"> ₦{{data.item.price.value | number:\'.2-2\'}}</strong>\n                                        </span>\n                                    </p>\n                                    <p class="item-detail"><b>Special Price:</b>\n                                    \n                                            ₦{{data.item.price.specialPrice | number:\'.2-2\'}}\n                                    </p>\n                                </span>\n                                <span *ngIf="!data.item.price.specialPrice">\n                                    <p class="item-detail"><b>{{"Price:" | translate}}</b>\n                                        <span class="item-price"> ₦{{data.item.price.value | number:\'.2-2\'}}</span>\n                                        \n                                    </p>\n                                </span>\n\n                              \n\n                                <!-- row-for count item -->\n\n                             <ion-row class="counter">\n                                    \n                           <!----     <ion-col col-10>\n                                    <div class="count">\n                                        <span class="item-count" (click)="remove(data)">\n                                            -\n                                        </span>\n                                        <span class="item-count show-count">\n                                            {{data.item.itemQunatity}}\n                                        </span>\n                                        <span class="item-count" (click)="add(data)">\n                                            +\n                                        </span>\n                                    </div>\n                                </ion-col>  -->\n\n                                    <ion-col col-3>\n                                        <ion-icon class="trash" name="trash" (click)="deleteItem(data)"> Remove</ion-icon>\n                                    </ion-col>\n                                   \n                                </ion-row>\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-list>\n        <ion-row class="price-details">\n            <ion-col class="calculate" col-12>\n                <p class="bill-detail">{{"Price Subtotal:" | translate}}\n                    <span>₦ {{subTotal | number:\'.2-2\'}}</span>\n                </p>\n                <div *ngIf="deductedPrice">\n                    <p class="bill-detail">{{\'Deducted Price:\' | translate}}\n                        <span> - ₦{{deductedPrice | number:\'.2-2\'}}</span>\n                    </p>\n                </div>\n\n                <p class="bill-detail">{{"Total VAT:" | translate}}({{settings.totalVat }}%)\n                    <span>₦ {{total}}</span>\n                </p>\n                <p class="bill-detail">{{"Shipping:" | translate}}\n                    <span> ₦ {{otherTaxes}}</span>\n                </p>\n                <hr>\n                <ion-row>\n                    <ion-col col-4 class="no-padding">\n                        <p class="bill-detail">{{"Apply Coupon:" | translate}}</p>\n                    </ion-col>\n                    <ion-col col-8>\n\n                        <ion-item class="select-item">\n                          <!----  <ion-label text-center>{{"Coupons" | translate}}</ion-label> -->\n                            <ion-select [(ngModel)]="couponDiscount" (ionChange)="applyCoupon()">\n                                <ion-option *ngFor="let coupon of coupons" value="{{coupon.value}}">{{coupon.name}}&nbsp;({{coupon.value}}%)\n                                </ion-option>\n                            </ion-select>\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n                <p class="coupon-applied" *ngIf="deductedPrice">Coupon Applied.</p>\n                <div class="cart-total">\n                    <strong>{{"Order Total:" | translate}}</strong>\n                    ₦ {{GrandTotal | number:\'.2-2\'}}\n                </div>\n            </ion-col>\n        </ion-row>\n        <!-- row-bill-details -->\n        <!-- continue button -->\n        <ion-row>\n            <ion-col col-12>\n                <button block class="continue-btn" (click)="nav()">{{"Continue"| translate}}</button>\n            </ion-col>\n        </ion-row>\n    </div>\n    <br>\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=21.js.map