import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import { NgForm } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFireDatabase,
  AngularFireObject,
  AngularFireList
} from "@angular/fire/database";
// import {
//   PayPal,
//   PayPalPayment,
//   PayPalConfiguration
// } from "@ionic-native/paypal";
import { Stripe } from "@ionic-native/stripe";
import { CheckoutService } from "./checkout.service";
import {
  Braintree,
  // ApplePayOptions,
  PaymentUIOptions
} from "@ionic-native/braintree";
import { PaystackPage} from '../paystack/paystack'


// const payPalEnvironmentSandbox = "AcgkbqWGamMa09V5xrhVC8bNP0ec9c37DEcT0rXuh7hqaZ6EyHdGyY4FCwQC-fII-s5p8FL0RL8rWPRB";
const publishableKey = "pk_test_mhy46cSOzzKYuB2MuTWuUb34";
const stripe_secret_key = "sk_test_GsisHcPqciYyG8arVfVe2amE";

// const merchantId = "bbn2tzfk3zbq2jqr";
// const public_key = "d2qg75y3q8zb8rff";
// const private_key = "9cc7ba1d73b912d74e5bb197b24ef6d0";
const braintree_token = "sandbox_3tt6pwn3_bbn2tzfk3zbq2jqr";
// const braintree_token = "sandbox$4gv8zndgpdy6gnvt$e3c0c77402cbf5ba88bc4c76f1f85dc9";

@IonicPage()
@Component({
  selector: "page-checkout",
  templateUrl: "checkout.html",
  providers: [Stripe, Braintree, CheckoutService] //, PayPal, 
})
export class CheckoutPage {

  data:any;

  date: any;
  orderId: any;
  order: any = {};
  public loyaltyLimit: number = 0;
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
  add: string;
  paymentType: string;
  paymentDetails: any = {
    paymentStatus: true
  };
  stripe_card: any = {};
  

  public paymentTypes: any = [
    
   { default: false, type: "Cash on Delivery", value: "COD", logo: "assets/img/cod.png" },
    {
      default: false,
      type: "Paystack",
      value: "Paystack",
      logo: "assets/img/pay2.png"
    },
    {
      default: false,
     type: "Mobile Wallet",
     value: "Wallet",
    logo: "assets/img/card.png"
    }
 ];


  payTotal: any;
  chargeAmount: any;
  key: string;
  orderkey: string;

  constructor(
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    // public payPal: PayPal,
    public stripe: Stripe,
    private braintree: Braintree,
    private checkoutService: CheckoutService,
    private loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
     this.order = this.navParams.get("orderDetails");
    this.loyaltyLimit = this.navParams.get("loyaltyLimit")
    this.str = "#";
    var num = Math.floor(Math.random() * 900000) + 100000;
    this.color = this.str.concat(num);
    this.checkout = db.list("/orders");
    this.payTotal= this.navParams.get('payTotal');
    this.chargeAmount = this.payTotal;

    
  }

  ionViewDidLoad() {

  


 // this.paymentType = "Braintree";
  if (this.af.auth.currentUser) {
    this.userId = this.af.auth.currentUser.uid;
    this.userDetail = this.db.object("/users/" + this.userId);
     this.userDetail.valueChanges().subscribe((res: any) => {
      res.mobileNo
       ? (this.userDetails = {
          email: res.email,
          name: res.name,
          mobileNo: res.mobileNo,
          userid: this.userId
         })
         : (this.userDetails = {
           email: res.email,
         name: res.name,
           userid: this.userId
         });
     });
    }
 }

  choosePaymentType(paymentType) {
    this.paymentType = paymentType;
    this.order.paymentType = paymentType;
    this.paymentDetails.paymentType = paymentType;
  }

  // paywithBraintree() {
  //   const paymentOptions: PaymentUIOptions = {
  //     amount: "14.99",
  //     primaryDescription: "brain tree payment"
  //   };

  //   this.braintree
  //     .initialize(braintree_token)
  //     // .then(() => this.braintree.setupApplePay(appleOptions))
  //     .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
  //     .then((result: any) => {
  //       if (result.userCancelled) {
  //         console.log("User cancelled payment dialog.");
  //       } else {
  //         console.log("User successfully completed payment!");
  //         console.log("Payment Nonce: " + JSON.stringify(result.nonce));
  //         console.log("Payment Result.", JSON.stringify(result));
  //       }
  //     })
  //     .catch((error: string) => console.log("Error- " + JSON.stringify(error)));
  // }

  onCheckOut(form: NgForm) {
  
    this.order.orderId = Math.floor(Math.random() * 90000) + 10000;
   // this.order.userDetails = this.userDetails;
    this.order.userId = this.userId;
    this.order.createdAt = Date.now();
    this.order.status = "Pending";
    this.order.paymentStatus = "Pending";
    this.order.note = "Your order is being Processed.";
    this.order.ntime = Date.now();
   delete this.order.shippingAddress;
   // this.order.statusReading = [
   //   {
   //     title: "Your order has been accepted. You will get notified the status here.",
   //     time: Date.now()
   //   }
   // ];
      //new data



  
    if (this.paymentType == "Paystack") {
      if (this.order.appliedLoyaltyPoints == true) {

        this.showAlert("You have selected the option to pay from wallet! Complete your order by selecting 'Mobile Wallet' and 'Proceed'");

      // const config = {
      //   PayPalEnvironmentProduction: "",
      //   PayPalEnvironmentSandbox: payPalEnvironmentSandbox
      // };
 //     this.checkout.push(this.order).then(res => {
 //       const paymentOptions: PaymentUIOptions = {
 //         amount: this.order.grandTotal,
  //        primaryDescription: "brain tree payment"
 //       };
  //      this.braintree.initialize(braintree_token)
  //        .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
  //        .then((result: any) => {
     //       if (result.userCancelled) {
    //          console.log("User cancelled payment dialog.");
    //        } else {
    //          this.paymentDetails.transactionId = result.clientMetadataId;
     //         this.saveLoyaltyData(res.key);
   //           this.db.object("/orders/" + res.key).update({
   //             paymentDetails: this.paymentDetails,
    //            paymentStatus: "success"
      //        }).then(() => {
      //          this.navCtrl.setRoot("ThankyouPage");
     //         });
     //       }
     //     }).catch((error: any) => {
   //         if (error.message) {
       //       this.showAlert(error.message);
     //       }
   //       });
  //    });
      
    } else {
      let loader = this.loadingCtrl.create({
        content: "please wait.."
      });
      loader.present();
      this.checkout.push(this.order).then(res => {

        console.log("order placed ! " + JSON.stringify(res));
        this.saveLoyaltyData(res.key);

      let data = {

        price: this.order.grandTotal,
        email: this.userDetails.email,
        key: res.key
        
        };
        
        this.navCtrl.push(PaystackPage, data);
        loader.dismiss();
      });

    }

    } else if (this.paymentType == "Mobile Wallet") {

      if (this.order.appliedLoyaltyPoints == true) {

           let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
        loader.present();

        this.checkout.push(this.order).then(res => {



          console.log("order placed ! " + JSON.stringify(res));
          this.saveLoyaltyData(res.key);
          this.db.object("/orders/" + res.key).update({
            paymentStatus: "Approved"
          })
          this.navCtrl.setRoot("ThankyouPage");
          loader.dismiss();
        });
      }
          else {
            this.showAlert("You have not selected the option to pay from wallet! Please go back and select 'Pay from Wallet'");
          }
      
        
      //order with COD
    } else if (this.paymentType == "Cash on Delivery") {

      if (this.order.appliedLoyaltyPoints == true) {

        this.showAlert("You have selected the option to pay from wallet! Complete your order by selecting 'Mobile Wallet' and 'Proceed'");
      
      } else {

           let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
        loader.present();

        this.checkout.push(this.order).then(res => {



          console.log("order placed ! " + JSON.stringify(res));
          this.saveLoyaltyData(res.key);
          this.navCtrl.setRoot("ThankyouPage");
          loader.dismiss();
        });

      }
    }
  }

  saveLoyaltyData(orderId) {
    if (this.order.appliedLoyaltyPoints == true) {
      let loayltyObj: any = {
        credit: "Debit",
        points: -Number(this.payTotal),
        orderId: orderId,
        message: "Approved",
        createdAt: Date.now()
      };
      this.db.list("users/" + this.userId + "/loyaltyPoints").push(loayltyObj);
      this.db.list("/orders/" + orderId + "/loyaltyPoints")
        .push(loayltyObj).then(result => {
          // console.log("loyaltyUpdated-" + result);
        });
    } else {
      console.log("loyalaty Not applied!!");
    }
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }

  contact() {
    this.navCtrl.push("ContactPage")
  }

}
