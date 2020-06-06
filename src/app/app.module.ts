import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { AngularFireModule } from "@angular/fire";
import { MyApp } from "./app.component";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { firebaseConfig } from "./firebase.config";
import { CartService } from "../pages/cart.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BrowserModule } from "@angular/platform-browser";
import "firebase/storage";
import { DatePicker } from "@ionic-native/date-picker";
//import { PaystackPage} from '../pages/paystack/paystack';
//import { WalletPage } from '../pages/wallet/wallet';
import { InAppBrowser } from '@ionic-native/in-app-browser'
import { WalletPage } from '../pages/wallet/wallet'
import { PaystackPage } from '../pages/paystack/paystack'
import { Angular4PaystackModule } from 'angular4-paystack';
// import { DashboardPage } from '../pages/dashboard/dashboard'
import { IonicStorageModule } from '@ionic/storage';

import { UserProvider } from '../providers/user/user';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { SocialSharing } from "@ionic-native/social-sharing";
import { SocialProvider } from '../providers/social/social';

import { GooglePlus } from '@ionic-native/google-plus';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder} from '@ionic-native/native-geocoder';
import {AutocompletePage} from '../pages/autocomplete/autocomplete';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [MyApp, WalletPage,  PaystackPage, AutocompletePage],
  imports: [
    IonicModule.forRoot(MyApp),
    Angular4PaystackModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [BrowserModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, WalletPage, PaystackPage, AutocompletePage],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CartService,
    UserProvider,
    ImghandlerProvider,
    FileChooser,
    SocialSharing,
    Camera,
    Geolocation,
    NativeGeocoder,
    InAppBrowser,
    GooglePlus,
    DatePicker,
    SocialProvider
  ]
})
export class AppModule { }
