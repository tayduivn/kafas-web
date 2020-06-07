webpackJsonp([13],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]), __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]]
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());

//# sourceMappingURL=product-details.module.js.map

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

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cart_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(storage, navCtrl, af, db, navParams, cartService, alertCtrl, loadingCtrl, toastCtrl) {
        // localStorage.setItem("names", JSON.stringify(this.cart.title));
        // localStorage.setItem("details", this.cart.title);
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.af = af;
        this.db = db;
        this.navParams = navParams;
        this.cartService = cartService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.FireVisible = false;
        this.count = 1;
        this.isLiked = false;
        this.menuItems = {};
        this.cart = {
            itemId: String,
            extraOptions: [],
            xname: "",
            xvalue: 0,
            price: {
                name: "",
                value: 0,
                currency: ""
            },
            title: "",
            thumb: String,
            itemQunatity: this.count
        };
        this.selectedItems = [];
        this.visible = false;
        this.currency = JSON.parse(localStorage.getItem('currency'));
        this.id = this.navParams.get("id");
        this.menuItem = db.object("/menuItems/" + this.id);
        this.menuItem.valueChanges().subscribe(function (data) {
            if (data != null) {
                _this.menuItems = data;
                _this.menuItems["$key"] = _this.id;
                _this.cart.title = data.title;
                _this.cart.itemId = _this.id;
                _this.cart.thumb = data.thumb;
            }
            if (_this.af.auth.currentUser) {
                _this.db
                    .object("/users/" + _this.af.auth.currentUser.uid + "/favourite/" + _this.id)
                    .valueChanges()
                    .subscribe(function (res) {
                    console.log("fav response--", res);
                    if (res != null) {
                        _this.isLiked = true;
                    }
                    else {
                        _this.isLiked = false;
                    }
                });
            }
        });
    }
    ProductDetailsPage.prototype.ionViewWillEnter = function () {
        var cart = JSON.parse(localStorage.getItem("Cart"));
        this.noOfItems = cart != null ? cart.length : null;
    };
    ProductDetailsPage.prototype.addQuantity = function () {
        if (this.count < 10) {
            this.count = this.count + 1;
            this.cart.itemQunatity = this.count;
        }
    };
    ProductDetailsPage.prototype.removeQuantity = function () {
        if (this.count > 1) {
            this.count = this.count - 1;
            this.cart.itemQunatity = this.count;
        }
    };
    ProductDetailsPage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    ProductDetailsPage.prototype.navCategory = function () {
        this.navCtrl.push("CategoryPage");
    };
    ProductDetailsPage.prototype.sizeOptions = function (price) {
        this.cart.price = price;
        this.cart.price.value = Number(price.value);
    };
    ProductDetailsPage.prototype.checkOptions = function (extraOption) {
        if (this.cart.extraOptions.length != 0) {
            for (var i = 0; i <= this.cart.extraOptions.length - 1; i++) {
                if (this.cart.extraOptions[i].name == extraOption.name) {
                    this.cart.extraOptions.splice(i, 1);
                    break;
                }
                else {
                    this.cart.extraOptions.push(extraOption);
                    break;
                }
            }
        }
        else {
            this.cart.extraOptions.push(extraOption);
        }
    };
    ProductDetailsPage.prototype.addToCart = function (price) {
        if (this.noOfItems < 1) {
            this.cart.price = price;
            this.cart.price.value = Number(price.value);
            this.cartService.OnsaveLS(this.cart);
            this.storage.set('title', this.cart.title);
            this.storage.set('qty', this.cart.itemQunatity);
            this.storage.set('additionService', this.cart.extraOptions);
            this.storage.set('thumb', this.cart.thumb);
            this.navCtrl.push("CartPage");
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Oops! You can only order one item at a time.",
                subTitle: "Please go to your cart and complete payment or remove the item in your cart to be able to add a new one.",
                buttons: ["OK"]
            });
            alert_1.present();
        }
    };
    ProductDetailsPage.prototype.addToFevrt = function (key) {
        var _this = this;
        if (this.af.auth.currentUser) {
            this.db
                .object("/users/" + this.af.auth.currentUser.uid + "/favourite/" + key)
                .update({
                thumb: this.menuItems.thumb,
                title: this.menuItems.title,
                description: this.menuItems.description
            })
                .then(function (res) {
                _this.isLiked = true;
                _this.createToaster("added to wishlist", "3000");
            });
        }
        else {
            this.createToaster("please login first", "3000");
        }
    };
    ProductDetailsPage.prototype.removeFevrt = function (key) {
        var _this = this;
        if (this.af.auth.currentUser) {
            this.db
                .object("/users/" + this.af.auth.currentUser.uid + "/favourite/" + key)
                .remove()
                .then(function () {
                _this.isLiked = false;
                _this.createToaster("removed from wishlist", "3000");
            });
        }
    };
    ProductDetailsPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    ProductDetailsPage.prototype.goToProductList = function () {
        this.navCtrl.push("DashboardPage");
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-product-details",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/product-details/product-details.html"*/'<ion-header>\n    <ion-navbar *navbar  hide-tabs>\n        <ion-title class="title">{{"Order Details" | translate}}</ion-title>\n        <ion-buttons>\n            <button  end ion-button icon-only color="royal" (click)="navcart()" class="header-btn-cart">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="item-page" >\n\n    <ion-row class="top">\n        <ion-col col-3>\n        </ion-col>\n        <ion-col   col-6>\n        <img class="productImage" src={{menuItems.thumb}} alt="{{menuItems.title}} ">\n    </ion-col>\n      <ion-col col-3>\n        </ion-col>\n    </ion-row>\n\n    <!-- first-row -->\n    <!--favourite-->\n    <span clear text-center *ngIf="isLiked">\n        &nbsp;&nbsp;&nbsp;<ion-icon  name="heart" class="fav" (click)="removeFevrt(menuItems.$key)"></ion-icon>\n    </span>\n    <span clear text-center *ngIf="!isLiked">\n        &nbsp;&nbsp;&nbsp;<ion-icon name="heart" class="fav heart-clicked" (click)="addToFevrt(menuItems.$key)"></ion-icon>\n    </span>\n\n    <span clear (click)="goToProductList()" text-center>\n        &nbsp;&nbsp;&nbsp;<ion-icon name="arrow-back" class="favv heart-clickedd" ></ion-icon>\n    </span>\n\n    \n   <ion-row class="center2">\n     <ion-col  col-10 col-xl-8 col-lg-8 col-md-10>\n            <ion-row>\n<ion-col col-3>\n        <span class="tittletop">\n            <br>\n           &nbsp;Xpress Gas\n        </span>\n<br>\n    <div>\n        &nbsp; {{menuItems.name}}\n    </div>\n</ion-col>\n        <ion-col col-6>\n           \n            <div class="count">\n              <span class="countt">Quantity: &nbsp; &nbsp;</span> &nbsp; \n              <br>\n              <br>\n                <span class="item-count" (click)="removeQuantity()">\n                    -\n                </span>\n                  <span class="item-count show-count">\n                    {{count}}\n                </span>\n                <span class="item-count" (click)="addQuantity()">\n                    +\n                    </span>\n            </div>\n\n        </ion-col>\n\n    </ion-row>\n\n    </ion-col>\n    </ion-row>\n\n\n\n    <!-- row-2 -->\n    <ion-row class="center2">\n     <ion-col  col-10 col-xl-8 col-lg-8 col-md-10>\n    <ion-list  radio-group class="size-list">\n        <ion-list-header class="size-list-header" >\n            {{"Description:" | translate}}\n        </ion-list-header>\n            <p  class="parama">\n            {{menuItems.meta}}\n            </p>\n        </ion-list>\n        <ion-list  radio-group class="size-list">\n        <ion-list-header class="size-list-header" >\n            {{"Price:" | translate}}\n        </ion-list-header>\n           <br>\n        <ion-item class="size-list-item">\n            <br>\n            <ion-label *ngIf="menuItems.specialPrice"> {{menuItems.pname}}\n              <p>  <span class="cutt">₦{{menuItems.value}}</span>\n                <span class="offer-p">₦{{menuItems.specialPrice |number:0}}</span>  </p>\n                <br>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n</ion-col>\n        </ion-row>\n\n\n</ion-content>\n\n<ion-footer>\n     <button block class="continue-btn" icon-left (click)="addToCart(menuItems)"> <ion-icon name="cart">\n     </ion-icon> Order Now</button>\n</ion-footer>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/product-details/product-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__pages_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=13.js.map