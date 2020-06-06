import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";

@IonicPage()
@Component({
  selector: "page-rating",
  templateUrl: "rating.html"
})
export class RatingPage {
  review: any = {
    rating: "",
    comment: ""
  };
  itemId: "";
  index: "";
  orderId: "";
  reviews: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController
  ) {
    this.itemId = this.navParams.get("itemId");
    this.index = this.navParams.get("index");
    this.orderId = this.navParams.get("orderId");

    this.db
      .list("/reviews/" + this.af.auth.currentUser.uid)
      .valueChanges()
      .subscribe((res: any) => {
        this.reviews = res;
      });
  }

  onSubmit() {
        this.db
          .object("/reviews/" + this.af.auth.currentUser.uid)
          .update({
            rating: this.review.rating,
            comment: this.review.comment,
            orderId: this.orderId,
            userId: this.af.auth.currentUser.uid
          })
          .then(response => { });

      this.db
        .object(
          "/orders/" +
          this.orderId
        )
        .update(this.review)
        .then(success => {
          this.createToaster("Review submitted successfully", "3000");
          this.review = {};
          // this.navCtrl.push("OrderDetailsPage",{
          //   orderId: this.orderId,
          //   index: this.index
          // })
          this.navCtrl.pop();
        });
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
