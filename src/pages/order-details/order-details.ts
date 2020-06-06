import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";

@IonicPage()
@Component({
  selector: "page-order-details",
  templateUrl: "order-details.html"
})
export class OrderDetailsPage {
  _orderId: any;
  index: any;
  public orderkey: any;
  od: any = {};
  orderDetails: any = {
    item: { review: "" }
  };
  public currency: {};
  orderDetails2: any = {};
  rev: any = {};

  constructor(
    public af: AngularFireDatabase,
    public db: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.currency = JSON.parse(localStorage.getItem('currency'));
    this._orderId = this.navParams.get("orderId");
    this.orderkey = this.navParams.get("orderKey");
    console.log(this.orderkey)
    this.index = this.navParams.get("index");
    this.af
      .object("/orders/" + this._orderId)
      .valueChanges()
      .subscribe((res: any) => {
        this.od = res;
        console.log("details--" + JSON.stringify(res));
      });

      this.af
      .object("/reviews/" + this.db.auth.currentUser.uid)
      .valueChanges()
      .subscribe((res: any) => {
        this.rev = res;
        console.log("details--" + JSON.stringify(res));
      });
  //    this.af
  //    .object("/orders/" + this._orderId)
  //    .valueChanges()
  //    .subscribe((res: any) => {
  //      this.orderDetails2 = res;
  //      console.log("details--" + JSON.stringify(res));
  //    });
  }

  buyAgain(key) {
    this.navCtrl.push("CategoryPage");
  }

  rate(itemId) {
    this.navCtrl.push("RatingPage", {
      orderId: this._orderId,
      index: this.index,
      itemId: itemId
    });
 
 }


contact(){
  this.navCtrl.push("ContactPage")
}

navcart(){
  this.navCtrl.push("CartPage")
}

}
