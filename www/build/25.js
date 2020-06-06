webpackJsonp([25],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsPageModule", function() { return CsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cs__ = __webpack_require__(663);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CsPageModule = /** @class */ (function () {
    function CsPageModule() {
    }
    CsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cs__["a" /* CsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cs__["a" /* CsPage */]),
            ],
        })
    ], CsPageModule);
    return CsPageModule;
}());

//# sourceMappingURL=cs.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComposer; });
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
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 *
 *
 * @usage
 * ```typescript
 * import { EmailComposer } from '@ionic-native/email-composer';
 *
 * constructor(private emailComposer: EmailComposer) { }
 *
 * ...
 *
 *
 * this.emailComposer.isAvailable().then((available: boolean) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * this.emailComposer.open(email);
 *
 * ```
 * @interfaces
 * EmailComposerOptions
 */
var EmailComposer = (function (_super) {
    __extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Verifies if sending emails is supported on the device.
     *
     * @param [app] {string} App id or uri scheme.
     * @returns {Promise<any>} Resolves if available, rejects if not available
     */
    EmailComposer.prototype.isAvailable = function (app) {
        return new Promise(function (resolve, reject) {
            if (app) {
                cordova.plugins.email.isAvailable(app, function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
            else {
                cordova.plugins.email.isAvailable(function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    EmailComposer.prototype.addAlias = function (alias, packageName) { };
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param options {EmailComposerOptions} Email
     * @param [scope] {any} Scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    EmailComposer.prototype.open = function (options, scope) { return; };
    return EmailComposer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));
EmailComposer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
EmailComposer.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmailComposer.prototype, "isAvailable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmailComposer.prototype, "addAlias", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 1,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EmailComposer.prototype, "open", null);
EmailComposer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
        pluginName: 'EmailComposer',
        plugin: 'cordova-plugin-email',
        pluginRef: 'cordova.plugins.email',
        repo: 'https://github.com/hypery2k/cordova-email-plugin',
        platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows']
    })
], EmailComposer);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(561);
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
 * Generated class for the CsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CsPage = /** @class */ (function () {
    function CsPage(af, db, navCtrl, navParams, emailComposer, toastCtrl) {
        this.af = af;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.toastCtrl = toastCtrl;
        this.user = {};
    }
    CsPage.prototype.onSend = function (user) {
        var _this = this;
        if (this.af.auth.currentUser) {
            this.user.userId = this.af.auth.currentUser.uid;
            this.db
                .list("/consultancy")
                .push(this.user)
                .then(function (res) {
                _this.user = {};
            });
        }
        this.navCtrl.push('TabPage');
        this.createToaster("Your request has been sent successfully!", "7000");
    };
    CsPage.prototype.navcart = function () {
        this.navCtrl.push("AboutUsPage");
    };
    CsPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    CsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cs',template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/cs/cs.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>Consultancy Service</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="navcart()">\n              <ion-icon name="help"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="contact">\n\n <ion-row class="center2">\n     <ion-col  col-10 col-xl-8 col-lg-8 col-md-10>\n<!---  <p class="contact-head">{{"Contact Us" | translate}}</p> -->\n<br>\n<br>\n  <br>\n  <form (ngSubmit)="onSend(f)" #f="ngForm">\n      <!--name-->\n\n      <ion-row>\n        <ion-label text-center>\n          Contact Information.\n        </ion-label>\n      </ion-row>\n\n      <ion-row>\n          <ion-col col-12>\n              <ion-item class="beta">\n                  <ion-input placeholder="Contact Name:" class="size" type="text" name="name" id="name" [(ngModel)]="user.name" required></ion-input>\n              </ion-item>\n          </ion-col>\n      </ion-row>\n      <!--email-->\n  <!---    <ion-row>\n          <ion-col col-12>\n              <ion-item>\n                  <ion-label class="size" >Email:</ion-label>\n                  <ion-input class="size" type="email" name="email" id="email" [(ngModel)]="user.email" required></ion-input>\n              </ion-item>\n          </ion-col>\n      </ion-row>  -->\n      <!----Phone-->\n      <ion-row>\n        <ion-col col-12>\n            <ion-item class="beta">\n                <ion-input class="size" placeholder="Contact Phone:" type="phone" name="phone" id="phone" [(ngModel)]="user.phone" required></ion-input>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n    <!----Location-->\n <!----   <ion-row>\n      <ion-col col-12>\n          <ion-item>\n              <ion-input class="size" placeholder="Contact Location:" type="location" name="location" id="location" [(ngModel)]="user.location" required></ion-input>\n          </ion-item>\n      </ion-col>\n  </ion-row>  -->\n    <!----Service-->\n <!---  <ion-row>\n      <ion-col col-12>\n          <ion-item>\n              <ion-input class="size" placeholder="Availability Date & Time" type="service" name="service" id="service" [(ngModel)]="user.service" required></ion-input>\n          </ion-item>\n      </ion-col>\n  </ion-row>  --> \n  <ion-row>\n    <ion-label text-center>\n      Select your Availability Date and Time.\n    </ion-label>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n    <ion-item class="beta">\n      <ion-label>\n        <ion-icon name="calendar" class="icons"></ion-icon> Select Availability Date: \n      </ion-label>\n      <ion-datetime displayFormat="DD-MM-YYYY" type="date" name="date" id="date"  [(ngModel)]="user.date"></ion-datetime>\n      <ion-label>\n       \n      </ion-label>\n    </ion-item>\n  </ion-col>\n</ion-row>\n<!--order-->\n<ion-row>\n  <ion-col col-12>\n    <ion-item class="beta">\n      <ion-label>\n        <ion-icon name="time" class="icons"></ion-icon> Select Availability Time: \n      </ion-label>\n      <ion-datetime displayFormat="hh-mm A" type="time" name="time" id="time"  [(ngModel)]="user.time"></ion-datetime>\n      <ion-label>\n       \n      </ion-label>\n    </ion-item>\n    </ion-col>\n</ion-row>\n      <!--message-->\n  <!----    <ion-row>\n          <ion-col col-12>\n              <ion-item>\n                  <ion-textarea placeholder="Description:" class="size" rows="6" lineHeight="42" name="message" id="message" [(ngModel)]="user.message" required></ion-textarea>\n              </ion-item>\n          </ion-col>\n      </ion-row>  -->\n      <!--button-->\n      <ion-row>\n        <ion-col col-3>\n        </ion-col>\n          <ion-col col-6>\n              <br>\n              <button class="submit-btn" type=\'submit\' [disabled]="!f.valid"> Send\n              </button>\n          </ion-col>\n          <ion-col col-3>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <p text-center>Ensure to put the Date and Time you would be available for a call. Once your request has been submitted, An agent would reach out to you within the next 24hours.</p>\n      </ion-row>\n  </form>\n\n</ion-col>\n\n        </ion-row>\n\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/cs/cs.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], CsPage);
    return CsPage;
}());

//# sourceMappingURL=cs.js.map

/***/ })

});
//# sourceMappingURL=25.js.map