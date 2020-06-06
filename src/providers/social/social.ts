import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, Platform} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/*
  Generated class for the SocialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocialProvider {

  
  constructor(private socialSharing: SocialSharing,
    private platform: Platform,
    private toastCtrl: ToastController) {
}

share(packageName: string,
appName: string,
social: string,
url ="https://kafasxpressgas.com",
subject = "Kafas Xpress Mobile App",
image ="https://res.cloudinary.com/ethion/image/upload/v1581447861/WhatsApp_Image_2019-10-15_at_07.18.46_dxk97g.png",
message="Never run out of cooking gas with our gas delivery app and smart gas cylinders. Our on-demand gas delivery service makes it easy for you to get cooking gas delivered at the comfort of your home.",

) {
this.platform.ready().then(() => {
if (social === "facebook") {
this.socialSharing
.canShareVia(
  packageName,
  message,
  subject,
  image,
  url
)
.then(() => {
  this.socialSharing
    .shareViaFacebook(message, image, url)
    .catch(err => {
      this.showSuccesToast(
        "There was a problem please try later"
      );
    });
})
.catch(err => {
  this.showFailToast(appName);
});
} else if (social === "whatsapp") {
this.socialSharing
.canShareVia(
  packageName,
  message,
  subject,
  image,
  url
)
.then(() => {
  this.socialSharing
    .shareViaWhatsApp(message, image, url)
    .catch(err => {
      this.showSuccesToast(
        "There was a problem please try later"
      );
    });
})
.catch(err => {
  this.showFailToast(appName);
});
} else if (social === "instagram") {
this.socialSharing
.canShareVia(
  packageName,
  message,
  subject,
  image,
  url
)
.then(() => {
  this.socialSharing
    .shareViaInstagram(message, image)
    .catch(err => {
      this.showSuccesToast(
        "There was a problem please try later"
      );
    });
})
.catch(err => {
  this.showFailToast(appName);
});
} else if (social === "twitter") {
this.socialSharing
.canShareVia(
  packageName,
  message,
  subject,
  image,
  url
)
.then(() => {
  this.socialSharing
    .shareViaTwitter(message, image, url)
    .catch(err => {
      this.showSuccesToast(
        "There was a problem please try later"
      );
    });
})
.catch(err => {
  this.showFailToast(appName);
});
} else {
this.socialSharing
.share(message, subject, image, url)
.catch(err => {
  this.showSuccesToast("There was a problem please try later");
});
}
});
}

async showSuccesToast(message: string) {
const toast = await this.toastCtrl.create({
message: message,
duration: 5000,
position: 'bottom',
showCloseButton: true
});
toast.present();
}

async showFailToast(appName: string) {
const toast = await this.toastCtrl.create({
message: `${appName} is not installed on your device`,
duration: 5000,
position: 'top'
});
toast.present();
}

}