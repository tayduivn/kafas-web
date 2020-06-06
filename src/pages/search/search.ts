import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ViewController
} from "ionic-angular";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { map } from "rxjs/operators";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  id: any;
  public menuItems: Array<any> = [];
  public selectedItems: Array<any> = [];
  menuItem: AngularFireList<any>;
  noOfItems: any;
  items: any = [];
  currency: {};
  cid: Array<any> = [];


  constructor( public navCtrl: NavController,
    public af: AngularFireDatabase,
    public viewCtrl: ViewController,
    public app: ViewController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {

      let loader = this.loadingCtrl.create({
       //  content: "Please wait..",
      spinner: "dots",
      cssClass: 'my-loading-class'
    });
      this.currency = JSON.parse(localStorage.getItem('currency'));
      loader.present().then(() => {
        this.menuItem = af.list("/menuItems");
        this.menuItem.snapshotChanges()
          .pipe(
            map(changes =>
              changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
            )
          ).subscribe((res: any) => {
            this.items = res;
          });

        
        // .subscribe((data: any) => {
        //   this.menuItems = [];
        //   data.forEach(item => {
        //     let temp = item.payload.val();
        //     temp["$key"] = item.payload.key;
        //     this.menuItems.push(temp);
        //     subscription.unsubscribe();
        //   });
        loader.dismiss();
        //this.items = [];
  
      });


  }

  

  public onClickCancel() {
    this.navCtrl.push('TabPage')
  }

  ionViewWillEnter() {
    let cart: Array<any> = JSON.parse(localStorage.getItem("Cart"));
    this.noOfItems = cart != null ? cart.length : null;
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

  navigate(item) {
    this.navCtrl.push("ProductDetailsPage", { id: item });
  }

  navcart() {
    this.navCtrl.push("CartPage");
  }
}
