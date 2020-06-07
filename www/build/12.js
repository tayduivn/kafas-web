webpackJsonp([12],{

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]), __WEBPACK_IMPORTED_MODULE_3__app_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());

//# sourceMappingURL=registration.module.js.map

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

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_autocomplete_autocomplete__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, events, fb, af, db, loadingCtrl, alertCtrl, platform, viewCtrl, zone, actionSheetCtrl, modalCtrl, toastCtrl, plt, nativeGeocoder, geolocation, storage, navParams) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.fb = fb;
        this.af = af;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.storage = storage;
        this.navParams = navParams;
        this.isActiveToggleTextPassword = true;
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    RegistrationPage.prototype.toggleTextPassword = function () {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
    };
    RegistrationPage.prototype.getType = function () {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    };
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    RegistrationPage.prototype.onSubmit = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        this.loading.present();
        this.af.auth.createUserWithEmailAndPassword(this.registration.value.email, this.registration.value.password)
            .then(function (success) {
            var uid = _this.af.auth.currentUser.uid;
            localStorage.setItem("name", _this.registration.value.firstName + " " + _this.registration.value.lastName);
            _this.db.object("/users/" + uid).update({
                firstName: _this.registration.value.firstName,
                lastName: _this.registration.value.lastName,
                name: _this.registration.value.firstName + " " + _this.registration.value.lastName,
                email: _this.registration.value.email,
                mobileNo: _this.registration.value.mobileNo,
                location: _this.address,
                role: "User",
                uid: uid
            });
            _this.db.object("/address/" + uid).update({
                firstName: _this.registration.value.firstName,
                lastName: _this.registration.value.lastName,
                name: _this.registration.value.firstName + " " + _this.registration.value.lastName,
                email: _this.registration.value.email,
                mobileNo: _this.registration.value.mobileNo,
                location: _this.address,
                uid: uid
            });
            localStorage.setItem("uid", success.uid);
            localStorage.setItem("email", _this.registration.value.email);
            localStorage.setItem("firstName", _this.registration.value.firstName);
            localStorage.setItem("lastName", _this.registration.value.lastName);
            var user = __WEBPACK_IMPORTED_MODULE_9_firebase_app__["auth"]().currentUser;
            user.sendEmailVerification();
            _this.loading.dismiss();
            _this.showAlert2("A verification email has been sent to " + _this.registration.value.email + " Please go to link in the email to verify your account. Link valid for 24 hours.");
            // this.navCtrl.setRoot("TabPage");
        }).catch(function (error) {
            _this.loading.dismiss();
            console.log("Firebase failure: " + JSON.stringify(error));
            _this.showAlert(error.message);
        });
    };
    RegistrationPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ["OK"]
        });
        alert.present();
    };
    RegistrationPage.prototype.showAlert2 = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.af.auth.signOut();
                        _this.navCtrl.setRoot("LoginPage");
                    }
                }
            ]
        });
        alert.present();
    };
    RegistrationPage.prototype.navLogin = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    RegistrationPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    //Validation
    RegistrationPage.prototype.buildForm = function () {
        this.registration = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mobileNo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$")
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(24)
            ])
        });
    };
    RegistrationPage.prototype.onClickCancel = function () {
        this.navCtrl.push('IntroPage');
    };
    // Autocomplete Address
    RegistrationPage.prototype.showAddressModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pages_autocomplete_autocomplete__["a" /* AutocompletePage */]);
        var me = this;
        modal.onDidDismiss(function (data) {
            _this.address = data;
        });
        modal.present();
    };
    RegistrationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegistrationPage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss();
        this.autocomplete.query = item;
        //  this.geoCode(this.geo);//convert Address to lat and long
    };
    RegistrationPage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.query,
            componentRestrictions: {
                country: 'ng'
            }
        }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions != null) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
            });
        });
    };
    //convert Address string to lat and long
    RegistrationPage.prototype.geoCode = function (address) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            _this.latitude = results[0].geometry.location.lat();
            _this.longitude = results[0].geometry.location.lng();
            //  alert("lat: " + this.latitude + ", long: " + this.longitude);
        });
    };
    RegistrationPage.prototype.isOrders = function () {
        return this.autocompleteItems.length == 0 ? false : true;
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-registration",template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/registration/registration.html"*/'<ion-header>\n   <ion-navbar hideBackButton>\n        <ion-title>\n            <ion-title text-center color="white">{{\'Signup\' | translate }}</ion-title>\n        </ion-title>\n    </ion-navbar> \n</ion-header>\n\n<ion-content class="login">\n   <!--- <img class="logo" src="assets/icon/app_icon.png">  -->\n   <br>\n   <br>\n   <br>\n   <br>\n    <form [formGroup]="registration" (ngSubmit)="onSubmit()">\n        <ion-row class="center">\n     <ion-col  col-10 col-xl-4 col-lg-4 col-md-6>\n                <ion-item class="beta">\n                    <ion-label><ion-icon class="iconGrey" name="contact"></ion-icon></ion-label>\n                    <ion-input type="text" name="name" formControlName="firstName" placeholder="First Name" required=""></ion-input>\n                </ion-item>\n          </ion-col>\n      </ion-row>\n\n\n       <ion-row class="center">\n     <ion-col  col-10 col-xl-4 col-lg-4 col-md-6>\n                <ion-item class="beta">\n                    <ion-label><ion-icon class="iconGrey" name="contact"></ion-icon></ion-label>\n                    <ion-input type="text" name="name" formControlName="lastName" placeholder="Last Name" required=""></ion-input>\n                </ion-item>\n           </ion-col>\n       </ion-row>\n\n\n        <!--email-->\n       <ion-row class="center">\n     <ion-col  col-10 col-xl-4 col-lg-4 col-md-6>\n                <ion-item class="beta">\n                    <ion-label><ion-icon class="iconGrey" name="mail"></ion-icon></ion-label>\n                    <ion-input type="email" name="email" formControlName="email" placeholder="Email Address"  required=""></ion-input>\n                </ion-item>\n           </ion-col>\n       </ion-row>\n\n\n        <!--Mobile No-->\n        <ion-row class="center">\n     <ion-col  col-10 col-xl-4 col-lg-4 col-md-6>\n                <ion-item class="beta">\n                    <ion-label><ion-icon class="iconGrey" name="call"></ion-icon></ion-label>\n                    <ion-input type="tel" name="mobileNo" id="mobileNo" placeholder="Phone Number"  formControlName="mobileNo"></ion-input>\n                </ion-item>\n           </ion-col>\n       </ion-row>\n\n\n        <!--- Location -->\n       <ion-row class="center">\n     <ion-col  col-10 col-xl-4 col-lg-4 col-md-6>\n                <ion-item no-lines class="beta">\n                  <ion-label><ion-icon class="iconGrey" name="pin"></ion-icon></ion-label>\n\n   <ion-input name="address" formControlName="address" [(ngModel)]="address" type="text" placeholder="Location" required=""></ion-input>\n\n   <button (click)="showAddressModal()" ion-button clear class="para" type="button" item-right> SET ON MAP</button>\n\n                </ion-item>\n          </ion-col>\n      </ion-row>\n\n\n        <!--password-->\n       <ion-row class="center">\n     <ion-col  col-10 col-xl-4 col-lg-4 col-md-6>\n        <ion-item class="beta">\n            <ion-label><ion-icon class="iconGrey" name="lock"></ion-icon></ion-label> \n            <ion-input  [(ngModel)]="password" placeholder="Password" formControlName="password" required="" [type]="getType()"></ion-input>\n            <button (click)="toggleTextPassword()" ion-button clear class="para" type="button" item-right> <ion-icon  name="eye" ></ion-icon></button>\n        </ion-item>\n    </ion-col>\n</ion-row>\n\n\n        <br>\n        <!--button-->\n      <ion-row class="center">\n     <ion-col  col-10 col-xl-4 col-lg-4 col-md-6>\n                <button class="login-btn" type="submit" >{{"Sign Up" | translate}}\n                </button>\n                <br>\n                <a (click)="navLogin()">\n                    <p text-center>Already have an account? <b><a class="redd">Sign in</a></b></p>\n                </a>\n                <br>\n                  <p text-center buttom>By signing up, you agree with our <a class="colour" href="https://kafasxpressgas.com/terms-and-conditions/"><b class="colour">terms & conditions</b></a></p>\n           </ion-col>\n        </ion-row>\n    </form>\n    <!--login with-->\n    <!-- <ion-row>\n        <ion-col col-12>\n            <p text-center>{{"REGISTER WITH" | translate}}</p>\n        </ion-col>\n    </ion-row> -->\n\n\n    <!--Social login-->\n    <!-- <ion-row>\n        <ion-col text-center col-12>\n            <span (click)="doFbLogin()">\n                <img class="social-icon" src="assets/img/fb.png">\n            </span>\n            <span (click)="googleLogin()">\n                <img class="social-icon" src="assets/img/g+.png">\n            </span>\n            <span (click)="twitterLogin()">\n                <img class="social-icon" src="assets/img/twitter.png">\n            </span>\n        </ion-col>\n    </ion-row> -->\n   <!-- <p text-center>OR</p> -->\n    <!--go to registration-->\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/registration/registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ })

});
//# sourceMappingURL=12.js.map