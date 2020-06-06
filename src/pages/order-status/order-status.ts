import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "@angular/fire/database";

@IonicPage()
@Component({
  selector: "page-order-status",
  templateUrl: "order-status.html"
})
export class OrderStatusPage {
  orderId: any;
  orderStatus: any = [];
  stat: any = {};

  constructor(
    public af: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.orderId = this.navParams.get("orderId");
    this.af
      .object("/orders/" + this.orderId)
      .valueChanges()
      .subscribe((res: any) => {
        this.stat = res;
        console.log("status---" + JSON.stringify(res));
      });
  }

contact(){
  this.navCtrl.push("ContactPage")
}



}
