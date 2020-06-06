webpackJsonp([16],{

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function() { return OrderListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_list__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderListPageModule = /** @class */ (function () {
    function OrderListPageModule() {
    }
    OrderListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_list__["a" /* OrderListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_list__["a" /* OrderListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], OrderListPageModule);
    return OrderListPageModule;
}());

//# sourceMappingURL=order-list.module.js.map

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

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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






var OrderListPage = /** @class */ (function () {
    function OrderListPage(af, db, navCtrl, toastCtrl, loadingCtrl) {
        var _this = this;
        this.af = af;
        this.db = db;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ordersDetails = [];
        //distance and duration
        this.duration = '';
        this.points = [];
        this.marker = [];
        this.p1 = [];
        this.p2 = [];
        this.markerArray = [];
        this.currency = JSON.parse(localStorage.getItem('currency'));
        if (this.af.auth.currentUser) {
            var loader_1 = this.loadingCtrl.create({
                //  content: "Please wait..",
                spinner: "dots",
                cssClass: 'my-loading-class'
            });
            loader_1.present().then(function () {
                var userID = _this.af.auth.currentUser.uid;
                _this.db
                    .list("/orders", function (ref) { return ref.orderByChild("userId").equalTo(userID); })
                    .snapshotChanges()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
                    return changes.map(function (c) { return (__assign({ $key: c.payload.key }, c.payload.val())); });
                })).subscribe(function (res) {
                    _this.ordersDetails = res.sort(function (a, b) { return a.finished - b.finished; }).reverse();
                    _this.orderId = res.orderId;
                    console.log("order Detail" + JSON.stringify(_this.ordersDetails));
                });
                // .subscribe(
                //   (res: any) => {
                //     this.ordersDetails = [];
                //     res.forEach(item => {
                //       let temp = item.payload.val();
                //       temp["$key"] = item.payload.key;
                //       this.ordersDetails.push(temp);
                //       // console.log("orders-" + JSON.stringify(this.ordersDetails));
                //     });
                loader_1.dismiss();
            }, function (error) {
                console.error(error);
                loader_1.dismiss();
            });
        }
    }
    OrderListPage.prototype.ionViewWillEnter = function () {
        var cart = JSON.parse(localStorage.getItem("Cart"));
        this.noOfItems = cart != null ? cart.length : null;
    };
    OrderListPage.prototype.isOrders = function () {
        return this.ordersDetails.length == 0 ? false : true;
    };
    OrderListPage.prototype.orders = function (orderId) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("track/" + orderId + "/").once("value", function (snapshot) {
            if (snapshot.exists()) {
                _this.navCtrl.push("TrackPage", {
                    orderId: orderId
                });
                loader.dismiss();
            }
            else {
                loader.dismiss();
                _this.createToaster("Order has not been processed for delivery or has already been delivered.", 5000);
            }
        });
    };
    OrderListPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    OrderListPage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    OrderListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-list',template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/order-list/order-list.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{"Orders" | translate}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="navcart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div *ngIf="!isOrders()">\n        <div class="empty-list">\n            <ion-icon class="empty-cart" name="timer" item-left></ion-icon>\n            <h4>{{"No Orders" | translate}} </h4>\n        </div>\n\n    </div>\n    <div *ngFor="let order of ordersDetails">\n        <ion-card class="orders-item" (click)="orders(order.orderId)">\n            <h5>Order ID: <strong>{{order.orderId}}</strong></h5>\n            <ion-row>\n                <ion-col col-6 no-padding>\n                    <p class="item-name">Total Amount: <br><strong>₦ {{order.subTotal | number:\'.2-2\'}}</strong></p>\n                </ion-col>\n                <ion-col col-6 no-padding>\n                  <h6 class="item-name">Order Name: <strong>\n                            {{order.ntitle}}</strong></h6>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-6 no-padding>\n                    <p class="status">Quantity: {{order.nqty}} <br> Order Status: <strong>{{order.status}}</strong> <br> Payment: <strong>{{order.paymentStatus}}</strong></p>\n                </ion-col>\n                <ion-col col-6 no-padding>\n                      <h6 class="item-name">Ordered Date: <strong>{{order.createdAt | date}}</strong></h6>\n                      <br>\n                  <!---  <button class="btn" color="danger" small block> <ion-icon name="analytics"></ion-icon> &nbsp; Order Details</button>  --->\n                  <button class="btn" color="danger" small block> <ion-icon name="map"></ion-icon> &nbsp; Track Order</button>\n                   <br>\n                </ion-col>\n\n            </ion-row>\n        </ion-card>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/order-list/order-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], OrderListPage);
    return OrderListPage;
}());

//# sourceMappingURL=order-list.js.map

/***/ })

});
//# sourceMappingURL=16.js.map