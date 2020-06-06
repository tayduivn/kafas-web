webpackJsonp([14],{

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]), __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

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

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersPage = /** @class */ (function () {
    function OrdersPage(navParams, af, db, navCtrl, loadingCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.af = af;
        this.db = db;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ordersDetails = [];
        this.order = {};
        this.orderId = this.navParams.get("orderId");
        this.key = this.navParams.get('orderKey');
        console.log("orderID", this.orderId);
        this.currency = JSON.parse(localStorage.getItem('currency'));
        if (this.af.auth.currentUser) {
            var loader_1 = this.loadingCtrl.create({
                //  content: "Please wait..",
                spinner: "dots",
                cssClass: 'my-loading-class'
            });
            loader_1.present();
            this.db.object("/orders/" + this.orderId)
                .valueChanges()
                .subscribe(function (res) {
                _this.order = res;
                //    console.log("details--" + JSON.stringify(this.ordersDetails));
                loader_1.dismiss();
            });
        }
    }
    OrdersPage.prototype.ionViewWillEnter = function () {
        var cart = JSON.parse(localStorage.getItem("Cart"));
        this.noOfItems = cart != null ? cart.length : null;
    };
    OrdersPage.prototype.orderDetails = function (index, key) {
        this.navCtrl.push("OrderDetailsPage", {
            index: index,
            orderId: this.orderId,
            orderKey: this.key
        });
    };
    OrdersPage.prototype.orderStatus = function () {
        this.navCtrl.push("OrderStatusPage", {
            orderId: this.orderId,
        });
    };
    OrdersPage.prototype.isOrders = function () {
        return this.ordersDetails.length == 0 ? false : true;
    };
    OrdersPage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-orders",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/orders/orders.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{"Orders" | translate}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="navcart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div>\n        <ion-list class="orders-list">\n            <ion-card class="orders-item" >\n                <ion-row>\n                    <!-- <ion-row *ngFor="let item of order ; let i =index "> -->\n                        <ion-col col-4>\n                            <img src="{{order.thumb}}" alt="">\n                        </ion-col>\n                        <ion-col col-5>\n                            <br>\n                            <br>\n                            <p class="item-name">\n                                <strong>{{order.ntitle}}</strong>\n                            </p>\n                            <p class="item-price">Price: <strong>₦ {{order.grandTotal  | number:\'.2-2\'}}</strong></p>\n                            <p class="item-pricing">Qty: {{order.nqty}}</p>\n                        </ion-col>\n                        <ion-col col-3>\n                            <br>\n                            <br>\n                            <button class="btn-view" color="primary" (click)="orderDetails(i)">\n                             <!---   <ion-icon name="eye"></ion-icon> --> {{"View" | translate}}\n                            </button>\n                            <button class="btn-view" color="primary" (click)="orderStatus()">\n                              <!---  <ion-icon name="stats"></ion-icon> -->{{"Status" | translate}}\n                            </button>\n                        </ion-col>\n                    <!-- </ion-row> -->\n                </ion-row>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/orders/orders.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=14.js.map