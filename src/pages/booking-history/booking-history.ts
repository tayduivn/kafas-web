import { Component } from "@angular/core";
import { IonicPage, NavController, ToastController, ActionSheetController } from "ionic-angular";

import { AngularFireDatabase} from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";

@IonicPage()
@Component({
  selector: "page-booking-history",
  templateUrl: "booking-history.html"
})
export class BookingHistoryPage {
  public bookingDetails:  any[] = [];
  private uid: string;
 // BookingDetails: AngularFireList<any>;
  //  private username: string;
  noOfItems: number;


  constructor(
    public navCtrl: NavController,
    private dbService: AngularFireDatabase,
    private toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public af: AngularFireAuth
  ) {
 
 
 //   this.bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
  //  this.noOfItems = this.bookingDetails != null ? this.bookingDetails.length : null;
    

    this.uid = this.af.auth.currentUser.uid;

 //   this.uid = localStorage.getItem("uid");
    this.dbService
      .object("users/" + this.uid)
      .valueChanges()
      .subscribe((user: any) => {
        console.log(user);
     //   if (user != null) {
       //   this.username = user.name;
     //   }

      });
  dbService
      .list("table-bookings")
      .valueChanges()
      .subscribe(
        res => {
          this.bookingDetails = [];
          res.forEach((item: any) => {
            if (item.userID == this.uid) {
          //    item["username"] = this.username;
              this.bookingDetails.push(item);
            }
          });
        },
        error => {
          this.presentToast(error.message);
        }
      );
}

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }


  isBooking(): boolean {
    if (this.bookingDetails.length == 0) {
      return false;
    } else {
      return true;
    }
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
  




}



