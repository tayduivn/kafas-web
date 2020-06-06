webpackJsonp([35],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImghandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ImghandlerProvider = /** @class */ (function () {
    function ImghandlerProvider(fileChooser, camera, loadingCtrl) {
        this.fileChooser = fileChooser;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.firestore = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage();
    }
    /*
    
    For uploading an image to firebase storage.
   
    Called from - profilepic.ts
    Inputs - None.
    Outputs - The image url of the stored image.
     
     */
    ImghandlerProvider.prototype.uploadimage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.fileChooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.grouppicstore = function (groupname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.fileChooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/groupimages').child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).child(groupname);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).child(groupname).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.picmsgstore = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.fileChooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var uuid = _this.guid();
                                var imageStore = _this.firestore.ref('/picmsgs').child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).child('picmsg' + uuid);
                                imageStore.put(imgBlob).then(function (res) {
                                    resolve(res.downloadURL);
                                }).catch(function (err) {
                                    reject(err);
                                })
                                    .catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    ImghandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */]])
    ], ImghandlerProvider);
    return ImghandlerProvider;
}());

//# sourceMappingURL=imghandler.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(afireauth) {
        this.afireauth = afireauth;
        this.firedata = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users');
    }
    /*
    Adds a new user to the system.
    Called from - signup.ts
    Inputs - The new user object containing the email, password and displayName.
    Outputs - Promise.
    
     */
    UserProvider.prototype.adduser = function (newuser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: newuser.displayName,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                }).then(function () {
                    _this.firedata.child(_this.afireauth.auth.currentUser.uid).set({
                        uid: _this.afireauth.auth.currentUser.uid,
                        displayName: newuser.displayName,
                        photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /*
    For resetting the password of the user.
    Called from - passwordreset.ts
    Inputs - email of the user.
    Output - Promise.
    
     */
    UserProvider.prototype.passwordreset = function (email) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().sendPasswordResetEmail(email).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /*
    
    For updating the users collection and the firebase users list with
    the imageurl of the profile picture stored in firebase storage.
    Called from - profilepic.ts
    Inputs - Url of the image stored in firebase.
    OUtputs - Promise.
    
    */
    UserProvider.prototype.updateimage = function (imageurl) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: _this.afireauth.auth.currentUser.displayName,
                photoURL: imageurl
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/' + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: _this.afireauth.auth.currentUser.displayName,
                    photoURL: imageurl,
                    uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getuserdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.afireauth.auth.currentUser) {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                    resolve(snapshot.val());
                }).catch(function (err) {
                    reject(err);
                });
            }
        });
        return promise;
    };
    UserProvider.prototype.updatedisplayname = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: newname,
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: newname,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getallusers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.orderByChild('uid').once('value', function (snapshot) {
                var userdata = snapshot.val();
                var temparr = [];
                for (var key in userdata) {
                    temparr.push(userdata[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		555,
		7
	],
	"../pages/add-address/add-address.module": [
		521,
		23
	],
	"../pages/address-list/address-list.module": [
		522,
		22
	],
	"../pages/address/address.module": [
		523,
		31
	],
	"../pages/autocomplete/autocomplete.module": [
		553,
		34
	],
	"../pages/booking-history/booking-history.module": [
		524,
		30
	],
	"../pages/cart/cart.module": [
		525,
		21
	],
	"../pages/category/category.module": [
		526,
		20
	],
	"../pages/checkout/checkout.module": [
		527,
		6
	],
	"../pages/contact/contact.module": [
		529,
		9
	],
	"../pages/cs/cs.module": [
		528,
		25
	],
	"../pages/dashboard/dashboard.module": [
		532,
		19
	],
	"../pages/favourite/favourite.module": [
		530,
		18
	],
	"../pages/forgot-password/forgot-password.module": [
		531,
		1
	],
	"../pages/intro/intro.module": [
		540,
		29
	],
	"../pages/location/location.module": [
		533,
		2
	],
	"../pages/login/login.module": [
		548,
		0
	],
	"../pages/offer/offer.module": [
		534,
		17
	],
	"../pages/order-details/order-details.module": [
		535,
		5
	],
	"../pages/order-list/order-list.module": [
		536,
		16
	],
	"../pages/order-status/order-status.module": [
		537,
		15
	],
	"../pages/orders/orders.module": [
		538,
		14
	],
	"../pages/paystack/paystack.module": [
		539,
		33
	],
	"../pages/product-details/product-details.module": [
		546,
		13
	],
	"../pages/product-list/product-list.module": [
		541,
		4
	],
	"../pages/rating/rating.module": [
		542,
		8
	],
	"../pages/registration/registration.module": [
		543,
		12
	],
	"../pages/rt/rt.module": [
		544,
		24
	],
	"../pages/search/search.module": [
		545,
		3
	],
	"../pages/settings/settings.module": [
		547,
		11
	],
	"../pages/tab/tab.module": [
		549,
		28
	],
	"../pages/table-booking/table-booking.module": [
		550,
		27
	],
	"../pages/thankyou/thankyou.module": [
		554,
		10
	],
	"../pages/track/track.module": [
		551,
		26
	],
	"../pages/wallet/wallet.module": [
		552,
		32
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 237;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
  Generated class for the SocialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SocialProvider = /** @class */ (function () {
    function SocialProvider(socialSharing, platform, toastCtrl) {
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
    }
    SocialProvider.prototype.share = function (packageName, appName, social, url, subject, image, message) {
        var _this = this;
        if (url === void 0) { url = "https://kafasxpressgas.com"; }
        if (subject === void 0) { subject = "Kafas Xpress Mobile App"; }
        if (image === void 0) { image = "https://res.cloudinary.com/ethion/image/upload/v1581447861/WhatsApp_Image_2019-10-15_at_07.18.46_dxk97g.png"; }
        if (message === void 0) { message = "Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home."; }
        this.platform.ready().then(function () {
            if (social === "facebook") {
                _this.socialSharing
                    .canShareVia(packageName, message, subject, image, url)
                    .then(function () {
                    _this.socialSharing
                        .shareViaFacebook(message, image, url)
                        .catch(function (err) {
                        _this.showSuccesToast("There was a problem please try later");
                    });
                })
                    .catch(function (err) {
                    _this.showFailToast(appName);
                });
            }
            else if (social === "whatsapp") {
                _this.socialSharing
                    .canShareVia(packageName, message, subject, image, url)
                    .then(function () {
                    _this.socialSharing
                        .shareViaWhatsApp(message, image, url)
                        .catch(function (err) {
                        _this.showSuccesToast("There was a problem please try later");
                    });
                })
                    .catch(function (err) {
                    _this.showFailToast(appName);
                });
            }
            else if (social === "instagram") {
                _this.socialSharing
                    .canShareVia(packageName, message, subject, image, url)
                    .then(function () {
                    _this.socialSharing
                        .shareViaInstagram(message, image)
                        .catch(function (err) {
                        _this.showSuccesToast("There was a problem please try later");
                    });
                })
                    .catch(function (err) {
                    _this.showFailToast(appName);
                });
            }
            else if (social === "twitter") {
                _this.socialSharing
                    .canShareVia(packageName, message, subject, image, url)
                    .then(function () {
                    _this.socialSharing
                        .shareViaTwitter(message, image, url)
                        .catch(function (err) {
                        _this.showSuccesToast("There was a problem please try later");
                    });
                })
                    .catch(function (err) {
                    _this.showFailToast(appName);
                });
            }
            else {
                _this.socialSharing
                    .share(message, subject, image, url)
                    .catch(function (err) {
                    _this.showSuccesToast("There was a problem please try later");
                });
            }
        });
    };
    SocialProvider.prototype.showSuccesToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 5000,
                            position: 'bottom',
                            showCloseButton: true
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SocialProvider.prototype.showFailToast = function (appName) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: appName + " is not installed on your device",
                            duration: 5000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SocialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], SocialProvider);
    return SocialProvider;
}());

//# sourceMappingURL=social.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutocompletePage = /** @class */ (function () {
    function AutocompletePage(viewCtrl, zone, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
        this.geo = item;
        this.geoCode(this.geo); //convert Address to lat and long
    };
    AutocompletePage.prototype.updateSearch = function () {
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
    AutocompletePage.prototype.geoCode = function (address) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            _this.latitude = results[0].geometry.location.lat();
            _this.longitude = results[0].geometry.location.lng();
            //  alert("lat: " + this.latitude + ", long: " + this.longitude);
        });
    };
    AutocompletePage.prototype.isOrders = function () {
        return this.autocompleteItems.length == 0 ? false : true;
    };
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-autocomplete',template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/autocomplete/autocomplete.html"*/'<ion-header>\n  <ion-toolbar>\n  	<br>\n    <ion-title>Enter Address</ion-title>\n    <br>\n    <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true"   (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n  <div *ngIf="!isOrders()">\n        <div class="empty-list">\n            <ion-icon class="empty" name="map"></ion-icon>\n            <h4>Input your address <br>in the search bar</h4>\n        </div>\n</div>\n\n</ion-content>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/autocomplete/autocomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaystackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wallet_wallet__ = __webpack_require__(92);
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
 * Generated class for the PaystackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaystackPage = /** @class */ (function () {
    function PaystackPage(navCtrl, actionSheetCtrl, af, db, toastCtrl, iab, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.af = af;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.public_key = 'pk_live_9c589a259d687674aeadac7fec634b8929fe9f2e'; //Put your paystack Test or Live Key here
        this.channels = ['bank', 'card', 'ussd', 'qr']; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
        this.ref = {
            message: "",
            refernce: "",
            trans: "",
            transaction: "",
            trxref: "",
        };
        this.order = {};
        this.userDetails = {
            email: "",
            name: "",
            userid: ""
        };
        this.paymentDetails = {
            paymentStatus: true
        };
        this.stripe_card = {};
        this.formPay = this.formBuilder.group({
            fullname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            amount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.order = this.navParams.get("orderDetails");
        this.str = "#";
        var num = Math.floor(Math.random() * 900000) + 100000;
        this.color = this.str.concat(num);
        this.checkout = db.list("/orders");
    }
    PaystackPage.prototype.ngOnInit = function () {
        this.price = this.navParams.get('price');
        this.chargeAmount = this.price;
        this.email = this.navParams.get('email');
        this.email = this.email;
        this.key = this.navParams.get('key');
        this.orderkey = this.key;
    };
    PaystackPage.prototype.choosePaymentType = function (paymentType) {
        this.paymentType = paymentType;
        this.order.paymentType = paymentType;
        this.paymentDetails.paymentType = paymentType;
    };
    //Callback function on successful payment 
    PaystackPage.prototype.paymentDone = function (ref) {
        this.db.object("/orders/" + this.key).update({
            paymentStatus: "Approved"
        });
        this.db.object("/orders/" + this.key).update({
            message: ref.message,
            reference: ref.reference,
            trans: ref.trans,
            transaction: ref.transaction,
            trxref: ref.trxref,
        });
        console.log(ref);
        // this.saveLoyaltyData(res.key);
        this.navCtrl.setRoot("ThankyouPage");
        //ref contains the response from paystack after successful payment
    };
    //Event triggered if User cancel the payment
    PaystackPage.prototype.paymentCancel = function () {
        this.createToaster("Error! Gateway Closed.", "10000");
        console.log('gateway closed');
    };
    PaystackPage.prototype.whatsPaystack = function () {
        var browser = this.iab.create('https://paystack.com/what-is-paystack');
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;" });
        });
        browser.close();
    };
    PaystackPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    PaystackPage.prototype.addressMenu = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            //   title: 'Modify your album',
            cssClass: 'myPage',
            buttons: [
                {
                    text: 'Wallet',
                    role: 'destructive',
                    cssClass: 'textSize',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wallet_wallet__["a" /* WalletPage */]);
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
    PaystackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paystack',template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/paystack/paystack.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Paystack\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="addressMenu()" class="header-btn-cart">\n          <ion-icon name="list"></ion-icon> \n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<ion-row class="center2">\n     <ion-col  col-10 col-xl-8 col-lg-8 col-md-10>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<h2 text-center>You are about to pay the sum of ₦{{chargeAmount | number:\'.2-2\'}}</h2>\n<br>\n<br>\n<br>\n  <form [formGroup]="formPay" name="formPay">\n <!-----   <ion-item>\n      <ion-label stacked>\n        <ion-icon name="person" item-start></ion-icon>\n        Full Name\n      </ion-label>\n      <ion-input type="text" formControlName="fullname" [(ngModel)]="fullname"></ion-input>\n  </ion-item>   -->\n\n  <ion-row> <ion-col col-3>\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n            <ion-label><ion-icon color="danger" name="mail"></ion-icon></ion-label>\n            <ion-input type="email" formControlName="email" placeholder="Enter your email address" [(ngModel)]="email"></ion-input>\n        </ion-item>\n    </ion-col>\n\n    <ion-col col-3>\n</ion-col>\n\n</ion-row>\n\n <!-----   <ion-item>\n      <ion-label stacked>\n        <ion-icon name="call" item-start></ion-icon>\n        Phone\n      </ion-label>\n      <ion-input type="number" formControlName="phone"></ion-input>\n  </ion-item>  -->\n\n <!-----   <ion-item>\n        <ion-label stacked>\n          <ion-icon name="card" item-start></ion-icon>\n          {{chargeAmount}}\n        </ion-label>\n        <ion-input type="number" formControlName="amount"  [(ngModel)]="chargeAmount"></ion-input>\n    </ion-item>   -->\n    \n    <br>\n\n    <ion-row>\n      <ion-col col-3>\n      </ion-col>\n\n      <ion-col col-6>\n\n    <angular4-paystack [key]="public_key" [email]="email" [amount]="chargeAmount * 100" [ref]="random_id" [channels]="channels" (close)="paymentCancel()" (callback)="paymentDone($event)" [class]="\'bbysl\'">\n          <button class="bbysl" tappable style="width:100%"><ion-icon name="card"></ion-icon> Pay</button>\n    </angular4-paystack>\n        \n  </ion-col>\n\n<ion-col col-3>\n</ion-col>\n\n</ion-row>\n\n</form>\n\n<div class="footer">\n\n  <div class="secured">\n  \n  <ion-icon name="lock" item-start></ion-icon>\n  \n  SECURED BY PAYSTACK\n  \n  </div>\n  \n  </div>\n\n</ion-col>\n\n\n</ion-row>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/paystack/paystack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PaystackPage);
    return PaystackPage;
}());

//# sourceMappingURL=paystack.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartService = /** @class */ (function () {
    function CartService() {
        this.Cart = [];
        this.itemCart = {};
        this.itemInCart = [];
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
    }
    CartService.prototype.OnsaveLS = function (item) {
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
        var ExtotalPrice = 0;
        var totalPrice = 0;
        this.itemInCart = [];
        if (this.Cart == null) {
            for (var i = 0; i <= item.extraOptions.length - 1; i++) {
                ExtotalPrice = ExtotalPrice + Number(item.extraOptions[i].exvalue);
            }
            if (item.price.specialPrice) {
                totalPrice = ExtotalPrice + Number(item.price.specialPrice);
            }
            else {
                totalPrice = ExtotalPrice + Number(item.price.value);
            }
            this.itemCart.itemTotalPrice = totalPrice * item.itemQunatity;
            this.itemCart.item = item;
            this.itemInCart.push(this.itemCart);
            localStorage.setItem("Cart", JSON.stringify(this.itemInCart));
        }
        else {
            for (var i = 0; i <= this.Cart.length - 1; i++) {
                if (this.Cart[i].item.itemId == item.itemId &&
                    this.Cart[i].item.price.pname == item.price.pname) {
                    this.Cart.splice(i, 1);
                }
            }
            for (var k = 0; k <= item.extraOptions.length - 1; k++) {
                ExtotalPrice = ExtotalPrice + Number(item.extraOptions[k].exvalue);
            }
            if (item.price.specialPrice) {
                totalPrice = ExtotalPrice + Number(item.price.specialPrice);
            }
            else {
                totalPrice = ExtotalPrice + Number(item.price.value);
            }
            this.itemCart.itemTotalPrice = totalPrice * item.itemQunatity;
            this.itemCart.item = item;
            this.Cart.push(this.itemCart);
            localStorage.setItem("Cart", JSON.stringify(this.Cart));
        }
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(428);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_config__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase_storage__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_date_picker__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wallet_wallet__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_paystack_paystack__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular4_paystack__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_imghandler_imghandler__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_chooser__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_social_social__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_plus__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_geocoder__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_autocomplete_autocomplete__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { PaystackPage} from '../pages/paystack/paystack';
//import { WalletPage } from '../pages/wallet/wallet';




// import { DashboardPage } from '../pages/dashboard/dashboard'











function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_15__pages_wallet_wallet__["a" /* WalletPage */], __WEBPACK_IMPORTED_MODULE_16__pages_paystack_paystack__["a" /* PaystackPage */], __WEBPACK_IMPORTED_MODULE_28__pages_autocomplete_autocomplete__["a" /* AutocompletePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-address/add-address.module#AddAddressPageModule', name: 'AddAddressPage', segment: 'add-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address-list/address-list.module#AddressListPageModule', name: 'AddressListPage', segment: 'address-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-history/booking-history.module#BookingHistoryPageModule', name: 'BookingHistoryPage', segment: 'booking-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cs/cs.module#CsPageModule', name: 'CsPage', segment: 'cs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourite/favourite.module#FavouritePageModule', name: 'FavouritePage', segment: 'favourite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer/offer.module#OfferPageModule', name: 'OfferPage', segment: 'offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-list/order-list.module#OrderListPageModule', name: 'OrderListPage', segment: 'order-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-status/order-status.module#OrderStatusPageModule', name: 'OrderStatusPage', segment: 'order-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paystack/paystack.module#PaystackPageModule', name: 'PaystackPage', segment: 'paystack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'product-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'RatingPage', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rt/rt.module#RtPageModule', name: 'RtPage', segment: 'rt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsModule', name: 'Settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab/tab.module#TabPageModule', name: 'TabPage', segment: 'tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-booking/table-booking.module#TableBookingPageModule', name: 'TableBookingPage', segment: 'table-booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/track/track.module#TrackPageModule', name: 'TrackPage', segment: 'track', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/autocomplete/autocomplete.module#AutocompletePageModule', name: 'AutocompletePage', segment: 'autocomplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angular4_paystack__["a" /* Angular4PaystackModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_15__pages_wallet_wallet__["a" /* WalletPage */], __WEBPACK_IMPORTED_MODULE_16__pages_paystack_paystack__["a" /* PaystackPage */], __WEBPACK_IMPORTED_MODULE_28__pages_autocomplete_autocomplete__["a" /* AutocompletePage */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__pages_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_24__providers_social_social__["a" /* SocialProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_social_social__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_imghandler_imghandler__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_wallet_wallet__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { TranslateService } from "@ngx-translate/core";





var MyApp = /** @class */ (function () {
    function MyApp(af, db, userservice, imghandler, platform, storage, alertCtrl, toastCtrl, statusbar, loadingCtrl, actionSheetCtrl, splashscreen, socialSharing, oneSignal, events, zone, _social
    //   private translateService: TranslateService
    ) {
        var _this = this;
        this.af = af;
        this.db = db;
        this.userservice = userservice;
        this.imghandler = imghandler;
        this.platform = platform;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.statusbar = statusbar;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.splashscreen = splashscreen;
        this.socialSharing = socialSharing;
        this.oneSignal = oneSignal;
        this.events = events;
        this.zone = zone;
        this._social = _social;
        this.avatar = "assets/img/profile.jpg";
        this.Cart = [];
        this.user = {};
        this.imageUrl = "assets/img/profile.jpg";
        this.file = {};
        this.storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.storage();
        //Wallet
        this.loyaltyPoints = 0;
        this.pincodeMatched = true;
        this.loyaltyPercentage = 0;
        this.leftLoyaltyPoint = 0;
        this.checked = false;
        this.loyaltyArray = [];
        //social Sharing
        this.url = "https://kafasxpressgas.com";
        this.subject = "Kafas Xpress Mobile App";
        this.image = "https://res.cloudinary.com/ethion/image/upload/v1590080456/app_icon1_lxnm4a.png";
        this.message = "Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.";
        this.splashscreen.show();
        var loader = this.loadingCtrl.create({
            //  content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.rootPage = 'DashboardPage';
                unsubscribe();
                loader.dismiss();
            }
            else {
                _this.rootPage = 'LoginPage';
                unsubscribe();
                loader.dismiss();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //  splashscreen.hide();
        });
        this.initializeApp();
        this.url = "https://kafasxpressgas.com";
        this.subject = "Kafas Xpress Mobile App";
        this.image = "https://res.cloudinary.com/ethion/image/upload/v1590080456/app_icon1_lxnm4a.png";
        this.message = "Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.";
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = localStorage.getItem("uid");
        this.email = localStorage.getItem("email");
        if (this.uid != null) {
            this.db
                .object("/users/" + this.uid)
                .valueChanges()
                .subscribe(function (res) {
                if (res != null) {
                    _this.name = res.name;
                    _this.firstName = res.firstName;
                    _this.lastName = res.lastName;
                    _this.email = res.email;
                    _this.imageUrl =
                        res.image != "" && res.image != null
                            ? res.image
                            : "assets/img/profile.jpg";
                }
                else {
                    _this.name = res.name;
                    _this.imageUrl = 'assets/img/profile.jpg';
                }
            });
        }
        // this.useTranslateService();
        //  this.getNewsCount();
        this.getOfferCount();
        this.listenEvents();
        this.url = "https://kafasxpressgas.com";
        this.subject = "Kafas Xpress Mobile App";
        this.image = "https://res.cloudinary.com/ethion/image/upload/v1590080456/app_icon1_lxnm4a.png";
        this.message = "Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.";
    };
    MyApp.prototype.readUrl = function (event) {
        var _this = this;
        this.file = document.getElementById("file").files[0];
        var metadata = {
            contentType: "image/*"
        };
        var loader = this.loadingCtrl.create({
            content: "please wait.."
        });
        loader.present();
        this.storageRef
            .ref()
            .child("profile/" + this.file.name)
            .put(this.file, metadata)
            .then(function (res) {
            _this.user.image = res.downloadURL;
            _this.avatar = res.downloadURL;
            _this.db
                .object("users/" + _this.af.auth.currentUser.uid + "/image")
                .set(res.downloadURL);
            loader.dismiss();
        })
            .catch(function (error) {
            loader.dismiss();
        });
    };
    MyApp.prototype.editimage = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        this.imghandler.uploadimage().then(function (url) {
            _this.userservice.updateimage(url).then(function (res) {
                if (res.success) {
                    statusalert.setTitle('Updated');
                    statusalert.setSubTitle('Your profile pic has been changed successfully! It might take a while for changes to reflect.');
                    _this.storage.set('avatar', _this.avatar);
                    statusalert.present();
                    _this.zone.run(function () {
                        _this.avatar = url;
                    });
                }
            }).catch(function (err) {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your profile pic was not changed. Please try');
                statusalert.present();
            });
        });
    };
    //  private getNewsCount() {
    //  this.db
    //    .list("/news")
    //    .valueChanges()
    //     .subscribe(res => {
    //       this.noOfItemsInNews = res.length;
    //     });
    //  }
    MyApp.prototype.getOfferCount = function () {
        var _this = this;
        this.db
            .list("/menuItems", function (ref) { return ref.orderByChild("offer").equalTo(true); })
            .valueChanges()
            .subscribe(function (queriedItems) {
            _this.noOfItemsInOffer = queriedItems.length;
        });
    };
    MyApp.prototype.listenEvents = function () {
        var _this = this;
        this.events.subscribe("imageUrl", function (response) {
            _this.imageUrl =
                response.image != "" && response.image != null
                    ? response.image
                    : "assets/img/profile.jpg";
            _this.name = response.name;
        });
    };
    // private useTranslateService() {
    //  let value = localStorage.getItem("language");
    //  let language = value != null ? value : "en";
    //  language == "ar"
    //    ? this.platform.setDir("rtl", true)
    //    : this.platform.setDir("ltr", true);
    //  this.translateService.use(language);
    // }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.wallet = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_wallet_wallet__["a" /* WalletPage */]);
    };
    MyApp.prototype.support = function () {
        this.nav.push("ContactPage");
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.db.object('/settings/currency').valueChanges().subscribe(function (res) {
            localStorage.setItem('currency', JSON.stringify(res));
        }, function (err) {
            localStorage.setItem('currency', JSON.stringify({ currencyName: 'NGN', currencySymbol: 'â‚¦' }));
        });
        if (this.platform.ready()) {
            this.platform.ready().then(function (res) {
                if (res == "cordova") {
                    _this.oneSignal.startInit("9740a50f-587f-4853-821f-58252d998399", "714618018341");
                    _this.oneSignal.getIds().then(function (response) {
                        if (_this.uid != null) {
                            _this.uid = localStorage.getItem("uid");
                            localStorage.setItem('playerId', response.userId);
                            _this.db.object("/users/" + _this.uid).update({
                                playerId: response.userId
                            });
                        }
                    });
                    _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                    _this.oneSignal.handleNotificationReceived().subscribe(function () { });
                    _this.oneSignal.handleNotificationOpened().subscribe(function () { });
                    _this.oneSignal.endInit();
                }
            });
        }
    };
    MyApp.prototype.home = function () {
        this.nav.setRoot("DashboardPage");
    };
    MyApp.prototype.yourOrders = function () {
        this.nav.push("OrderListPage");
    };
    MyApp.prototype.addToCart = function () {
        this.nav.push("CartPage");
    };
    MyApp.prototype.catagory = function () {
        this.nav.push("CategoryPage");
    };
    MyApp.prototype.favourite = function () {
        this.nav.push("FavouritePage");
    };
    MyApp.prototype.offer = function () {
        this.nav.push("OfferPage");
    };
    MyApp.prototype.news = function () {
        this.nav.push("NewsPage");
    };
    MyApp.prototype.contact = function () {
        this.nav.push("ContactPage");
    };
    MyApp.prototype.aboutUs = function () {
        this.nav.push("AboutUsPage");
    };
    MyApp.prototype.manageAddress = function () {
        this.nav.push("AddressPage");
    };
    MyApp.prototype.settings = function () {
        this.nav.push("Settings");
    };
    //  invite() {
    //    this.socialSharing.share(
    //      "Share Kafas Xpress Gas Mobile App with Friends and Family",
    //      null,
    //     null,
    //     "#"
    //  );
    // }
    MyApp.prototype.chat = function () {
        this.nav.push("ChatPage");
    };
    MyApp.prototype.tableBooking = function () {
        this.nav.push("TableBookingPage");
    };
    MyApp.prototype.bookingHistory = function () {
        this.nav.push("BookingHistoryPage");
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot("LoginPage");
    };
    // logout() {
    //  this.af.auth.signOut();
    //  localStorage.removeItem("uid");
    //  localStorage.removeItem('playerId');
    //   this.imageUrl = "assets/img/profile.jpg";
    //   this.nav.setRoot("LoginPage");
    // }
    MyApp.prototype.confirmLogout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Are you sure you want to Logout?",
            //   message: "After confirmation, our representative would reach out to you via Phone after which, plans for your refill would be processed. ",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        _this.presentToast("Not Intrested?. Going back...");
                        _this.nav.pop();
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        localStorage.removeItem("uid");
                        localStorage.removeItem('playerId');
                        localStorage.removeItem("firstName");
                        localStorage.removeItem("lastName");
                        localStorage.removeItem("email");
                        _this.af.auth.signOut();
                        _this.nav.setRoot("LoginPage");
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    MyApp.prototype.isLoggedin = function () {
        return localStorage.getItem("uid") != null;
    };
    MyApp.prototype.isCart = function () {
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
        this.noOfItemsInCart = this.Cart != null ? this.Cart.length : null;
        return true;
    };
    MyApp.prototype.addressMenu = function () {
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
                        _this.nav.push("AddressPage");
                    }
                }, {
                    text: 'Contact Us',
                    role: 'destructive',
                    cssClass: 'textSize',
                    handler: function () {
                        _this.nav.push("ContactPage");
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
    MyApp.prototype.ionViewDidLoad = function () {
        this.url = "https://kafasxpressgas.com";
        this.subject = "Kafas Xpress Mobile App";
        this.image = "https://res.cloudinary.com/ethion/image/upload/v1590080456/app_icon1_lxnm4a.png";
        this.message = "Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.";
    };
    MyApp.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: "Share on Facebook",
                    role: "destructive",
                    cssClass: " action-facebook",
                    icon: "logo-facebook",
                    handler: function () {
                        _this._social.share("com.facebook.katana", "Facebook", "facebook", _this.message, _this.subject, _this.image, _this.url);
                    }
                },
                {
                    text: "Share on Whatsapp",
                    role: "destructive",
                    cssClass: " action-whatsup",
                    icon: "logo-whatsapp",
                    handler: function () {
                        _this._social.share("com.whatsapp", "Whatsapp", "whatsapp", _this.message, _this.subject, _this.image, _this.url);
                    }
                },
                {
                    text: "Share on Instagram",
                    role: "destructive",
                    cssClass: " action-instagram",
                    icon: "logo-instagram",
                    handler: function () {
                        _this._social.share("com.instagram.android", "Instagram", "instagram", _this.message, _this.subject, _this.image, _this.url);
                    }
                },
                {
                    text: "Share on Twitter",
                    role: "destructive",
                    cssClass: " action-twitter",
                    icon: "logo-twitter",
                    handler: function () {
                        _this._social.share("com.twitter.android", "Twitter", "twitter", _this.message, _this.subject, _this.image, _this.url);
                    }
                },
                {
                    text: "Share on other Social medias",
                    role: "destructive",
                    cssClass: " action-regular",
                    icon: "share",
                    handler: function () {
                        _this._social.share("none", "Share", "none", _this.message, _this.subject, _this.image, _this.url);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MyApp.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    MyApp.prototype.track = function () {
        this.nav.push("TrackPage");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/app/app.html"*/'<ion-menu persistent="true" class="menu" [content]="content"  side="left">\n  <ion-content class="sidebar-menu">\n\n  <ion-row class="img-name-row">\n      <ion-col *ngIf="isLoggedin()">\n       <br>\n       <br>\n       <!----<div class="profile-image">\n          <ngx-avatar   [style]="ava" bgColor="red" textSizeRatio="2.2" [size]="80"  name={{name}}></ngx-avatar>\n        </div>  --> \n        <span class="user-name">&nbsp;&nbsp;Welcome</span>\n       <br><span class="user-name2">&nbsp;&nbsp;{{name | uppercase}}</span>\n     <!----  <br><span class="user-name">&nbsp;&nbsp;{{email}}</span>  --->\n       <br>\n       <br><span class="user-name">&nbsp;&nbsp;<b class="texttt">₦</b>&nbsp;&nbsp;<a (click)="wallet()" menuClose>Wallet</a> &nbsp;&nbsp; | &nbsp;&nbsp; <ion-icon class="textt" name="chatboxes"></ion-icon>&nbsp;&nbsp;<a class="text3" (click)="support()" menuClose>Support</a></span>\n       \n       <!----  <p class="ppp"  menuClose  (click)="settings()">Edit Profile</p>  --> \n      </ion-col>\n    </ion-row> \n    <br>\n    <br>\n<hr>\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="settings()">\n      <ion-icon name="contact" item-left></ion-icon>\n      <span class="menu-text"> {{\'My Profile\'| translate}} </span>\n    </button>\n\n\n    <button menuClose class="menu-item" ion-item (click)="home()">\n      <ion-icon name="home" item-left></ion-icon>\n     <span class="menu-text"> {{\'Order Gas\' | translate}} </span>\n    </button>\n\n\n <!-----  <button menuClose class="menu-item" ion-item (click)="catagory()">\n      <ion-icon name="beaker" item-left></ion-icon>\n      <span class="menu-text"> {{\'Our Products\'| translate}} </span> \n    </button>  --> \n\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="yourOrders()">\n      <ion-icon name="timer" item-left></ion-icon>\n      <span class="menu-text">  {{\'Order History\'| translate}} </span> \n    </button>\n\n  <!---  <button *ngIf="isCart()" menuClose class="menu-item" ion-item (click)="offer()">\n      <ion-icon name="pricetag" item-left></ion-icon>\n      {{\'Offers\'| translate}}\n      <ion-badge class="menu-badge">{{noOfItemsInOffer}}</ion-badge>\n    </button> -->\n   <!---- <button *ngIf="isCart()"  menuClose class="menu-item" ion-item (click)="addToCart()">\n      <ion-icon name="cart" item-left></ion-icon>\n      <span class="menu-text">  {{\'My Cart\'| translate}} </span> \n      <ion-badge class="menu-badge">{{noOfItemsInCart}}</ion-badge>\n    </button>  -->\n    \n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="tableBooking()">\n      <ion-icon name="list-box" item-left></ion-icon>\n      <span class="menu-text">   {{\'Schedule Refill\' | translate}} </span> \n    </button>\n   <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="bookingHistory()">\n      <ion-icon name="options" item-left></ion-icon>\n       <ion-badge class="menu-badge"></ion-badge> \n       <span class="menu-text">    {{\'Refill History\' | translate}}  </span> \n    </button> \n   <!---- <button menuClose class="menu-item" ion-item (click)="news()">\n      <ion-icon name="paper" item-left></ion-icon>\n      {{\'News\'| translate}}\n      <ion-badge class="menu-badge">{{noOfItemsInNews}}</ion-badge>\n    </button> -->\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="favourite()">\n      <ion-icon name="heart" item-left></ion-icon>\n      <span class="menu-text"> {{\'Wishlist\'| translate}} </span>\n       <ion-badge class="menu-badge">{{noOfItemsInFevrt}}</ion-badge>\n    </button>\n\n<!------    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="manageAddress()">\n      <ion-icon name="pin" item-left></ion-icon>\n      <span class="menu-text"> {{\'Manage Address\'| translate}} </span>\n      <ion-badge class="menu-badge">{{noOfItemsInFevrt}}</ion-badge>\n    </button>  -->\n    \n  <!----   <button menuClose class="menu-item" ion-item (click)="contact()">\n      <ion-icon name="call" item-left></ion-icon>\n      <span class="menu-text"> {{\'Contact Us\'| translate}} </span>\n    </button>  -->\n\n    <button menuClose class="menu-item" ion-item (click)="aboutUs()">\n      <ion-icon name="help" item-left></ion-icon>\n      <span class="menu-text"> {{\'About Us\'| translate}} </span>\n    </button>\n  <!--  <button menuClose class="menu-item" ion-item *ngIf="isLoggedin()" (click)="presentActionSheet()">\n      <ion-icon name="contacts" item-left></ion-icon>\n      <span class="menu-text"> {{\'Invite Friends\' | translate}} </span>\n    </button> -->\n\n   <!--- <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="chat()">\n      <ion-icon name="chatbubbles" item-left></ion-icon>\n      {{\'Chat\' | translate}}\n    </button> -->\n    \n    <button *ngIf="!isLoggedin()" menuClose class="menu-item" ion-item (click)="login()">\n      <ion-icon name="log-in" item-left></ion-icon>\n      <span class="menu-text"> {{\'Login\'| translate}} </span>\n    </button>\n    <button *ngIf="isLoggedin()" ion-item (click)="confirmLogout()" menuClose class="menu-item">\n      <ion-icon name="log-out" item-left></ion-icon>\n      <span class="menu-text"> {{\'Logout\'| translate}} </span>\n    </button>\n  </ion-content>\n</ion-menu>\n\n<ion-menu persistent="true" class="menu" [content]="content" *ngIf="this.platform.dir()===\'rtl\'" side="right">\n  <ion-content class="sidebar-menu">\n    <ion-row class="img-name-row">\n      <ion-col>\n        <img class="user-img" src="{{avatar}}">\n        <p class="ppp" (click)="Settings()">Edit Profile</p>\n      </ion-col>\n    </ion-row>\n     <ion-row>\n   <ion-col *ngIf="isLoggedin()">\n        <p class="user-name">{{name | uppercase}}</p>\n      </ion-col> \n    </ion-row>  \n\n\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="settings()">\n      <ion-icon name="settings" item-left></ion-icon>\n      <span class="menu-text"> {{\'My Profile\'| translate}} </span>\n    </button>\n\n    <button menuClose class="menu-item" ion-item (click)="home()">\n      <ion-icon name="home" item-left></ion-icon>\n      <span class="menu-text"> {{\'Order Gas\' | translate}} </span>\n    </button>\n   <!----<button menuClose class="menu-item" ion-item (click)="catagory()">\n        <ion-icon name="beaker" item-left></ion-icon>\n        <span class="menu-text"> {{\'Our Products\'| translate}} </span>\n    </button>  --> \n\n   <!--- <button *ngIf="isCart()" menuClose class="menu-item" ion-item (click)="offer()">\n      <ion-icon name="pricetag" item-left></ion-icon>\n      {{\'Offers\'| translate}}\n      <ion-badge class="menu-badge">{{noOfItemsInOffer}}</ion-badge>\n    </button>  -->\n\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="yourOrders()">\n      <ion-icon name="timer" item-left></ion-icon>\n      <span class="menu-text"> {{\'Order History\'| translate}} </span>\n    </button>\n\n\n   <!--- <button *ngIf="isCart()" menuClose class="menu-item" ion-item (click)="addToCart()">\n      <ion-icon name="cart" item-left></ion-icon>\n      <span class="menu-text"> {{\'My Cart\'| translate}} </span>\n      <ion-badge class="menu-badge">{{noOfItemsInCart}}</ion-badge>\n    </button>  -->\n   \n   <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="tableBooking()">\n      <ion-icon name="list-box" item-left></ion-icon>\n      <span class="menu-text">   {{\'Schedule Refill\' | translate}}  </span>\n    </button>\n   <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="bookingHistory()">\n      <ion-icon name="options" item-left></ion-icon>\n       <ion-badge class="menu-badge"></ion-badge>\n       <span class="menu-text"> {{\'Refill History\' | translate}}  </span>\n    </button>  \n <!----   <button menuClose class="menu-item" ion-item (click)="news()">\n      <ion-icon name="paper" item-left></ion-icon>\n      {{\'News\'| translate}}\n      <ion-badge class="menu-badge">{{noOfItemsInNews}}</ion-badge>\n    </button>  -->\n    <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="favourite()">\n      <ion-icon name="heart" item-left></ion-icon>\n      <span class="menu-text"> {{\'Wishlist\'| translate}} </span>\n      <!-- <ion-badge class="menu-badge">{{noOfItemsInFevrt}}</ion-badge> -->\n    </button>\n\n <!----   <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="manageAddress()">\n      <ion-icon name="pin" item-left></ion-icon>\n      <span class="menu-text"> {{\'Manage Address\'| translate}} </span>\n       <ion-badge class="menu-badge">{{noOfItemsInFevrt}}</ion-badge>\n    </button>  -->\n \n\n\n  <!-----  <button menuClose class="menu-item" ion-item (click)="contact()">\n      <ion-icon name="call" item-left></ion-icon>\n      <span class="menu-text"> {{\'Contact Us\'| translate}} </span>\n    </button>  -->\n    \n    <button menuClose class="menu-item" ion-item (click)="aboutUs()">\n      <ion-icon name="contacts" item-left></ion-icon>\n      <span class="menu-text"> {{\'About Us\'| translate}} </span>\n    </button>\n   <button menuClose class="menu-item" ion-item *ngIf="isLoggedin()" (click)="presentActionSheet()">\n    <ion-icon name="share-social" item-left></ion-icon>\n    <span class="menu-text">{{\'Invite Friends\' | translate}} </span>\n    </button>\n  <!----  <button *ngIf="isLoggedin()" menuClose class="menu-item" ion-item (click)="chat()">\n      <ion-icon name="chatbubbles" item-left></ion-icon>\n      {{\'Chat\' | translate}}\n    </button>  -->\n   \n    <button *ngIf="!isLoggedin()" menuClose class="menu-item" ion-item (click)="login()">\n      <ion-icon name="log-in" item-left></ion-icon>\n      <span class="menu-text"> {{\'Login\'| translate}} </span>\n    </button>\n    <button *ngIf="isLoggedin()" ion-item (click)="confirmLogout()" menuClose class="menu-item">\n      <ion-icon name="log-out" item-left></ion-icon>\n      <span class="menu-text"> {{\'Logout\'| translate}} </span>\n    </button>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/app/app.html"*/,
            selector: "MyApp",
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_9__providers_social_social__["a" /* SocialProvider */]
            //   private translateService: TranslateService
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
//config default
var firebaseConfig = {
    // Jeffrey's Test Credentials
    /*  apiKey: "AIzaSyCZHfwvboxa9-sqmVQyQ5_hQHXq4iWblEI",
     authDomain: "kafas-5f67b.firebaseapp.com",
    databaseURL: "https://kafas-5f67b.firebaseio.com",
     projectId: "kafas-5f67b",
     storageBucket: "kafas-5f67b.appspot.com",
     messagingSenderId: "403161893140",
     appId: "1:403161893140:web:2e2e2ffc893106c52d1a01",
     measurementId: "G-5MSMLZ52NB"*/
    //kafas Live Credentials
    apiKey: "AIzaSyD3c43kcnZrA9C3kGQoDQMxTyyW3tTAZtE",
    authDomain: "kafas-737c9.firebaseapp.com",
    databaseURL: "https://kafas-737c9.firebaseio.com",
    projectId: "kafas-737c9",
    storageBucket: "kafas-737c9.appspot.com",
    messagingSenderId: "892138487332",
    appId: "1:892138487332:web:b888c865c705f346ffa2b1",
    measurementId: "G-N5Z45SE3B0"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(14);
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
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, af, db, toastCtrl, actionSheetCtrl, iab, formBuilder, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.af = af;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.iab = iab;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.public_key = 'pk_live_9c589a259d687674aeadac7fec634b8929fe9f2e'; //Put your paystack Test or Live Key here
        this.channels = ['bank', 'card', 'ussd', 'qr']; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
        this.ref = {
            message: "",
            refernce: "",
            trans: "",
            transaction: "",
            trxref: "",
        };
        this.pincodeMatched = true;
        this.loyaltyPercentage = 0;
        this.loyaltyPoints = 0;
        this.leftLoyaltyPoint = 0;
        this.checked = false;
        this.loyaltyArray = [];
        this.user = {};
        this.formPay = this.formBuilder.group({
            fullname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            amount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.db
            .object("loyalitys")
            .valueChanges()
            .subscribe(function (loyalty) {
            var res = loyalty;
            if (res.enable) {
                _this.loyaltyPercentage = res.loylityPercentage;
                _this.loyaltyLimit = res.minLoyalityPointes;
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
        if (this.af.auth.currentUser) {
            this.db
                .list("/users/" + this.af.auth.currentUser.uid + "/loyaltyPoints")
                .snapshotChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) {
                return changes.map(function (c) { return (__assign({ $key: c.payload.key }, c.payload.val())); });
            })).subscribe(function (res) {
                _this.loyal = res;
            });
        }
    }
    WalletPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.af.auth.currentUser) {
            this.db
                .object("/users/" + this.af.auth.currentUser.uid)
                .valueChanges()
                .subscribe(function (res) {
                _this.user = res;
            });
        }
    };
    //Callback function on successful payment 
    WalletPage.prototype.paymentDone = function (ref) {
        this.db.list("users/" + this.af.auth.currentUser.uid + "/loyaltyPoints").push({
            points: this.chargeAmount,
            message: ref.message,
            trxref: ref.trxref,
            credit: "Credit",
            createdAt: Date.now()
        });
        this.createToaster("Your payment of ₦" + this.chargeAmount + " was successful!", "7000");
        console.log(ref);
        // this.saveLoyaltyData(res.key);
        //ref contains the response from paystack after successful payment
    };
    //Event triggered if User cancel the payment
    WalletPage.prototype.paymentCancel = function () {
        this.createToaster("Error! Gateway Closed.", "7000");
        console.log('gateway closed');
    };
    WalletPage.prototype.whatsPaystack = function () {
        var browser = this.iab.create('https://paystack.com/what-is-paystack');
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;" });
        });
        browser.close();
    };
    WalletPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    WalletPage.prototype.addressMenu = function () {
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
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/wallet/wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Wallet\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="addressMenu()" class="header-btn-cart">\n          <ion-icon name="list"></ion-icon> \n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class="center">\n     <ion-col  col-10 col-xl-8 col-lg-8 col-md-10>\n <!--- <img src="assets/img/card.png">  --->\n\n<ion-row>\n  <h2>Your Wallet Balance is: <br> <span class="bal"> ₦{{ loyaltyPoints | number:\'.2-2\'}}</span></h2>\n</ion-row>\n<hr>\n<br>\n  <h2>Top-up to be able to purchase items</h2>\n<br>\n<form [formGroup]="formPay" name="formPay">\n  <!-----   <ion-item>\n       <ion-label stacked>\n         <ion-icon name="person" item-start></ion-icon>\n         Full Name\n       </ion-label>\n       <ion-input type="text" formControlName="fullname" [(ngModel)]="fullname"></ion-input>\n   </ion-item>   -->\n \n   <ion-row hidden>\n     <ion-col col-12>\n         <ion-item>\n             <ion-label><ion-icon color="danger" name="user.mail"></ion-icon></ion-label>\n             <ion-input type="email" formControlName="email" placeholder="Enter your email address" [(ngModel)]="user.email"></ion-input>\n         </ion-item>\n     </ion-col>\n </ion-row>\n \n  <!-----   <ion-item>\n       <ion-label stacked>\n         <ion-icon name="call" item-start></ion-icon>\n         Phone\n       </ion-label>\n       <ion-input type="number" formControlName="phone"></ion-input>\n   </ion-item>  -->\n <h2>\n   <ion-item>\n         <ion-label stacked>\n           <ion-icon name="card" item-start></ion-icon>\n          <span class="lab"> Enter the amount (min: ₦50) </span>\n         </ion-label>\n         <ion-input type="number" formControlName="amount"  [(ngModel)]="chargeAmount"></ion-input>\n     </ion-item>  \n     <br>\n     <ion-row>\n      <ion-col col-3>\n\n      </ion-col>\n\n      <ion-col col-6>\n     <angular4-paystack [key]="public_key" [email]="user.email" [amount]="chargeAmount * 100" [ref]="random_id" [channels]="channels" (close)="paymentCancel()" (callback)="paymentDone($event)" [class]="\'bwal\'">\n           <button class="bwal" tappable style="width:100%"><ion-icon name="card"></ion-icon> Top-up (₦){{chargeAmount | number:\'.2-2\'}}</button>\n     </angular4-paystack>\n   </ion-col>\n\n   <ion-col col-3>\n\n      </ion-col>\n\n    </ion-row>\n    </h2>\n    <br>\n    <hr>\n     <br>\n     <h2 text-center>Transaction List</h2>\n<br>\n\n<h6 text-center *ngIf="loyal?.length == 0">No Transactions Yet!</h6>\n\n\n\n   <div *ngFor="let a of loyal">\n    <ion-card>\n      <ion-card-header>\n        <h2>Amount: ₦{{a.points | number:\'.2-2\'}}</h2>\n      </ion-card-header>\n      <ion-card-content>\n        <b>Order ID: {{a.orderId}}</b>\n        <h6>Transaction ID: {{a.trxref}}</h6>\n      <!---  <h6>Credit: {{a.credit}}</h6> -->\n        <h6>Status: {{a.message}}</h6>\n        <h6>Type: {{a.credit}}</h6>\n        <h6>Date: {{a.createdAt | date}}</h6>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n     <br>\n </form>\n\n</ion-col>\n\n</ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Web_IonicV3/src/pages/wallet/wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ })

},[307]);
//# sourceMappingURL=main.js.map