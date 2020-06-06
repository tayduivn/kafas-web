import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { PipesModule } from "../../app/pipes.module";
import { Ionic2RatingModule } from "ionic2-rating";


@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    IonicPageModule,
    PipesModule,
    Ionic2RatingModule
  ],
  exports: [SearchPage]
})
export class SearchPageModule {}
