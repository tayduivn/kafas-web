import { Component, NgZone, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  LoadingController,
  Platform,
  ViewController,
  AlertController,
  ModalController,
  ToastController,
  NavParams,
  ActionSheetController,

  Events
} from "ionic-angular";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import {AutocompletePage} from '../../pages/autocomplete/autocomplete';
import * as firebase from 'firebase/app';


declare var google;


@IonicPage()
@Component({
  selector: "page-registration",
  templateUrl: "registration.html",
})
export class RegistrationPage implements OnInit {


  isActiveToggleTextPassword: Boolean = true;
  public toggleTextPassword(): void{
      this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
  }
  public getType() {
      return this.isActiveToggleTextPassword ? 'password' : 'text';
  }


   address: any;
  location: any;
  registration: FormGroup;
  userDetails: AngularFireObject<any>;
  loading: any;

  // autocomplete

  autocompleteItems;
  autocomplete;

  latitude: any;
  longitude: any;
  geo: any
  lat: any;
  lng: any;

  service = new google.maps.places.AutocompleteService();

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public fb: FormBuilder,
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public viewCtrl: ViewController,
     private zone: NgZone,
    public actionSheetCtrl: ActionSheetController,
     private modalCtrl:ModalController,
    private toastCtrl: ToastController,
    private plt: Platform,  private nativeGeocoder: NativeGeocoder, 
    private geolocation: Geolocation, private storage: Storage, public navParams: NavParams
  ) {

        this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };


   }

   ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }


  onSubmit() {
     this.loading = this.loadingCtrl.create({
        //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    

    this.af.auth.createUserWithEmailAndPassword(this.registration.value.email, this.registration.value.password)
      .then((success: any) => {
       const uid = this.af.auth.currentUser.uid;
       localStorage.setItem("name", this.registration.value.firstName + " " + this.registration.value.lastName);
        this.db.object("/users/" + uid).update({
          firstName: this.registration.value.firstName,
        lastName: this.registration.value.lastName,
          name: this.registration.value.firstName + " " + this.registration.value.lastName,
          email: this.registration.value.email,
          mobileNo: this.registration.value.mobileNo,
          location: this.address,
          role: "User",
          uid: uid
        });
        this.db.object("/address/" + uid).update({
          firstName: this.registration.value.firstName,
          lastName: this.registration.value.lastName,
          name: this.registration.value.firstName + " " + this.registration.value.lastName,
        email: this.registration.value.email,
          mobileNo: this.registration.value.mobileNo,
          location: this.address,
          uid: uid
       });
        
        localStorage.setItem("uid", success.uid);
        localStorage.setItem("email", this.registration.value.email);
        localStorage.setItem("firstName", this.registration.value.firstName);
        localStorage.setItem("lastName", this.registration.value.lastName);

        let user = firebase.auth().currentUser;
         user.sendEmailVerification();
          this.loading.dismiss();
         this.showAlert2("A verification email has been sent to " + this.registration.value.email + " Please go to link in the email to verify your account. Link valid for 24 hours.");

       
       // this.navCtrl.setRoot("TabPage");
      }).catch(error => {
       this.loading.dismiss();
        console.log("Firebase failure: " + JSON.stringify(error));
        this.showAlert(error.message);
    });
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }

   showAlert2(message) {
    let alert = this.alertCtrl.create({
      subTitle: message,
       buttons: [
        {
          text: 'OK',
          handler: data => {
            this.af.auth.signOut();
             this.navCtrl.setRoot("LoginPage");
          }
        }
      ]
    });
    alert.present();
  }


  navLogin() {
    this.navCtrl.setRoot("LoginPage");
  }

  ngOnInit(): any {
    this.buildForm();
  }

  //Validation
  buildForm(): void {
    this.registration = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      mobileNo: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$")
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ])
    });
  }


  public onClickCancel() {
    this.navCtrl.push('IntroPage')
  }


// Autocomplete Address


   showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address = data;
    });
    modal.present();
  }




 dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
   this.viewCtrl.dismiss();
    this.autocomplete.query = item;
  //  this.geoCode(this.geo);//convert Address to lat and long
  }

  updateSearch() {

    if (this.autocomplete.query == '') {
     this.autocompleteItems = [];
     return;
    }

    let me = this;
    this.service.getPlacePredictions({
    input: this.autocomplete.query,
    componentRestrictions: {
      country: 'ng'
    }
   }, (predictions, status) => {
     me.autocompleteItems = [];

   me.zone.run(() => {
     if (predictions != null) {
        predictions.forEach((prediction) => {
          me.autocompleteItems.push(prediction.description);
        });
       }
     });
   });
  }

  //convert Address string to lat and long
  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
    this.latitude = results[0].geometry.location.lat();
    this.longitude = results[0].geometry.location.lng();
  //  alert("lat: " + this.latitude + ", long: " + this.longitude);

   });
 }

 isOrders(): boolean {
    return this.autocompleteItems.length == 0 ? false : true;
  }

}
