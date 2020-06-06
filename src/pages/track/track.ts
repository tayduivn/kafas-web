import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, LoadingController, NavController, Platform, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { map } from "rxjs/operators";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import firebase from "firebase";
 
declare var google;
var marker;



/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {
 @ViewChild('map') mapElement: ElementRef;
 @ViewChild('directionsPanel') directionsPanel: ElementRef;


    map: GoogleMap;
   address;
  currentMapTrack = null;
 
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  LatLng: any;
  DLatDLng: any;
  distance: any;
  latitude: number = 0;
  longitude: number = 0;
 
  positionSubscription: Subscription;
  contactNo: any = "";

  //time of arrival

   directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  start:any;
  end:any;
  travelType:any = 'DRIVING';
  route: any;

  //distance and duration
  duration:any='';

  dlatLng: any;
  key: any;
  customer: any;
  orderId: any;

  startLat: any;
  startLng: any;

  mapOptions: any;
  points: any = [];

  public marker = [];
  p1 = [];
  p2 = [];

  markerArray = [];



  track: any;
  destinationLat: any;
  destinationLng: any;

lastLat: any;
lastLng: any;

dName: any;
dPhone: any;


  constructor(public loadingCtrl: LoadingController, private zone: NgZone, public db: AngularFireDatabase, private plt: Platform, private geolocation: Geolocation, private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {



  this.orderId = this.navParams.get("orderId");

    console.log(this.orderId)

         this.db
        .object("/track/" + this.orderId)
        .valueChanges()
        .subscribe((res: any) => {
          this.track = res;
          this.duration = res.duration;
          this.distance = res.distance;
          this.startLat = res.startLat;
          this.startLng = res.startLng;
          this.destinationLat = res.destinationLat;
          this.destinationLng = res.destinationLng;
          this.lastLat = res.lastLat;
          this.lastLng = res.lastLng;
          this.dName = res.dName;
          this.dPhone = res.dPhone;

           console.log(this.lastLat, this.lastLng)

           this.addMarker();


              
       
          
        });


  }


  ionViewDidLoad() {


   this.loadMap();



  }
 

  loadMap(){


    let loader = this.loadingCtrl.create({
   //    content: "Please wait..",
       spinner: "dots",
        cssClass: 'my-loading-class'
      });
    loader.present();

     this.geolocation.getCurrentPosition().then((position) => {


      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.LatLng = latLng;
      

      let mapOptions = {
        center: latLng,
        tilt: 30,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.mapOptions = mapOptions;

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      
          loader.dismiss();
       //   this.addMarkerStart();


        this.startLat = position.coords.latitude;
        this.startLng = position.coords.longitude;
       
        console.log(position.coords.latitude, position.coords.longitude);
    }, (err) => {
      console.log(err);
    });



  }

addMarkerStart(){

    let marker = new google.maps.Marker({
      map: this.map,
    //  icon: 'assets/img/icon3.png',
      animation: google.maps.Animation.DROP,
      position: this.LatLng,
    });

  }

addMarker(){


 var  markerCoords = new google.maps.LatLng(this.lastLat, this.lastLng);

  let markerIcon = {
  url: 'assets/img/carg.png',
  scaledSize: new google.maps.Size(30, 30),
  anchor: new google.maps.Point(20,40) // lets offset the marker image
};

      if (marker && marker.setMap) {
    marker.setMap(null);
}

    marker = new google.maps.Marker({
    map: this.map,
  //  animation: google.maps.Animation.DROP,
   position:  markerCoords,
   icon: markerIcon,
  });
    let content = "<p><u><b><center>Your Order is on it's way</u> &nbsp;&nbsp;&nbsp;<br><u> to you!</center></b></u><br>Driver Name: " + this.dName + "<br>Driver Phone: " + this.dPhone + " &nbsp;&nbsp;&nbsp;</p>";
     this.addInfoWindow(marker, content);


       marker.setMap(this.map);
       
       console.log(marker);




}


 addInfoWindow(marker, content){


    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    
      infoWindow.open(this.map, marker);
  }





}
