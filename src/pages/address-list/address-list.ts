import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { ActionSheetController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details'
import { Storage } from '@ionic/storage';

// declare let google: any;

@IonicPage()
@Component({
  selector: "page-address-list",
  templateUrl: "address-list.html"
})
export class AddressListPage {
  grandTotal: any;
  subTotal: any;
  address: any = {};
  addressList: any = [];
  payTotal: any;
  pname: any;
  xpname: any;
  name: any;
  couponDiscount: any;
  deductedPrice: any;
  cart: Array<any>;
  orderDetails: any = {};
  pincodes: Array<any>;
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
  
  //added newly
  
  Cart: any[] = [];
  public settings: any = {};
  GrandTotal: any;
  otherTaxes: any;
  setting: AngularFireObject<any>;
  noOfItems: any;
  total: any;
  ntitle: any;
  coupons: any = [];

  public pdp: ProductDetailsPage;
  add: any = {};




  constructor(
    private storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {


    this.currency = JSON.parse(localStorage.getItem('currency'));
    this.Cart = JSON.parse(localStorage.getItem("Cart"));

 //  this.title = JSON.parse(localStorage.getItem("names"));
 // this.title2 = localStorage.getItem("details");

   // localStorage.setItem("names", JSON.stringify(this.Cart));

   // this.title = this.navParams.get("title");
//    localStorage.setItem("title", JSON.stringify(this.title));

    //console.log("cart-"+JSON.stringify(this.Cart));
    if (this.Cart != null) {
      this.noOfItems = this.Cart.length;
      this.callFunction();
    }
    this.db
      .list("/coupons", ref => ref.orderByChild("value"))
      .valueChanges()
      .subscribe(response => {
        this.coupons = response;
      });






    this.currency = JSON.parse(localStorage.getItem('currency'));
    this.orderDetails.grandTotal = this.navParams.get("grandTotal");

      // newly added
      this.Cart = JSON.parse(localStorage.getItem("Cart"));

   //   this.title = JSON.parse(localStorage.getItem("names"));
     // this.title2 = localStorage.getItem("details");

    //  this.orderDetails.quantity = this.navParams.get("pname");
    //  this.orderDetails.name = this.navParams.get("xpname");
    //  this.orderDetails.xpname = this.navParams.get("name")

    
    this.storage.get('title').then((val) => {
      this.orderDetails.ntitle = val
    });

    this.storage.get('thumb').then((val) => {
      this.orderDetails.thumb = val
    });

    this.storage.get('qty').then((val) => {
      this.orderDetails.nqty= val
    });


    this.storage.get('additionService').then((val) => {
      this.orderDetails.naddservice= val
    });

    this.payTotal = this.orderDetails.grandTotal;
    this.orderDetails.couponDiscount = this.navParams.get("couponDiscount");
    this.orderDetails.subTotal = this.navParams.get("subTotal");
    this.orderDetails.deductedPrice = this.navParams.get("deductedPrice");
    this.orderDetails.tax = this.navParams.get("totalVat");
    this.orderDetails.delivery = "Not Assigned";
    this.orderDetails.driverId = " ";

    if (this.orderDetails.grandTotal == undefined) {
      this.navCtrl.push("CartPage");
    }
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

      // .subscribe(res => {
      //   this.addressList = [];
      //   res.forEach(item => {
      //     let temp = item.payload.toJSON();
      //     temp["$key"] = item.payload.key;
      //     this.addressList.push(temp);
      //   });
      // });

      if (this.af.auth.currentUser) {
        this.db
          .object("/users/" + this.af.auth.currentUser.uid)
          .valueChanges()
          .subscribe((res: any) => {
            this.user = res;
          });

          this.db
          .object("/address/" + this.af.auth.currentUser.uid)
          .valueChanges()
          .subscribe((res: any) => {
            this.add = res;
          });

      }

     this.db
      .list("delivery-options")
      .valueChanges()
      .subscribe(res => {
        this.pincodes = res;
        console.log("pincodes-" + JSON.stringify(res));
       });
      this.db
        .object("loyalitys")
        .valueChanges()
        .subscribe(loyalty => {
          let res: any = loyalty;
          if (res.enable) {
            this.loyaltyPercentage = res.loylityPercentage;
            this.loyaltyLimit = this.payTotal;
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
    }
    this.orderDetails.cart;
  }

  // Add Address
  addAddress() {
    this.navCtrl.push("Settings" //, {
    //  id: 0
  //  }
  );
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

  checkOut(data) {
    this.orderDetails.usedLoyaltyPoints =
      this.checked == true ? this.loyaltyPoints : 0;
    this.orderDetails.appliedLoyaltyPoints = this.checked;
    this.orderDetails.orderView = false;

    //new code


    this.orderDetails.name = this.user.name;
    this.orderDetails.email = this.user.email;
    this.orderDetails.mobileNo = this.user.mobileNo;
    this.orderDetails.location = this.user.location;

    if (this.orderDetails.shippingAddress && this.pincodeMatched) {
      this.navCtrl.push("CheckoutPage", {
        orderDetails: this.orderDetails,
        payTotal: this.payTotal

      });
    } else if (this.pincodeMatched == false) {
      this.showAlert("We can not deliver to your Area!");
    } else {
      this.showAlert("Select Your Address First!");
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

  updateLoyality(event) {
    if (this.loyaltyPoints >= this.loyaltyLimit) {
      this.checked = event.value;
      if (event.value == true) {
        if (this.payTotal < this.loyaltyPoints) {
          this.orderDetails.grandTotal = 0;
          this.leftLoyaltyPoint = this.loyaltyPoints - this.payTotal;
        } else if (this.payTotal > this.loyaltyPoints) {
          this.orderDetails.grandTotal = this.payTotal - this.loyaltyPoints;
          this.leftLoyaltyPoint = 0;
        }
      } else {
        this.orderDetails.grandTotal = this.navParams.get("grandTotal");
      }
    }
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


  deleteItem(data) {
    for (var i = 0; i <= this.Cart.length - 1; i++) {
      if (
        this.Cart[i].item.itemId == data.item.itemId &&
        this.Cart[i].item.price.pname == data.item.price.pname
      ) {
        this.Cart.splice(i, 1);
        this.callFunction();
        if (this.Cart.length == 0) {
          localStorage.removeItem("Cart");
          this.noOfItems = null;
        } else {
          localStorage.setItem("Cart", JSON.stringify(this.Cart));
          this.Cart = JSON.parse(localStorage.getItem("Cart"));
          this.noOfItems = this.noOfItems - 1;
        }
      }
    }
  }

  callFunction() {
    this.setting = this.db.object("/settings");
    let subTotal = 0;
    this.setting.valueChanges().subscribe(data => {
      this.settings = data;
      for (var i = 0; i <= this.Cart.length - 1; i++) {
        subTotal = subTotal + this.Cart[i].itemTotalPrice;
      }
      this.subTotal = Number(subTotal.toFixed(2));
      this.otherTaxes = Number (this.settings.taxes.toFixed(2));
      this.total = Number(
        (this.subTotal * this.settings.totalVat / 100).toFixed(2)
      );
      this.GrandTotal = Number((this.subTotal + this.total + this.otherTaxes ).toFixed(2));
    });
  }

 
// to remove data from cart
  remove(data) {
    if (data.item.itemQunatity > 1) {
      data.item.itemQunatity = data.item.itemQunatity - 1;
      for (let i = 0; i <= this.Cart.length - 1; i++) {
        let ExtotalPrice = 0;
        let totalPrice = 0;
        if (
          this.Cart[i].item.itemId == data.item.itemId &&
          this.Cart[i].item.price.pname == data.item.price.pname
        ) {
          this.Cart[i].item.itemQunatity = data.item.itemQunatity;
          for (let j = 0; j <= this.Cart[i].item.extraOptions.length - 1; j++) {
            ExtotalPrice =
              ExtotalPrice + this.Cart[i].item.extraOptions[j].exvalue;
          }
          if (this.Cart[i].item.price.specialPrice) {
            totalPrice = ExtotalPrice + this.Cart[i].item.price.specialPrice;
          } else {
            totalPrice = ExtotalPrice + this.Cart[i].item.price.value;
          }
          this.Cart[i].itemTotalPrice = totalPrice * data.item.itemQunatity;
        }
      }
      localStorage.setItem("Cart", JSON.stringify(this.Cart));
      this.callFunction();
      this.applyCoupon();
    }
  }

  isCart(): boolean {
    return localStorage.getItem("Cart") == null || this.Cart.length == 0
      ? false
      : true;
  }

  applyCoupon() {
    var subTotals = this.subTotal;
    this.deductedPrice = Number(
      (this.couponDiscount / 100 * subTotals).toFixed(2)
    );
    subTotals = subTotals - this.couponDiscount / 100 * subTotals;
    this.GrandTotal = Number((subTotals + this.total + this.otherTaxes).toFixed(2));
  }


  navcart() {
    let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present();
    this.navCtrl.push("CartPage");
    loader.dismiss();
  }



}


