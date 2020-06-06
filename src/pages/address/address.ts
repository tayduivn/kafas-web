import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import {
  AngularFireDatabase,
  AngularFireList
} from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

 
  address: any = {};
  addressList: any = [];
  orderDetails: any = {};
  pincodes: Array<any>;
  public pincodeMatched: boolean = true;
  public userRef: AngularFireList<any>;


  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public navParams: NavParams,   public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public alertCtrl: AlertController) {


      if (this.af.auth.currentUser) {
        this.db
          .list("/users/" + this.af.auth.currentUser.uid + "/address")
          .snapshotChanges()
          .pipe(
            map(changes =>
              changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
            )
          ).subscribe((res: any) => {
            this.addressList = res;
          })

          this.db
      .list("delivery-options")
      .valueChanges()
      .subscribe(res => {
        this.pincodes = res;
        console.log("pincodes-" + JSON.stringify(res));
       });

       this.userRef = this.db.list(
        "users/" + this.af.auth.currentUser.uid + "/loyaltyPoints"
      );
  


    }

  }

 // Add Address
 addAddress() {
  this.navCtrl.push("AddAddressPage", {
    id: 0
  });
}

//Selected Address
selectAddress(key, address) {
  this.pincodeMatched = true;
  this.orderDetails.shippingAddress = address;
  for (let i = 0; i < this.pincodes.length; i++) {
    if (this.pincodes[i].pincode == address.pincode) {
      this.pincodeMatched = true;
    }
  }
}

showAlert(message) {
  let alert = this.alertCtrl.create({
    title: "Sorry!",
    subTitle: message,
    buttons: ["OK"]
  });
  alert.present();
}

navSupport() {
  this.navCtrl.push("ContactPage");
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
