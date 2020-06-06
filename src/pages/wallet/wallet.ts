import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, LoadingController, AlertController, ToastController, ActionSheetController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFireDatabase,
  AngularFireObject,
  AngularFireList
} from "@angular/fire/database";
import * as firebase from "firebase/app";
import { map } from 'rxjs/operators';
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  public formPay : FormGroup;
  public public_key = 'pk_live_9c589a259d687674aeadac7fec634b8929fe9f2e'; //Put your paystack Test or Live Key here
  public channels = ['bank', 'card', 'ussd', 'qr']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number

  ref: any = {
    message: "",
    refernce: "",
    trans: "",
    transaction: "",
    trxref: "",

  }

  price: any;
  chargeAmount: any;
  email: any;
  orderkey: any;
  key: any;

  checkout: AngularFireList<any>;
  userDetail: AngularFireObject<any>;
  bookings: AngularFireObject<any>;


  public pincodeMatched: boolean = true;
  public loyaltyPercentage: number = 0;
  public loyaltyPoints: number = 0;
  public leftLoyaltyPoint: number = 0;
  public checked: boolean = false;
  public userRef: AngularFireList<any>;
  public loyaltyArray: any[] = [];
  public loyaltyLimit: number;
  public currency: {};
  user: any = {};
  orderId: any;
  loyal: any;


  constructor(public navCtrl: NavController, public af: AngularFireAuth,
    public db: AngularFireDatabase, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, private iab: InAppBrowser, private formBuilder:FormBuilder, public navParams: NavParams) 
    
    {
    this.formPay = this.formBuilder.group({
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      amount: ['', Validators.required],
      email: ['', Validators.required]
    });


    this.db
    .object("loyalitys")
    .valueChanges()
    .subscribe(loyalty => {
      let res: any = loyalty;
      if (res.enable) {
        this.loyaltyPercentage = res.loylityPercentage;
        this.loyaltyLimit = res.minLoyalityPointes;
      }
    });

  this.userRef = this.db.list(
    "users/" + this.af.auth.currentUser.uid + "/loyaltyPoints"
  );
  this.userRef.valueChanges().subscribe(res => {
    let points: any = res;
    this.loyaltyArray = points;
    let _points: number = 0;
    for (let i = 0; i < this.loyaltyArray.length; i++) {
      _points = Number(
        Number(_points) + Number(this.loyaltyArray[i].points)
      );
      this.loyaltyPoints = _points;
    }
  });


  if (this.af.auth.currentUser) {
    this.db
      .list("/users/" + this.af.auth.currentUser.uid + "/loyaltyPoints")
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe((res: any) => {
        this.loyal = res;
      })
    }  

}

  ngOnInit() {

    if (this.af.auth.currentUser) {
      this.db
        .object("/users/" + this.af.auth.currentUser.uid)
        .valueChanges()
        .subscribe((res: any) => {
          this.user = res;
        });
    }
  
  }
  
    
    
    
    
     //Callback function on successful payment 
  paymentDone(ref: any) {

    this.db.list( "users/" + this.af.auth.currentUser.uid + "/loyaltyPoints" ).push({
      points: this.chargeAmount,
      message: ref.message,
      trxref: ref.trxref,
      credit: "Credit",
      createdAt: Date.now()
      
    })
    

    this.createToaster("Your payment of ₦" + this.chargeAmount + " was successful!", "7000");
        console.log(ref);
       // this.saveLoyaltyData(res.key);
      
      //ref contains the response from paystack after successful payment
    }
     
    
    //Event triggered if User cancel the payment
    paymentCancel() {
      this.createToaster("Error! Gateway Closed.", "7000");
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
