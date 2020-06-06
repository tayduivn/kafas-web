import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SplashScreen } from "@ionic-native/splash-screen";
/**
 * Generated class for the TabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
  providers: [SplashScreen]
})
export class TabPage {

  dashboardRoot = 'DashboardPage'
  searchRoot = 'SearchPage'
  cartRoot = 'CartPage'
  accountRoot = 'Settings'


  constructor(public splashscreen: SplashScreen, public navCtrl: NavController) {

  	 this.splashscreen.hide();
  	 
  }


  
}
