import { Component, NgZone, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  ToastController,
  LoadingController,
  Platform,
  Events,
  ModalController,
  ActionSheetController,
  AlertController,
  NavParams
} from "ionic-angular";
import { NgForm } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { TranslateService } from "@ngx-translate/core";
import * as firebase from "firebase/app";

import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';
 import {AutocompletePage} from '../../pages/autocomplete/autocomplete';

//Maps

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class Settings {



  avatar: any = "assets/img/profile.jpg";
  user: any = {};
  url: any = "assets/img/profile.jpg";
  value: any;
  options = [
    {
      language: "ENGLISH",
      value: "en"
    },
    {
      language: "FRENCH",
      value: "fr"
    },
    {
      language: "ARABIC",
      value: "ar"
    }
  ];
  public file: any = {};
  public storageRef = firebase.storage();


  constructor(
    public af: AngularFireAuth,
    private storage: Storage,
    public userservice: UserProvider, 
    public alertCtrl: AlertController,
    public imghandler: ImghandlerProvider,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,
     private modalCtrl:ModalController,
    public translate: TranslateService,
    public navParams: NavParams,
    public zone: NgZone, 
    public events: Events
  ) {
    let value = localStorage.getItem("language");
    this.value = value != null ? value : "en";
    this.translate.setDefaultLang("en");



  }

   showError() {
    const alert = this.alertCtrl.create({
      title: 'Please input an address before saving!',
    //  subTitle: 'Please do not exit or close the app.',
      buttons: ['OK']
    });
    alert.present();
  }

  ngOnInit() {
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    if (this.af.auth.currentUser) {
      this.db
        .object("/users/" + this.af.auth.currentUser.uid)
        .valueChanges()
        .subscribe((res: any) => {
          this.user = res;
          this.user.location = res.location;
        //  this.avatar = res.photoURL;
          this.user.photoURL = res.photoURL ? res.photoURL : "";
          this.avatar = res.photoURL ? res.photoURL : "assets/img/profile.jpg";
        });
    }
  // this.userservice.getuserdetails().then((res: any) => {
  //  this.zone.run(() => {
  //   this.avatar = res.photoURL;
  //  })
  //  })
    loader.dismiss();

 

  }


  //Maps
  

// end

  

  readUrl(event) {
    this.file = (<HTMLInputElement>document.getElementById("file")).files[0];
    let metadata = {
      contentType: "image/*"
    };
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.storageRef
      .ref()
      .child("profile/" + this.file.name)
      .put(this.file, metadata)
      .then(res => {
        this.user.image = res.downloadURL;
        this.url = res.downloadURL;
        this.db
          .object("users/"  + this.af.auth.currentUser.uid + "/image")
          .set(res.downloadURL);
        loader.dismiss();
      })
      .catch(error => {
        loader.dismiss();
      });
  }


  editimage() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.userservice.updateimage(url).then((res: any) => {
        if (res.success) {
          statusalert.setTitle('Updated');
          statusalert.setSubTitle('Your profile pic has been changed successfully! It might take a while for changes to reflect.');
          this.storage.set('avatar', this.avatar);
          statusalert.present();
          this.zone.run(() => {
          this.avatar = url;
         
        })  
        }  
      }).catch((err) => {
          statusalert.setTitle('Failed');
          statusalert.setSubTitle('Your profile pic was not changed. Please try');
          statusalert.present();
      })
      })
  }
 



  changeLanguage() {
    localStorage.setItem("language", this.value);
    if (this.value == "fr") {
      this.platform.setDir("ltr", true);
      this.translate.use("fr");
    } else if (this.value == "ar") {
      this.platform.setDir("rtl", true);
      this.translate.use("ar");
    } else {
      this.platform.setDir("ltr", true);
      this.translate.use("en");
    }
  }

  onSubmit(user: NgForm) {

      if (this.user.location != null){
      

 let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    if (this.af.auth.currentUser) {
      this.db
        .object("/users/" + this.af.auth.currentUser.uid)
        .update({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
       //   photoURL: this.user.photoURL,
          gender: this.user.gender,
          email: this.user.email,
          mobileNo: this.user.mobileNo,
          location: this.user.location
        });
        this.db
        .object("/address/" + this.af.auth.currentUser.uid)
        .update({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          mobileNo: this.user.mobileNo,
          location: this.user.location,
          userId: this.af.auth.currentUser.uid
        })
        .then(() => {
          loader.dismiss();
          this.navCtrl.push('TabPage')
          this.createToaster("user information updated successfully", 3000);
          this.events.publish("imageUrl", this.user);
        });
    }
      
    }else{
      this.showError();
    }
   
  }

  createToaster(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  public onClickCancel() {
    this.navCtrl.push('TabPage')
  }


  addressMenu() {
    const actionSheet = this.actionSheetCtrl.create({
   //   title: 'Modify your album',
       cssClass: 'myPage',
      buttons: [
        {
          text: 'Wishlist',
          role: 'destructive',
          cssClass: 'textSize',
          handler: () => {
            this.navCtrl.push("FavouritePage");
          }
        }, {
          text: 'Contact Us',
          role: 'destructive',
          cssClass: 'textSize',
          handler: () => {
            this.navCtrl.push("ContactPage");
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'myActionSheetBtnStyle',
        }
      ]
    });
    actionSheet.present();
  }
  

// Autocomplete Address


   showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.user.location = data;
    });
    modal.present();
  }



}
