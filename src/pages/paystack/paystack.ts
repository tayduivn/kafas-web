import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, LoadingController, AlertController, ToastController, ActionSheetController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFireDatabase,
  AngularFireObject,
  AngularFireList
} from "@angular/fire/database";
import { WalletPage } from '../wallet/wallet';
/**
 * Generated class for the PaystackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paystack',
  templateUrl: 'paystack.html',
})
export class PaystackPage {
  public formPay : FormGroup;
  public public_key = 'pk_live_9c589a259d687674aeadac7fec634b8929fe9f2e'; //Put your paystack Test or Live Key here
  public channels = ['bank', 'card', 'ussd', 'qr']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number

  price: any;
  chargeAmount: any;
  email: any;
  orderkey: any;
  key: any;


  ref: any = {
    message: "",
    refernce: "",
    trans: "",
    transaction: "",
    trxref: "",

  }

  //new data

  data:any;

  date: any;
  orderId: any;
  order: any = {};
  userId: any;
  userDetails: any = {
    email: "",
    name: "",
    userid: ""
  };
  checkout: AngularFireList<any>;
  userDetail: AngularFireObject<any>;
  bookings: AngularFireObject<any>;
  color: any;
  str: any;
  paymentType: string;
  paymentDetails: any = {
    paymentStatus: true
  };
  stripe_card: any = {};





  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public af: AngularFireAuth,
    public db: AngularFireDatabase, public toastCtrl: ToastController, private iab: InAppBrowser, private formBuilder:FormBuilder, public navParams: NavParams) {
    this.formPay = this.formBuilder.group({
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      amount: ['', Validators.required],
      email: ['', Validators.required]
    });


    this.order = this.navParams.get("orderDetails");
    this.str = "#";
    var num = Math.floor(Math.random() * 900000) + 100000;
    this.color = this.str.concat(num);
    this.checkout = db.list("/orders");

  }

ngOnInit(){

this.price= this.navParams.get('price');
this.chargeAmount = this.price;
this.email= this.navParams.get('email');
this.email = this.email;
this.key= this.navParams.get('key');
this.orderkey = this.key;

}

choosePaymentType(paymentType) {
  this.paymentType = paymentType;
  this.order.paymentType = paymentType;
  this.paymentDetails.paymentType = paymentType;
}





 //Callback function on successful payment 
 paymentDone(ref: any) {

  this.db.object("/orders/" + this.key).update({
    paymentStatus: "Approved"
  })

  this.db.object("/orders/" + this.key).update({
    message: ref.message,
    reference: ref.reference,
    trans: ref.trans,
    transaction: ref.transaction,
    trxref: ref.trxref,
  })

    console.log(ref);
   // this.saveLoyaltyData(res.key);
    this.navCtrl.setRoot("ThankyouPage");
  
  //ref contains the response from paystack after successful payment
}
 

//Event triggered if User cancel the payment
paymentCancel() {
  this.createToaster("Error! Gateway Closed.", "10000");
  console.log('gateway closed')
}

whatsPaystack(){

  const browser = this.iab.create('https://paystack.com/what-is-paystack');


  browser.on('loadstop').subscribe(event => {
     browser.insertCSS({ code: "body{color: red;" });
  });
  
  browser.close();

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
        text: 'Wallet',
        role: 'destructive',
        cssClass: 'textSize',
        handler: () => {
          this.navCtrl.push(WalletPage);
        }
      },{
        text: 'Contact Us',
        role: 'destructive',
        cssClass: 'textSize',
        handler: () => {
          this.navCtrl.push("ContactPage");
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


}
