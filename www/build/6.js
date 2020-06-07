webpackJsonp([6],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]), __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

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

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_service__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_braintree__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__paystack_paystack__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {
//   PayPal,
//   PayPalPayment,
//   PayPalConfiguration
// } from "@ionic-native/paypal";




// const payPalEnvironmentSandbox = "AcgkbqWGamMa09V5xrhVC8bNP0ec9c37DEcT0rXuh7hqaZ6EyHdGyY4FCwQC-fII-s5p8FL0RL8rWPRB";
var publishableKey = "pk_test_mhy46cSOzzKYuB2MuTWuUb34";
var stripe_secret_key = "sk_test_GsisHcPqciYyG8arVfVe2amE";
// const merchantId = "bbn2tzfk3zbq2jqr";
// const public_key = "d2qg75y3q8zb8rff";
// const private_key = "9cc7ba1d73b912d74e5bb197b24ef6d0";
var braintree_token = "sandbox_3tt6pwn3_bbn2tzfk3zbq2jqr";
// const braintree_token = "sandbox$4gv8zndgpdy6gnvt$e3c0c77402cbf5ba88bc4c76f1f85dc9";
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(af, db, navCtrl, navParams, 
    // public payPal: PayPal,
    stripe, braintree, checkoutService, loadingCtrl, alertCtrl) {
        this.af = af;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stripe = stripe;
        this.braintree = braintree;
        this.checkoutService = checkoutService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.order = {};
        this.loyaltyLimit = 0;
        this.userDetails = {
            email: "",
            name: "",
            userid: ""
        };
        this.paymentDetails = {
            paymentStatus: true
        };
        this.stripe_card = {};
        this.paymentTypes = [
            { default: false, type: "Cash on Delivery", value: "COD", logo: "assets/img/cod.png" },
            {
                default: false,
                type: "Paystack",
                value: "Paystack",
                logo: "assets/img/pay2.png"
            },
            {
                default: false,
                type: "Mobile Wallet",
                value: "Wallet",
                logo: "assets/img/card.png"
            }
        ];
        this.order = this.navParams.get("orderDetails");
        this.loyaltyLimit = this.navParams.get("loyaltyLimit");
        this.str = "#";
        var num = Math.floor(Math.random() * 900000) + 100000;
        this.color = this.str.concat(num);
        this.checkout = db.list("/orders");
        this.payTotal = this.navParams.get('payTotal');
        this.chargeAmount = this.payTotal;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.paymentType = "Braintree";
        if (this.af.auth.currentUser) {
            this.userId = this.af.auth.currentUser.uid;
            this.userDetail = this.db.object("/users/" + this.userId);
            this.userDetail.valueChanges().subscribe(function (res) {
                res.mobileNo
                    ? (_this.userDetails = {
                        email: res.email,
                        name: res.name,
                        mobileNo: res.mobileNo,
                        userid: _this.userId
                    })
                    : (_this.userDetails = {
                        email: res.email,
                        name: res.name,
                        userid: _this.userId
                    });
            });
        }
    };
    CheckoutPage.prototype.choosePaymentType = function (paymentType) {
        this.paymentType = paymentType;
        this.order.paymentType = paymentType;
        this.paymentDetails.paymentType = paymentType;
    };
    // paywithBraintree() {
    //   const paymentOptions: PaymentUIOptions = {
    //     amount: "14.99",
    //     primaryDescription: "brain tree payment"
    //   };
    //   this.braintree
    //     .initialize(braintree_token)
    //     // .then(() => this.braintree.setupApplePay(appleOptions))
    //     .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
    //     .then((result: any) => {
    //       if (result.userCancelled) {
    //         console.log("User cancelled payment dialog.");
    //       } else {
    //         console.log("User successfully completed payment!");
    //         console.log("Payment Nonce: " + JSON.stringify(result.nonce));
    //         console.log("Payment Result.", JSON.stringify(result));
    //       }
    //     })
    //     .catch((error: string) => console.log("Error- " + JSON.stringify(error)));
    // }
    CheckoutPage.prototype.onCheckOut = function (form) {
        var _this = this;
        this.order.orderId = Math.floor(Math.random() * 90000) + 10000;
        // this.order.userDetails = this.userDetails;
        this.order.userId = this.userId;
        this.order.createdAt = Date.now();
        this.order.status = "Pending";
        this.order.paymentStatus = "Pending";
        this.order.note = "Your order is being Processed.";
        this.order.ntime = Date.now();
        delete this.order.shippingAddress;
        // this.order.statusReading = [
        //   {
        //     title: "Your order has been accepted. You will get notified the status here.",
        //     time: Date.now()
        //   }
        // ];
        //new data
        if (this.paymentType == "Paystack") {
            if (this.order.appliedLoyaltyPoints == true) {
                this.showAlert("You have selected the option to pay from wallet! Complete your order by selecting 'Mobile Wallet' and 'Proceed'");
                // const config = {
                //   PayPalEnvironmentProduction: "",
                //   PayPalEnvironmentSandbox: payPalEnvironmentSandbox
                // };
                //     this.checkout.push(this.order).then(res => {
                //       const paymentOptions: PaymentUIOptions = {
                //         amount: this.order.grandTotal,
                //        primaryDescription: "brain tree payment"
                //       };
                //      this.braintree.initialize(braintree_token)
                //        .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
                //        .then((result: any) => {
                //       if (result.userCancelled) {
                //          console.log("User cancelled payment dialog.");
                //        } else {
                //          this.paymentDetails.transactionId = result.clientMetadataId;
                //         this.saveLoyaltyData(res.key);
                //           this.db.object("/orders/" + res.key).update({
                //             paymentDetails: this.paymentDetails,
                //            paymentStatus: "success"
                //        }).then(() => {
                //          this.navCtrl.setRoot("ThankyouPage");
                //         });
                //       }
                //     }).catch((error: any) => {
                //         if (error.message) {
                //       this.showAlert(error.message);
                //       }
                //       });
                //    });
            }
            else {
                var loader_1 = this.loadingCtrl.create({
                    content: "please wait.."
                });
                loader_1.present();
                this.checkout.push(this.order).then(function (res) {
                    console.log("order placed ! " + JSON.stringify(res));
                    _this.saveLoyaltyData(res.key);
                    var data = {
                        price: _this.order.grandTotal,
                        email: _this.userDetails.email,
                        key: res.key
                    };
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__paystack_paystack__["a" /* PaystackPage */], data);
                    loader_1.dismiss();
                });
            }
        }
        else if (this.paymentType == "Mobile Wallet") {
            if (this.order.appliedLoyaltyPoints == true) {
                var loader_2 = this.loadingCtrl.create({
                    //  content: "Please wait..",
                    spinner: "dots",
                    cssClass: 'my-loading-class'
                });
                loader_2.present();
                this.checkout.push(this.order).then(function (res) {
                    console.log("order placed ! " + JSON.stringify(res));
                    _this.saveLoyaltyData(res.key);
                    _this.db.object("/orders/" + res.key).update({
                        paymentStatus: "Approved"
                    });
                    _this.navCtrl.setRoot("ThankyouPage");
                    loader_2.dismiss();
                });
            }
            else {
                this.showAlert("You have not selected the option to pay from wallet! Please go back and select 'Pay from Wallet'");
            }
            //order with COD
        }
        else if (this.paymentType == "Cash on Delivery") {
            if (this.order.appliedLoyaltyPoints == true) {
                this.showAlert("You have selected the option to pay from wallet! Complete your order by selecting 'Mobile Wallet' and 'Proceed'");
            }
            else {
                var loader_3 = this.loadingCtrl.create({
                    //  content: "Please wait..",
                    spinner: "dots",
                    cssClass: 'my-loading-class'
                });
                loader_3.present();
                this.checkout.push(this.order).then(function (res) {
                    console.log("order placed ! " + JSON.stringify(res));
                    _this.saveLoyaltyData(res.key);
                    _this.navCtrl.setRoot("ThankyouPage");
                    loader_3.dismiss();
                });
            }
        }
    };
    CheckoutPage.prototype.saveLoyaltyData = function (orderId) {
        if (this.order.appliedLoyaltyPoints == true) {
            var loayltyObj = {
                credit: "Debit",
                points: -Number(this.payTotal),
                orderId: orderId,
                message: "Approved",
                createdAt: Date.now()
            };
            this.db.list("users/" + this.userId + "/loyaltyPoints").push(loayltyObj);
            this.db.list("/orders/" + orderId + "/loyaltyPoints")
                .push(loayltyObj).then(function (result) {
                // console.log("loyaltyUpdated-" + result);
            });
        }
        else {
            console.log("loyalaty Not applied!!");
        }
    };
    CheckoutPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ["OK"]
        });
        alert.present();
    };
    CheckoutPage.prototype.contact = function () {
        this.navCtrl.push("ContactPage");
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-checkout",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/checkout/checkout.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title">{{"Payment" |translate}}\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="contact()" class="header-btn-cart">\n                <ion-icon name="call"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n   <ion-row class="center2">\n     <ion-col  col-10 col-xl-8 col-lg-8 col-md-10>\n    <ion-list radio-group class="radio-list">\n\n    <br>\n    <br>\n     <!---  <p class="card-title">Payment Options</p> --> \n        <ion-list radio-group>\n            <ion-row class="card-type">\n                <ion-col col-12 *ngFor=" let payment of paymentTypes">\n                    <ion-item class="radio-item">\n                        <ion-label>{{payment.type}}</ion-label>\n                        <ion-radio item-left value="{{payment.value}}" checked={{payment.default}} (ionSelect)="choosePaymentType(payment.type)"></ion-radio>\n                        <img *ngIf="payment.logo" src="{{payment.logo}}" item-right>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n\n\n\n    <!----    <h6 class="form-title"></h6>\n        <section class="payment" *ngIf="paymentType ==\'Stripe\'">\n            <form #f="ngForm">\n                <ion-list class="form-data">\n                    <ion-item>\n                        <ion-input type="number" name="cardNumber" id="cardNumber" placeholder="Card Number" [(ngModel)]=stripe_card.cardNumber required></ion-input>\n                        <ion-icon name="card" item-right></ion-icon>\n                    </ion-item>\n\n                    <ion-row class="form-half">\n                        <ion-col col-2>\n                            <ion-item>\n                                <ion-input type="number" name="month" id="month" placeholder="MM" [(ngModel)]=stripe_card.expiryMonth required></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-input type="number" name="year" id="year" placeholder="YYYY" [(ngModel)]=stripe_card.expiryYear required></ion-input>\n                                <ion-icon name="calendar" item-right></ion-icon>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6>\n                            <ion-item class="right">\n                                <ion-input type="number" name="cvv" id="cvv" placeholder="Card Code" [(ngModel)]=stripe_card.cvc required></ion-input>\n                                <ion-icon name="code" item-right></ion-icon>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-item>\n                        <ion-input type="text" name="cardName" id="cardName" placeholder="Card Holder Number" required></ion-input>\n                        <ion-icon name="person" item-right></ion-icon>\n                    </ion-item>\n                </ion-list>\n            </form>\n        </section>  -->\n\n\n        <div class="btn-wrapper">\n            <ion-row>\n\n                <ion-col col-3>\n                </ion-col>\n                <ion-col col-6>\n            <button full class="button" type="button" [disabled]="paymentType ==\'Stripe\' && (!stripe_card.cardNumber || !stripe_card.expiryMonth || !stripe_card.expiryYear || !stripe_card.cvc)"\n                (click)="onCheckOut()">Proceed\n            </button>\n        </ion-col>\n        <ion-col col-3>\n        </ion-col>\n    </ion-row>\n        </div>\n    </ion-list>\n\n</ion-col>\n\n</ion-row>\n\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/checkout/checkout.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_braintree__["a" /* Braintree */], __WEBPACK_IMPORTED_MODULE_5__checkout_service__["a" /* CheckoutService */]] //, PayPal, 
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_stripe__["a" /* Stripe */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_braintree__["a" /* Braintree */],
            __WEBPACK_IMPORTED_MODULE_5__checkout_service__["a" /* CheckoutService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stripe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(27);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Stripe
 * @description
 * A plugin that allows you to use Stripe's Native SDKs for Android and iOS.
 *
 * @usage
 * ```typescript
 * import { Stripe } from '@ionic-native/stripe';
 *
 * constructor(private stripe: Stripe) { }
 *
 * ...
 *
 * this.stripe.setPublishableKey('my_publishable_key');
 *
 * let card = {
 *  number: '4242424242424242',
 *  expMonth: 12,
 *  expYear: 2020,
 *  cvc: '220'
 * };
 *
 * this.stripe.createCardToken(card)
 *    .then(token => console.log(token))
 *    .catch(error => console.error(error));
 *
 * ```
 *
 * @interfaces
 * StripeCardTokenParams
 */
var Stripe = (function (_super) {
    __extends(Stripe, _super);
    function Stripe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set publishable key
     * @param publishableKey {string} Publishable key
     * @return {Promise<void>}
     */
    Stripe.prototype.setPublishableKey = function (publishableKey) { return; };
    /**
     * Create Credit Card Token
     * @param params {StripeCardTokenParams} Credit card information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    Stripe.prototype.createCardToken = function (params) { return; };
    /**
     * Create a bank account token
     * @param params {StripeBankAccountParams} Bank account information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    Stripe.prototype.createBankAccountToken = function (params) { return; };
    /**
     * Validates a credit card number
     * @param cardNumber {string} Credit card number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateCardNumber = function (cardNumber) { return; };
    /**
     * Validates a CVC number
     * @param cvc {string} CVC number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateCVC = function (cvc) { return; };
    /**
     * Validates an expiry date
     * @param expMonth {string} expiry month
     * @param expYear {string} expiry year
     * @return {Promise<any>} returns a promise that resolves if the date is valid, and rejects if it's invalid
     */
    Stripe.prototype.validateExpiryDate = function (expMonth, expYear) { return; };
    /**
     * Get a card type from card number
     * @param cardNumber {string} Card number
     * @return {Promise<string>} returns a promise that resolves with the credit card type
     */
    Stripe.prototype.getCardType = function (cardNumber) { return; };
    return Stripe;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));
Stripe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
Stripe.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "setPublishableKey", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "createCardToken", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "createBankAccountToken", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "validateCardNumber", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "validateCVC", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "validateExpiryDate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Stripe.prototype, "getCardType", null);
Stripe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
        pluginName: 'Stripe',
        plugin: 'cordova-plugin-stripe',
        pluginRef: 'cordova.plugins.stripe',
        repo: 'https://github.com/zyramedia/cordova-plugin-stripe',
        platforms: ['Android', 'Browser', 'iOS']
    })
], Stripe);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutService = /** @class */ (function () {
    function CheckoutService(http) {
        this.http = http;
    }
    CheckoutService.prototype.chargeStripe = function (token, currency, amount, stripe_secret_key) {
        var _this = this;
        var secret_key = stripe_secret_key;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/x-www-form-urlencoded")
            .set("Authorization", "Bearer " + secret_key);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set("currency", currency)
            .set("amount", amount)
            .set("description", "description")
            .set("source", token);
        return new Promise(function (resolve) {
            _this.http
                .post("https://api.stripe.com/v1/charges", params, {
                headers: headers
            })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout.service.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Braintree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(27);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Braintree
 * @description
 * This plugin enables the use of the Braintree Drop-In Payments UI in your Ionic applications on Android and iOS, using the native Drop-In UI for each platform (not the Javascript SDK).
 *
 *  Ionic Native utilizes [a maintained fork](https://github.com/taracque/cordova-plugin-braintree) of the original `cordova-plugin-braintree`
 *
 *  For information on how to use Apple Pay with this plugin, please refer to the [plugin documentation](https://github.com/Taracque/cordova-plugin-braintree#apple-pay-ios-only)
 *
 * **NOTE**: This is not a complete payments solution. All of the Braintree client-side UIs simply generate a payment nonce that must then be processed by your server to complete the payment.
 * See the [Braintree Node server documentation](https://developers.braintreepayments.com/start/hello-server/node) for details and a [sample Express server](https://github.com/braintree/braintree_express_example) that implements the required functionality.
 *
 * @usage
 * ```typescript
 * import { Braintree, ApplePayOptions, PaymentUIOptions } from '@ionic-native/braintree';
 *
 * constructor(private braintree: Braintree) { }
 *
 * ...
 *
 * // Your Braintree `Tokenization Key` from the Braintree dashboard.
 * // Alternatively you can also generate this token server-side
 * // using a client ID in order to allow users to use stored payment methods.
 * // See the [Braintree Client Token documentation](https://developers.braintreepayments.com/reference/request/client-token/generate/node#customer_id) for details.
 * const BRAINTREE_TOKEN = '<YOUR_BRAINTREE_TOKEN>';
 *
 * // NOTE: Do not provide this unless you have configured your Apple Developer account
 * // as well as your Braintree merchant account, otherwise the Braintree module will fail.
 * const appleOptions: ApplePayOptions = {
 *   merchantId: '<YOUR MERCHANT ID>',
 *   currency: 'USD',
 *   country: 'US'
 * };
 *
 * const paymentOptions: PaymentUIOptions = {
 *   amount: '14.99',
 *   primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
 * };
 *
 * this.braintree.initialize(BRAINTREE_TOKEN)
 *   .then(() => this.braintree.setupApplePay(appleOptions))
 *   .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
 *   .then((result: PaymentUIResult) => {
 *     if (result.userCancelled) {
 *       console.log("User cancelled payment dialog.");
 *     } else {
 *       console.log("User successfully completed payment!");
 *       console.log("Payment Nonce: " + result.nonce);
 *       console.log("Payment Result.", result);
 *     }
 *   })
 *   .catch((error: string) => console.error(error));
 *
 * ```
 *
 * @interfaces
 * ApplePayOptions
 * PaymentUIOptions
 * PaymentUIResult
 */
var Braintree = (function (_super) {
    __extends(Braintree, _super);
    function Braintree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Used to initialize the Braintree client. This function must be called before other methods can be used.
     *  As the initialize code is async, be sure you call all Braintree related methods after the initialize promise has resolved.
     *
     * @param {string} token The client token or tokenization key to use with the Braintree client.
     * @return {Promise<undefined | string>} Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
     */
    /**
       * Used to initialize the Braintree client. This function must be called before other methods can be used.
       *  As the initialize code is async, be sure you call all Braintree related methods after the initialize promise has resolved.
       *
       * @param {string} token The client token or tokenization key to use with the Braintree client.
       * @return {Promise<undefined | string>} Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
       */
    Braintree.prototype.initialize = /**
       * Used to initialize the Braintree client. This function must be called before other methods can be used.
       *  As the initialize code is async, be sure you call all Braintree related methods after the initialize promise has resolved.
       *
       * @param {string} token The client token or tokenization key to use with the Braintree client.
       * @return {Promise<undefined | string>} Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
       */
    function (token) {
        return;
    };
    /**
     * Used to configure Apple Pay on iOS.
     *  In order for Apple Pay payments to appear on the Drop-In Payments UI, you must initialize the Apple Pay framework before using the Drop-In Payments UI.
     *
     *  Do not turn on Apple Pay in Braintree if you don't have Apple Pay entitlements - the Braintree module will reject the attempt to set up Apple Pay.
     *  Please refer to the [Braintree Merchant Documentation](https://developers.braintreepayments.com/guides/apple-pay/configuration/ios/v4#apple-pay-certificate-request-and-provisioning) to set up a Merchant Account.
     *
     *  Calling this function on Android is a `noop` so you can call it without having to check which cordova platform you are on! :D
     *
     * @param {ApplePayOptions}options The options used to configure Apple Pay.
     * @return {Promise<undefined | string>} Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
     */
    /**
       * Used to configure Apple Pay on iOS.
       *  In order for Apple Pay payments to appear on the Drop-In Payments UI, you must initialize the Apple Pay framework before using the Drop-In Payments UI.
       *
       *  Do not turn on Apple Pay in Braintree if you don't have Apple Pay entitlements - the Braintree module will reject the attempt to set up Apple Pay.
       *  Please refer to the [Braintree Merchant Documentation](https://developers.braintreepayments.com/guides/apple-pay/configuration/ios/v4#apple-pay-certificate-request-and-provisioning) to set up a Merchant Account.
       *
       *  Calling this function on Android is a `noop` so you can call it without having to check which cordova platform you are on! :D
       *
       * @param {ApplePayOptions}options The options used to configure Apple Pay.
       * @return {Promise<undefined | string>} Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
       */
    Braintree.prototype.setupApplePay = /**
       * Used to configure Apple Pay on iOS.
       *  In order for Apple Pay payments to appear on the Drop-In Payments UI, you must initialize the Apple Pay framework before using the Drop-In Payments UI.
       *
       *  Do not turn on Apple Pay in Braintree if you don't have Apple Pay entitlements - the Braintree module will reject the attempt to set up Apple Pay.
       *  Please refer to the [Braintree Merchant Documentation](https://developers.braintreepayments.com/guides/apple-pay/configuration/ios/v4#apple-pay-certificate-request-and-provisioning) to set up a Merchant Account.
       *
       *  Calling this function on Android is a `noop` so you can call it without having to check which cordova platform you are on! :D
       *
       * @param {ApplePayOptions}options The options used to configure Apple Pay.
       * @return {Promise<undefined | string>} Returns a promise that resolves with undefined on successful initialization, or rejects with a string message describing the failure.
       */
    function (options) {
        return;
    };
    /**
     * Shows Braintree's Drop-In Payments UI.
     *  Apple Pay is only shown in the Drop In UI if you have previously called `setupApplePay`.
     *
     * @param options {PaymentUIOptions} An optional argument used to configure the payment UI; see type definition for parameters. If not provided, the UI will show "0.00" as the price and an empty description.
     * @return {Promise<PaymentUIResult | string>} Returns a promise that resolves with a PaymentUIResult object on successful payment (or the user cancels), or rejects with a string message describing the failure.
     */
    /**
       * Shows Braintree's Drop-In Payments UI.
       *  Apple Pay is only shown in the Drop In UI if you have previously called `setupApplePay`.
       *
       * @param options {PaymentUIOptions} An optional argument used to configure the payment UI; see type definition for parameters. If not provided, the UI will show "0.00" as the price and an empty description.
       * @return {Promise<PaymentUIResult | string>} Returns a promise that resolves with a PaymentUIResult object on successful payment (or the user cancels), or rejects with a string message describing the failure.
       */
    Braintree.prototype.presentDropInPaymentUI = /**
       * Shows Braintree's Drop-In Payments UI.
       *  Apple Pay is only shown in the Drop In UI if you have previously called `setupApplePay`.
       *
       * @param options {PaymentUIOptions} An optional argument used to configure the payment UI; see type definition for parameters. If not provided, the UI will show "0.00" as the price and an empty description.
       * @return {Promise<PaymentUIResult | string>} Returns a promise that resolves with a PaymentUIResult object on successful payment (or the user cancels), or rejects with a string message describing the failure.
       */
    function (options) {
        return;
    };
    Braintree.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Braintree.prototype, "initialize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Braintree.prototype, "setupApplePay", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android', 'iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Braintree.prototype, "presentDropInPaymentUI", null);
    /**
     * @name Braintree
     * @description
     * This plugin enables the use of the Braintree Drop-In Payments UI in your Ionic applications on Android and iOS, using the native Drop-In UI for each platform (not the Javascript SDK).
     *
     *  Ionic Native utilizes [a maintained fork](https://github.com/taracque/cordova-plugin-braintree) of the original `cordova-plugin-braintree`
     *
     *  For information on how to use Apple Pay with this plugin, please refer to the [plugin documentation](https://github.com/Taracque/cordova-plugin-braintree#apple-pay-ios-only)
     *
     * **NOTE**: This is not a complete payments solution. All of the Braintree client-side UIs simply generate a payment nonce that must then be processed by your server to complete the payment.
     * See the [Braintree Node server documentation](https://developers.braintreepayments.com/start/hello-server/node) for details and a [sample Express server](https://github.com/braintree/braintree_express_example) that implements the required functionality.
     *
     * @usage
     * ```typescript
     * import { Braintree, ApplePayOptions, PaymentUIOptions } from '@ionic-native/braintree';
     *
     * constructor(private braintree: Braintree) { }
     *
     * ...
     *
     * // Your Braintree `Tokenization Key` from the Braintree dashboard.
     * // Alternatively you can also generate this token server-side
     * // using a client ID in order to allow users to use stored payment methods.
     * // See the [Braintree Client Token documentation](https://developers.braintreepayments.com/reference/request/client-token/generate/node#customer_id) for details.
     * const BRAINTREE_TOKEN = '<YOUR_BRAINTREE_TOKEN>';
     *
     * // NOTE: Do not provide this unless you have configured your Apple Developer account
     * // as well as your Braintree merchant account, otherwise the Braintree module will fail.
     * const appleOptions: ApplePayOptions = {
     *   merchantId: '<YOUR MERCHANT ID>',
     *   currency: 'USD',
     *   country: 'US'
     * };
     *
     * const paymentOptions: PaymentUIOptions = {
     *   amount: '14.99',
     *   primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
     * };
     *
     * this.braintree.initialize(BRAINTREE_TOKEN)
     *   .then(() => this.braintree.setupApplePay(appleOptions))
     *   .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
     *   .then((result: PaymentUIResult) => {
     *     if (result.userCancelled) {
     *       console.log("User cancelled payment dialog.");
     *     } else {
     *       console.log("User successfully completed payment!");
     *       console.log("Payment Nonce: " + result.nonce);
     *       console.log("Payment Result.", result);
     *     }
     *   })
     *   .catch((error: string) => console.error(error));
     *
     * ```
     *
     * @interfaces
     * ApplePayOptions
     * PaymentUIOptions
     * PaymentUIResult
     */
    Braintree = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Braintree',
            plugin: 'cordova-plugin-braintree',
            pluginRef: 'BraintreePlugin',
            repo: 'https://github.com/taracque/cordova-plugin-braintree',
            platforms: ['Android', 'iOS'],
            install: 'ionic cordova plugin add https://github.com/taracque/cordova-plugin-braintree',
            installVariables: []
        })
    ], Braintree);
    return Braintree;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=6.js.map