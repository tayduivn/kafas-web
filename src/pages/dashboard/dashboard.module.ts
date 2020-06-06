import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { PipesModule } from "../../app/pipes.module";


@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    PipesModule],
    exports: [DashboardPage]
})
export class DashboardPageModule {}
