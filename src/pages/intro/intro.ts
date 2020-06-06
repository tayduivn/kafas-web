import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from "@ionic-native/splash-screen";
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  providers: [SplashScreen]
})
export class IntroPage {

  constructor(public splashscreen: SplashScreen, public navCtrl: NavController, public navParams: NavParams) {
  
   this.splashscreen.hide();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  Register(){
    this.navCtrl.push("RegistrationPage")
  }

  login(){
    this.navCtrl.push("LoginPage")
  }

}
