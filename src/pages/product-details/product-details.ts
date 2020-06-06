import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController,
  LoadingController
} from "ionic-angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { CartService } from "../../pages/cart.service";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: "page-product-details",
  templateUrl: "product-details.html"
})
export class ProductDetailsPage {
  FireVisible = false;
  id: any;
  count: any = 1;
  isLiked: boolean = false;
  public menuItems: any = {};
  public cart = {
    itemId: String,
    extraOptions: [],
    xname: "",
    xvalue: 0,
    price: {
      name: "",
      value: 0,
      currency: ""
    },
    title: "",
    thumb: String,
    itemQunatity: this.count
  };
  noOfItems: any;
  public selectedItems: Array<any> = [];
  menuItem: AngularFireObject<any>;
  currency: {};
  t: any;

  constructor(
    private storage: Storage,
    public navCtrl: NavController,
    public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public navParams: NavParams,
    public cartService: CartService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
   // localStorage.setItem("names", JSON.stringify(this.cart.title));
   // localStorage.setItem("details", this.cart.title);
  

   

    this.currency = JSON.parse(localStorage.getItem('currency'));
    this.id = this.navParams.get("id");
    this.menuItem = db.object("/menuItems/" + this.id);
    this.menuItem.valueChanges().subscribe((data: any) => {
      if (data != null) {
        this.menuItems = data;
        this.menuItems["$key"] = this.id;
        this.cart.title = data.title;
        this.cart.itemId = this.id;
        this.cart.thumb = data.thumb;
      }
      if (this.af.auth.currentUser) {
        this.db
          .object(
            "/users/" + this.af.auth.currentUser.uid + "/favourite/" + this.id
          )
          .valueChanges()
          .subscribe((res: any) => {
            console.log("fav response--", res);
            if (res != null) {
              this.isLiked = true;
            } else {
              this.isLiked = false;
            }
          });
      }
    });
  }

  ionViewWillEnter() {
    let cart: Array<any> = JSON.parse(localStorage.getItem("Cart"));
    this.noOfItems = cart != null ? cart.length : null;
  }

  addQuantity() {
    if (this.count < 10) {
      this.count = this.count + 1;
      this.cart.itemQunatity = this.count;
    }
  }

  removeQuantity() {
    if (this.count > 1) {
      this.count = this.count - 1;
      this.cart.itemQunatity = this.count;
    }
  }

  navcart() {
    this.navCtrl.push("CartPage")
  }

  navCategory() {
    this.navCtrl.push("CategoryPage");
  }

  sizeOptions(price) {
    this.cart.price = price;
    this.cart.price.value = Number(price.value);
  }

  checkOptions(extraOption) {
    if (this.cart.extraOptions.length != 0) {
      for (var i = 0; i <= this.cart.extraOptions.length - 1; i++) {
        if (this.cart.extraOptions[i].name == extraOption.name) {
          this.cart.extraOptions.splice(i, 1);
          break;
        } else {
          this.cart.extraOptions.push(extraOption);
          break;
        }
      }
    } else {
      this.cart.extraOptions.push(extraOption);
    }
  }

  addToCart(price) {
   if (this.noOfItems < 1) {
      this.cart.price = price;
    this.cart.price.value = Number(price.value);
      this.cartService.OnsaveLS(this.cart);
  this.storage.set('title', this.cart.title);
  this.storage.set('qty', this.cart.itemQunatity);
     this.storage.set('additionService', this.cart.extraOptions);
     this.storage.set('thumb', this.cart.thumb);
      this.navCtrl.push("CartPage");
  } else {
    let alert = this.alertCtrl.create({
        title: "Oops! You can only order one item at a time.",
       subTitle: "Please go to your cart and complete payment or remove the item in your cart to be able to add a new one.",
        buttons: ["OK"]
     });
      alert.present();
  }
  }



  visible = false;

  addToFevrt(key) {
    if (this.af.auth.currentUser) {
      this.db
        .object("/users/" + this.af.auth.currentUser.uid + "/favourite/" + key)
        .update({
          thumb: this.menuItems.thumb,
          title: this.menuItems.title,
          description: this.menuItems.description
        })
        .then(res => {
          this.isLiked = true;
          this.createToaster("added to wishlist", "3000");
        });
    } else {
      this.createToaster("please login first", "3000");
    }
  }

  removeFevrt(key) {
    if (this.af.auth.currentUser) {
      this.db
        .object("/users/" + this.af.auth.currentUser.uid + "/favourite/" + key)
        .remove()
        .then(() => {
          this.isLiked = false;
          this.createToaster("removed from wishlist", "3000");
        });
    }
  }

  createToaster(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  goToProductList(){
    this.navCtrl.push("DashboardPage");
  }
}
