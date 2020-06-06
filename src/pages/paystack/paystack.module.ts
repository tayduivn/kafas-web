import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaystackPage } from './paystack';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(PaystackPage),
    Angular4PaystackModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: []
})
export class PaystackPageModule {}
