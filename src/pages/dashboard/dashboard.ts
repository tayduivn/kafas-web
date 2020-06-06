import { Component } from '@angular/core';
import {  IonicPage,
  NavController,
  ToastController,
  LoadingController,
  Platform,
  Events,
  ModalController,
  ActionSheetController,
  NavParams} from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from "@ngx-translate/core";
import * as firebase from "firebase/app";
import { NgForm } from '@angular/forms';
import { WalletPage } from '../wallet/wallet'

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  user: any = {};
  url: any = "assets/img/profile.jpg";
  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 2000,
    pager: false
  };
  Cart: any = [];
  noOfItems: any;
  uid;
  avatar: any = "assets/img/profile.jpg";
  count: any;

  response: any;



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

  public ComingData: Array<any> = [];
  public Categories: Array<any> = [];
  comingData: AngularFireList<any>;
  categories: AngularFireList<any>;

  constructor(public navCtrl: NavController,  public db: AngularFireAuth, public navParams: NavParams,
    public af: AngularFireDatabase,
     private modalCtrl:ModalController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,
    public translate: TranslateService,
    public events: Events,
    public loadingCtrl: LoadingController) {


  

      
  }

  ngOnInit() {
  
  }


  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.Cart = JSON.parse(localStorage.getItem("Cart"));
    this.noOfItems = this.Cart != null ? this.Cart.length : null;
    this.uid = localStorage.getItem('uid');
    if (this.uid != null) {
      if (localStorage.getItem("playerId")) {
        this.af.object("/users/" + this.uid).update({
          playerId: localStorage.getItem("playerId")
        });
      }
    }

   
    if (this.db.auth.currentUser) {
      this.af
        .object("/users/" + this.db.auth.currentUser.uid)
        .valueChanges()
        .subscribe((res: any) => {
          this.user = res;
          this.avatar = res.photoURL;
          localStorage.setItem("uid", res.uid);
          this.user.image = res.image ? res.image : "";
          this.url = res.image ? res.image : "assets/img/profile.jpg";
        }); 
    }
    loader.dismiss();
  }

  navigate(id) {
    console.log(id)
    this.navCtrl.push("ProductListPage", { id: id });
 
  }

  navcart() {
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.navCtrl.push("CartPage");
    loader.dismiss();
  }

  navCategory() {
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.navCtrl.push("CategoryPage");
    loader.dismiss();
  }

  navProductList() {
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.navCtrl.push("SearchPage");
    loader.dismiss();
  }

  navContact() {
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.navCtrl.push("ContactPage")
    loader.dismiss();
  }



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
        this.af
          .object("users" + "/" + this.db.auth.currentUser.uid + "/image")
          .set(res.downloadURL);
        loader.dismiss();
      })
      .catch(error => {
        loader.dismiss();
      });
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
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    if (this.db.auth.currentUser) {
      this.af
        .object("/users/" + this.db.auth.currentUser.uid)
        .update({
          name: this.user.name,
          image: this.user.image,
          email: this.user.email,
          mobileNo: this.user.mobileNo,
          location: this.user.location
        })
        .then(() => {
          loader.dismiss();
          this.createToaster("user information updated successfully", 3000);
          this.events.publish("imageUrl", this.user);
        });
    }
  }

  createToaster(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  navWallet(){
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.navCtrl.push(WalletPage)
    loader.dismiss();
  }

  navCS(){
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.navCtrl.push('CsPage')
    loader.dismiss();
  }

  navRT(){
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.navCtrl.push('RtPage')
    loader.dismiss();
  }

goToSearch(){
  this.navCtrl.push('SearchPage')
}


}

