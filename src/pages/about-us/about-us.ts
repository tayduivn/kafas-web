import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Platform } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";

@IonicPage()
@Component({
  selector: "page-about-us",
  templateUrl: "about-us.html",
  providers: [CallNumber, EmailComposer]
})
export class AboutUsPage {
//  @ViewChild(Slides) slides: Slides;
 // @ViewChild(Nav) nav: Nav;
 // contactNo: any = 08093588553;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public callNumber: CallNumber,
    public navParams: NavParams,
    public emailComposer: EmailComposer
  ) {}

 // goToSlide() {
 //   this.slides.slideTo(2, 500);
//  }

  // callUs() {
 //   this.callNumber
 //     .callNumber(this.contactNo, true)
 //     .then(() => {})
 //     .catch(() => {});
 // }

  gotogoogleMap() {
    this.navCtrl.push("LocationPage");
  }

//  contact() {
//    let email = {
//      // You can change This Email to your own Email to receive contact Email.
 //     to: "info@kafasxpressgas.com",
 //     isHtml: true
 //   };
//    this.emailComposer.open(email);
//  }

navcart(){
  this.navCtrl.push("CartPage")
}

contactus() {
  this.navCtrl.push("ContactPage")
}



}
