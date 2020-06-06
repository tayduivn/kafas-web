import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, LoadingController } from "ionic-angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {

  ordersDetails: any[] = [];
  public noOfItems: number;
  public currency: {};
  orderId: any;

    //distance and duration
  duration:any='';

  dlatLng: any;
  key: any;
  customer: any;

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
distance: any;

  constructor(
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
    this.currency = JSON.parse(localStorage.getItem('currency'));
    if (this.af.auth.currentUser) {
      let loader = this.loadingCtrl.create({
       //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
      loader.present().then(() => {
        let userID = this.af.auth.currentUser.uid;
        this.db
          .list("/orders", ref => ref.orderByChild("userId").equalTo(userID))
          .snapshotChanges()
          .pipe(
            map(changes =>
              changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
            )
          ).subscribe((res: any) => {
            this.ordersDetails = res.sort((a,b) => (a as any).finished - (b as any).finished).reverse();
            this.orderId = res.orderId;
            console.log("order Detail" + JSON.stringify(this.ordersDetails));
          })



        // .subscribe(
        //   (res: any) => {
        //     this.ordersDetails = [];
        //     res.forEach(item => {
        //       let temp = item.payload.val();
        //       temp["$key"] = item.payload.key;
        //       this.ordersDetails.push(temp);
        //       // console.log("orders-" + JSON.stringify(this.ordersDetails));
        //     });
        loader.dismiss();
      },
        error => {
          console.error(error);
          loader.dismiss();
        }
      );

    }
  }

  ionViewWillEnter() {
    let cart: Array<any> = JSON.parse(localStorage.getItem("Cart"));
    this.noOfItems = cart != null ? cart.length : null;


  }

  isOrders(): boolean {
    return this.ordersDetails.length == 0 ? false : true;
  }

  orders(orderId) {


 let loader = this.loadingCtrl.create({
      //  content: "Please wait..",
         spinner: "dots",
        cssClass: 'my-loading-class'
      });
    loader.present();

          firebase.database().ref(`track/${orderId}/`).once("value", snapshot => {
   if (snapshot.exists()){

     this.navCtrl.push("TrackPage", { 
       orderId: orderId

        });
      loader.dismiss();
   }
   else {
      loader.dismiss();
     this.createToaster("Order has not been processed for delivery or has already been delivered.", 5000);
   }
})

}



   createToaster(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

navcart(){
  this.navCtrl.push("CartPage")
}



}
