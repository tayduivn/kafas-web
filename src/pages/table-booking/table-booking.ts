import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  AlertController,
  ToastController,
  LoadingController,
  ActionSheetController,
  Platform,
  Events
} from "ionic-angular";
import { DatePicker } from "@ionic-native/date-picker";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { TranslateService } from "@ngx-translate/core";
import * as firebase from "firebase/app";
import { NgForm } from "@angular/forms";
import { Time } from "@angular/common";

@IonicPage()
@Component({
  selector: "page-table-booking",
  templateUrl: "table-booking.html"
})
export class TableBookingPage {
  public date: any;
  public time: any;
  public person: any;
 public csize: any;
 // public location: any;
  private uid: string;

  public bookTable: {
    userID: string;
    time: Time;
    date: Date;
   // person: number;
    csize: string;
    status: string;
  //  location: string;
  
  };

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
    public navCtrl: NavController,
    public datePicker: DatePicker,
    private dbService: AngularFireDatabase,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,
    public translate: TranslateService,
    public events: Events
  ) {
    this.uid = this.af.auth.currentUser.uid;
  }




  
  onClickBookTable(user: NgForm) {
      this.bookTable = {
        userID: this.uid,
        status: "Pending",
        time: this.time,
        date: this.date,
     //   person: this.person,
        csize: (" " + this.csize) ,
   //     location: this.location
      };
      this.presentConfirm();
   
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: "Confirm Cylinder Refill?",
      message: "After confirmation, our representative would reach out to you via Phone after which, plans for your refill would be processed. ",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.presentToast("Not Intrested?. Going back...");
            this.navCtrl.pop();
          }
        },
        {
          text: "Confirm",
          handler: () => {
            if (this.af.auth.currentUser) {
            this.dbService
              .list("table-bookings")
              .push(this.bookTable)
              .then(res => {
                this.presentToast("Cylinder Refill Schedule has been created succesfully!");
                this.navCtrl.pop();
              });
          }
        }
        }
      ]
    });
    alert.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }


  ngOnInit() {
    if (this.af.auth.currentUser) {
      this.db
        .object("/users/" + this.af.auth.currentUser.uid)
        .valueChanges()
        .subscribe((res: any) => {
          this.user = res;
          this.user.image = res.image ? res.image : "";
          this.url = res.image ? res.image : "assets/img/profile.jpg";
        });
    }
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
        this.db
          .object("users" + "/" + this.af.auth.currentUser.uid + "/image")
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


  createToaster(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
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
  

goToProfile(){
  this.navCtrl.push("Settings")
}



}
