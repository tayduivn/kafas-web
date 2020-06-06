webpackJsonp([23],{

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_address__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddAddressPageModule = /** @class */ (function () {
    function AddAddressPageModule() {
    }
    AddAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */]), __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_address__["a" /* AddAddressPage */]]
        })
    ], AddAddressPageModule);
    return AddAddressPageModule;
}());

//# sourceMappingURL=add-address.module.js.map

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

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
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





var AddAddressPage = /** @class */ (function () {
    function AddAddressPage(af, actionSheetCtrl, db, navCtrl, navParams) {
        this.af = af;
        this.actionSheetCtrl = actionSheetCtrl;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.address = {};
    }
    AddAddressPage.prototype.addAddress = function (form) {
        var _this = this;
        if (this.af.auth.currentUser) {
            this.db
                .list("/users/" + this.af.auth.currentUser.uid + "/address")
                .push(this.address)
                .then(function (res) {
                var id = _this.navParams.get("id");
                if (id == 1) {
                    _this.navCtrl.push("UserAddressListPage");
                }
                else {
                    _this.navCtrl.pop();
                }
            });
        }
    };
    AddAddressPage.prototype.addressMenu = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            //   title: 'Modify your album',
            cssClass: 'myPage',
            buttons: [
                {
                    text: 'Manage Address',
                    role: 'destructive',
                    cssClass: 'textSize',
                    handler: function () {
                        _this.navCtrl.push("AddressPage");
                    }
                }, {
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
    AddAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-add-address",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/add-address/add-address.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{"Add Address" | translate}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="addressMenu()" class="header-btn-cart">\n                <ion-icon name="list"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content class="amount-block">\n\n    <ion-list class="adress-line ">\n        <form (ngSubmit)="addAddress(f)" #f="ngForm">\n            <ion-label class="add-heading">\n                <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n                &nbsp;&nbsp; {{"Add Contact Information" | translate}}\n            </ion-label>\n            <ion-row class="full-address">\n                <ion-item class="label">\n                    <ion-input type="text" placeholder="{{\'Contact Name\' | translate}}" name="name" id="name" [(ngModel)]="address.name" required></ion-input>\n                </ion-item>\n                <ion-item class="label">\n                    <ion-input type="number" name="mobileNo" id="mobileNo" [(ngModel)]="address.mobileNo" placeholder="{{\'Mobile\' | translate}}" required></ion-input>\n                </ion-item>\n             \n                <ion-label class="adhd">\n                <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                &nbsp;&nbsp; {{"Add Address" | translate}}\n            </ion-label>\n                \n               \n                <ion-item class="label address-textarea">\n                    <ion-textarea rows="6" placeholder="{{\'Full Address\' | translate}}" name="address" id="address" [(ngModel)]="address.address"\n                        required></ion-textarea>\n                </ion-item>\n\n                <ion-item class="label">\n                    <ion-input type="text" name="area" id="area" placeholder="{{\'Area / Locality\' | translate}}" [(ngModel)]="address.area"></ion-input>\n                </ion-item>\n\n                <ion-item class="label">\n                    <ion-input type="text" placeholder="{{\'City / State\' | translate}}" name="city" id="city" [(ngModel)]="address.city" required></ion-input>\n                </ion-item>\n                <ion-item class="label">\n                    <ion-input type="number" placeholder="{{\'Postal Code\' | translate}}" name="pincode" id="pincode" [(ngModel)]="address.pincode"\n                        required></ion-input>\n                    </ion-item>\n\n            </ion-row>\n            <button class="checkOut-btn"  block type="submit">\n                <ion-icon class="addbt" ios="ios-add" md="md-add"></ion-icon>\n                &nbsp;&nbsp;<span class="addbt">{{"Add Address" | translate}}\n                </span>\n                </button>\n        </form>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/add-address/add-address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddAddressPage);
    return AddAddressPage;
}());

//# sourceMappingURL=add-address.js.map

/***/ })

});
//# sourceMappingURL=23.js.map