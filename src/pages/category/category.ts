import { Component } from "@angular/core";
import { IonicPage, NavController, LoadingController } from "ionic-angular";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { map } from "rxjs/operators";

@IonicPage()
@Component({
  selector: "page-category",
  templateUrl: "category.html"
})
export class CategoryPage {
  noOfItems: any;
  public Categories: Array<any> = [];
  public Categories2: Array<any> = [];
  categories: AngularFireList<any>;
  id: any;
  public menuItems: Array<any> = [];
  public selectedItems: Array<any> = [];
  menuItem: AngularFireList<any>;
  items: any = [];
  currency: {};

  constructor(
    public navCtrl: NavController,
    public af: AngularFireDatabase,
    public loadingCtrl: LoadingController
  ) {
     let loader = this.loadingCtrl.create({
    //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
    loader.present().then(() => {
      this.categories = af.list("/categories");
      this.categories.snapshotChanges()
        .pipe(
          map(changes =>
            changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
          )
        ).subscribe((res: any) => {
          this.Categories = res;
        })


        this.categories = af.list("/categories2");
        this.categories.snapshotChanges()
          .pipe(
            map(changes =>
              changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
            )
          ).subscribe((res: any) => {
            this.Categories2 = res;
          })

      loader.dismiss();

      // .subscribe(data => {
      //   this.Categories = [];
      //   loader.dismiss();
      //   data.forEach(item => {
      //     let temp = item.payload.toJSON();
      //     temp["$key"] = item.payload.key;
      //     this.Categories.push(temp);
      //   });
      // });

    });
  }

  ionViewWillEnter() {
    let cart: Array<any> = JSON.parse(localStorage.getItem("Cart"));
    this.noOfItems = cart != null ? cart.length : null;
  }

  navigate(id) {
    this.navCtrl.push("ProductListPage", { id: id });
  }

  navcart() {
    this.navCtrl.push("CartPage");
  }

  initializeItems() {
    this.items = this.selectedItems;
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != "") {
      this.items = this.items.filter(data => {
        return data.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  navigateTable(){
this.navCtrl.push("TableBookingPage")
  }
  
}
