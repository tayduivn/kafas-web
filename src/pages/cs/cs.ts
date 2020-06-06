import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { EmailComposer } from '@ionic-native/email-composer';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the CsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cs',
  templateUrl: 'cs.html',
  providers: [EmailComposer]
})
export class CsPage {
 
  user: any = {};

  constructor( public af: AngularFireAuth,
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public emailComposer: EmailComposer,
    public toastCtrl: ToastController) {
  }

  onSend(user: NgForm) {
    if (this.af.auth.currentUser) {
      this.user.userId = this.af.auth.currentUser.uid;
      this.db
        .list("/consultancy")
        .push(this.user)
        .then(res => {
          this.user = {};
        });
    }
    this.navCtrl.push('TabPage')
    this.createToaster("Your request has been sent successfully!", "7000");
  }

navcart(){
  this.navCtrl.push("AboutUsPage")
}

    
createToaster(message, duration) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: duration
  });
  toast.present();
}
   

}
