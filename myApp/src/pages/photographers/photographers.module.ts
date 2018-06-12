import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotographersPage } from './photographers';

@NgModule({
  declarations: [
    PhotographersPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotographersPage),
  ],
})
export class PhotographersPageModule {}
