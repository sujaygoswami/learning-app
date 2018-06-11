import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickLinkPage } from '../pages/quicklink/quicklink';

@NgModule({
  declarations: [
    QuickLinkPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickLinkPage),
  ],
})
export class QuickLinkPage {}