webpackJsonp([26],{

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackPageModule", function() { return TrackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrackPageModule = /** @class */ (function () {
    function TrackPageModule() {
    }
    TrackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__track__["a" /* TrackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__track__["a" /* TrackPage */]),
            ],
        })
    ], TrackPageModule);
    return TrackPageModule;
}());

//# sourceMappingURL=track.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var marker;
/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackPage = /** @class */ (function () {
    function TrackPage(loadingCtrl, zone, db, plt, geolocation, storage, navCtrl, navParams) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.db = db;
        this.plt = plt;
        this.geolocation = geolocation;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
        this.previousTracks = [];
        this.latitude = 0;
        this.longitude = 0;
        this.contactNo = "";
        //time of arrival
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.travelType = 'DRIVING';
        //distance and duration
        this.duration = '';
        this.points = [];
        this.marker = [];
        this.p1 = [];
        this.p2 = [];
        this.markerArray = [];
        this.orderId = this.navParams.get("orderId");
        console.log(this.orderId);
        this.db
            .object("/track/" + this.orderId)
            .valueChanges()
            .subscribe(function (res) {
            _this.track = res;
            _this.duration = res.duration;
            _this.distance = res.distance;
            _this.startLat = res.startLat;
            _this.startLng = res.startLng;
            _this.destinationLat = res.destinationLat;
            _this.destinationLng = res.destinationLng;
            _this.lastLat = res.lastLat;
            _this.lastLng = res.lastLng;
            _this.dName = res.dName;
            _this.dPhone = res.dPhone;
            console.log(_this.lastLat, _this.lastLng);
            _this.addMarker();
        });
    }
    TrackPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    TrackPage.prototype.loadMap = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            //    content: "Please wait..",
            spinner: "dots",
            cssClass: 'my-loading-class'
        });
        loader.present();
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.LatLng = latLng;
            var mapOptions = {
                center: latLng,
                tilt: 30,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.mapOptions = mapOptions;
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            loader.dismiss();
            //   this.addMarkerStart();
            _this.startLat = position.coords.latitude;
            _this.startLng = position.coords.longitude;
            console.log(position.coords.latitude, position.coords.longitude);
        }, function (err) {
            console.log(err);
        });
    };
    TrackPage.prototype.addMarkerStart = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            //  icon: 'assets/img/icon3.png',
            animation: google.maps.Animation.DROP,
            position: this.LatLng,
        });
    };
    TrackPage.prototype.addMarker = function () {
        var markerCoords = new google.maps.LatLng(this.lastLat, this.lastLng);
        var markerIcon = {
            url: 'assets/img/carg.png',
            scaledSize: new google.maps.Size(30, 30),
            anchor: new google.maps.Point(20, 40) // lets offset the marker image
        };
        if (marker && marker.setMap) {
            marker.setMap(null);
        }
        marker = new google.maps.Marker({
            map: this.map,
            //  animation: google.maps.Animation.DROP,
            position: markerCoords,
            icon: markerIcon,
        });
        var content = "<p><u><b><center>Your Order is on it's way</u> &nbsp;&nbsp;&nbsp;<br><u> to you!</center></b></u><br>Driver Name: " + this.dName + "<br>Driver Phone: " + this.dPhone + " &nbsp;&nbsp;&nbsp;</p>";
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
        console.log(marker);
    };
    TrackPage.prototype.addInfoWindow = function (marker, content) {
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        infoWindow.open(this.map, marker);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrackPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('directionsPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrackPage.prototype, "directionsPanel", void 0);
    TrackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-track',template:/*ion-inline-start:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/track/track.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Track Order\n    </ion-title>\n     <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n \n <div #map id="map" style="height:100%"></div>\n\n\n</ion-content>\n\n\n<ion-footer class="foot">\n\n<ion-row>\n\n<ion-col col-12 text-center>\n\n<p><ion-icon color="danger" name="clock"></ion-icon> The estimated time of arrival is in {{duration}}<br><ion-icon color="danger" name="speedometer"></ion-icon> The calculated distance is {{distance}}</p>\n\n</ion-col>\n\n</ion-row>\n\n  </ion-footer>'/*ion-inline-end:"/home/jeffrey/Developer/Projects/Kafas Xpress Gas Limited/Kafas_Mobile_IonicV3/src/pages/track/track.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TrackPage);
    return TrackPage;
}());

//# sourceMappingURL=track.js.map

/***/ })

});
//# sourceMappingURL=26.js.map