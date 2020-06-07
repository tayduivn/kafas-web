import { Component, ViewChild, NgZone } from "@angular/core";
import { Nav, Platform, Events, ActionSheetController, AlertController, ToastController, LoadingController, NavParams, App } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";

import { OneSignal } from "@ionic-native/onesignal";
import firebase from "firebase";
import { SocialSharing } from "@ionic-native/social-sharing";
// import { TranslateService } from "@ngx-translate/core";
import { SocialProvider } from "../providers/social/social";
import { UserProvider } from "../providers/user/user";
import { ImghandlerProvider } from "../providers/imghandler/imghandler";
import { Storage } from '@ionic/storage';
import { map } from "rxjs/operators";
import { WalletPage } from "../pages/wallet/wallet"


@Component({
  templateUrl: "app.html",
  
  selector: "MyApp",
  providers: [StatusBar, SplashScreen, OneSignal]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  avatar: any = "assets/img/profile.jpg";
  
  
  Cart: any = [];

  user: any = {};

  showedAlert: boolean;

  noOfItemsInCart: any;
  noOfItemsInFevrt: any;
  noOfItemsInNews: any;
  noOfItemsInOffer: any;
  name: any;
  firstName: any;
  lastName: any;
  email: any;
  imageUrl: any = "assets/img/profile.jpg";
  rootPage: any;
  public uid: string;

  public file: any = {};
  public storageRef = firebase.storage();
  root: any;

  //Wallet
  public loyaltyPoints: number = 0;
  price: any;
  chargeAmount: any;
  orderkey: any;
  key: any;

  checkout: AngularFireList<any>;
  userDetail: AngularFireObject<any>;
  bookings: AngularFireObject<any>;


  public pincodeMatched: boolean = true;
  public loyaltyPercentage: number = 0;
  public leftLoyaltyPoint: number = 0;
  public checked: boolean = false;
  public userRef: AngularFireList<any>;
  public loyaltyArray: any[] = [];
  public loyaltyLimit: number;
  public currency: {};
  orderId: any;
  loyal: any;

  //social Sharing

  

  url ="https://kafasxpressgas.com";
  subject = "Kafas Xpress Mobile App";
  image ="https://res.cloudinary.com/ethion/image/upload/v1590080456/app_icon1_lxnm4a.png";
  message="Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.";
  confirmAlert: any;



  private app: App

  pages: Array<{title: string, component: any}>;

  constructor(
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public userservice: UserProvider, 
    public imghandler: ImghandlerProvider,
    public platform: Platform,
    private storage: Storage,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public statusbar: StatusBar,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public splashscreen: SplashScreen,
   public socialSharing: SocialSharing,
    private oneSignal: OneSignal,
    private events: Events,
    public zone: NgZone, 
    public _social: SocialProvider
 
 //   private translateService: TranslateService
  ) {

  /*   this.splashscreen.show();
    let loader = this.loadingCtrl.create({
      //  content: "Please wait..",
        spinner: "dots",
        cssClass: 'my-loading-class'
      });
    loader.present();*/

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.rootPage = 'DashboardPage'; 
        unsubscribe();
      //  loader.dismiss();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    //  splashscreen.hide();
    });
    this.initializeApp();


    this.url ="https://kafasxpressgas.com";
    this.subject = "Kafas Xpress Mobile App"
    this.image ="https://res.cloudinary.com/ethion/image/upload/v1590080456/app_icon1_lxnm4a.png";
        this.message="Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.";
  
    
    
  }

  

  ngOnInit() {
    this.uid = localStorage.getItem("uid");
    this.email = localStorage.getItem("email");
    if (this.uid != null) {
      this.db
        .object("/users/" + this.uid)
        .valueChanges()
        .subscribe((res: any) => {
          if (res != null) {
            this.name = res.name;
            this.firstName = res.firstName;
            this.lastName = res.lastName;
            this.email = res.email;
            this.imageUrl =
              res.image != "" && res.image != null
                ? res.image
                : "assets/img/profile.jpg";
          } else {
            this.name = res.name;
            this.imageUrl = 'assets/img/profile.jpg';
          }

        });
    }
   // this.useTranslateService();
  //  this.getNewsCount();
    this.getOfferCount();
    this.listenEvents();



    this.url ="https://kafasxpressgas.com";
    this.subject = "Kafas Xpress Mobile App"
    this.image ="https://res.cloudinary.com/ethion/image/upload/v1590080456/app_icon1_lxnm4a.png";
        this.message="Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.";

  }



  readUrl(event) {
    this.file = (<HTMLInputElement>document.getElementById("file")).files[0];
    let metadata = {
      contentType: "image/*"
    };
    let loader = this.loadingCtrl.create({
      content: "please wait.."
    });
    loader.present();
    this.storageRef
      .ref()
      .child("profile/" + this.file.name)
      .put(this.file, metadata)
      .then(res => {
        this.user.image = res.downloadURL;
        this.avatar = res.downloadURL;
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


//  private getNewsCount() {
  //  this.db
  //    .list("/news")
  //    .valueChanges()
 //     .subscribe(res => {
 //       this.noOfItemsInNews = res.length;
 //     });
//  }

  private getOfferCount() {
    this.db
      .list("/menuItems", ref => ref.orderByChild("offer").equalTo(true))
      .valueChanges()
      .subscribe(queriedItems => {
        this.noOfItemsInOffer = queriedItems.length;
      });
  }

  private listenEvents() {
    this.events.subscribe("imageUrl", response => {
      this.imageUrl =
        response.image != "" && response.image != null
          ? response.image
          : "assets/img/profile.jpg";
      this.name = response.name;
    });
  }

  // private useTranslateService() {
  //  let value = localStorage.getItem("language");
  //  let language = value != null ? value : "en";
  //  language == "ar"
  //    ? this.platform.setDir("rtl", true)
  //    : this.platform.setDir("ltr", true);
  //  this.translateService.use(language);
 // }

  openPage(page) {
   this.nav.setRoot(page.component);
  }

  wallet(){
    this.nav.push(WalletPage)
  }

  support(){
    this.nav.push("ContactPage")
  }
  

  initializeApp() {
    this.db.object('/settings/currency').valueChanges().subscribe(res => {
      localStorage.setItem('currency', JSON.stringify(res));
    }, err => {
      localStorage.setItem('currency', JSON.stringify({ currencyName: 'NGN', currencySymbol: 'â‚¦' }));
    });
    if (this.platform.ready()) {
      this.platform.ready().then(res => {
        if (res == "cordova") {
          this.oneSignal.startInit(
            "9740a50f-587f-4853-821f-58252d998399",
            "714618018341"
          );
          this.oneSignal.getIds().then(response => {
            if (this.uid != null) {
              this.uid = localStorage.getItem("uid");
              localStorage.setItem('playerId', response.userId);
              this.db.object("/users/" + this.uid).update({
                playerId: response.userId
              });
            }
          });
          this.oneSignal.inFocusDisplaying(
            this.oneSignal.OSInFocusDisplayOption.InAppAlert
          );
          this.oneSignal.handleNotificationReceived().subscribe(() => { });
          this.oneSignal.handleNotificationOpened().subscribe(() => { });
          this.oneSignal.endInit();
        }
      });
    }
  }

  home() {
  this.nav.setRoot("DashboardPage");
 }

  yourOrders() {
    this.nav.push("OrderListPage");
  }

  addToCart() {
    this.nav.push("CartPage");
  }

  catagory() {
    this.nav.push("CategoryPage");
  }

  favourite() {
    this.nav.push("FavouritePage");
  }

  offer() {
    this.nav.push("OfferPage");
  }

  news() {
    this.nav.push("NewsPage");
  }

  contact() {
    this.nav.push("ContactPage");
  }

  aboutUs() {
    this.nav.push("AboutUsPage");
  }

manageAddress() {
  this.nav.push("AddressPage")
}

  settings() {
    this.nav.push("Settings");
  }

//  invite() {
//    this.socialSharing.share(
//      "Share Kafas Xpress Gas Mobile App with Friends and Family",
//      null,
 //     null,
 //     "#"
  //  );
 // }

  chat() {
    this.nav.push("ChatPage");
  }
  tableBooking() {
    this.nav.push("TableBookingPage");
  }
  bookingHistory() {
    this.nav.push("BookingHistoryPage");
  }

  login() {
    this.nav.setRoot("LoginPage");
  }

 // logout() {
  //  this.af.auth.signOut();
  //  localStorage.removeItem("uid");
  //  localStorage.removeItem('playerId');
 //   this.imageUrl = "assets/img/profile.jpg";
 //   this.nav.setRoot("LoginPage");
 // }






  confirmLogout() {
    let alert = this.alertCtrl.create({
      title: "Are you sure you want to Logout?",
   //   message: "After confirmation, our representative would reach out to you via Phone after which, plans for your refill would be processed. ",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.presentToast("Not Intrested?. Going back...");
            this.nav.pop();
          }
        },
        {
          text: "Yes",
          handler: () => {
            localStorage.removeItem("uid");
           localStorage.removeItem('playerId');
            localStorage.removeItem("firstName");
            localStorage.removeItem("lastName");
            localStorage.removeItem("email");
            this.af.auth.signOut();
            this.nav.setRoot("LoginPage");
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





  isLoggedin() {
    return localStorage.getItem("uid") != null;
  }

  isCart() {
    this.Cart = JSON.parse(localStorage.getItem("Cart"));
    this.noOfItemsInCart = this.Cart != null ? this.Cart.length : null;
    return true;
  }

  addressMenu() {
    const actionSheet = this.actionSheetCtrl.create({
   //   title: 'Modify your album',
       cssClass: 'myPage',
      buttons: [
        {
          text: 'Manage Address',
          role: 'destructive',
          cssClass: 'textSize',
          handler: () => {
            this.nav.push("AddressPage");
          }
        },{
          text: 'Contact Us',
          role: 'destructive',
          cssClass: 'textSize',
          handler: () => {
            this.nav.push("ContactPage");
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
  }

  ionViewDidLoad() {
    this.url ="https://kafasxpressgas.com";
    this.subject = "Kafas Xpress Mobile App"
    this.image ="https://res.cloudinary.com/ethion/image/upload/v1590080456/app_icon1_lxnm4a.png";
        this.message="Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.";
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: "Share on Facebook",
          role: "destructive",
          cssClass: " action-facebook",
          icon: "logo-facebook",
          handler: () => {
            this._social.share(
              "com.facebook.katana",
              "Facebook",
              "facebook",
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        },
        {
          text: "Share on Whatsapp",
          role: "destructive",
          cssClass: " action-whatsup",
          icon: "logo-whatsapp",
          handler: () => {
            this._social.share(
              "com.whatsapp",
              "Whatsapp",
              "whatsapp",
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        },
        {
          text: "Share on Instagram",
          role: "destructive",
          cssClass: " action-instagram",
          icon: "logo-instagram",
          handler: () => {
            this._social.share(
              "com.instagram.android",
              "Instagram",
              "instagram",
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        },
        {
          text: "Share on Twitter",
          role: "destructive",
          cssClass: " action-twitter",
          icon: "logo-twitter",
          handler: () => {
            this._social.share(
              "com.twitter.android",
              "Twitter",
              "twitter",
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        },
        {
          text: "Share on other Social medias",
          role: "destructive",
          cssClass: " action-regular",
          icon: "share",
          handler: () => {
            this._social.share(
              "none",
              "Share",
              "none",
              this.message,
              this.subject,
              this.image,
              this.url
            );
          }
        }
      ]
    });
    actionSheet.present();
  }


  createToaster(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

track(){
   this.nav.push("TrackPage");
}


}
