import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-location",
  templateUrl: "location.html"
})
export class LocationPage {
  title: string = "Kafas Xpress Gas";
  lat: number = 9.093280;
  lng: number = 7.474160;
  zoom: number = 16;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

contactus(){
  this.navCtrl.push("ContactPage")
}




}
