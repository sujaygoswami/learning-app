import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { File } from '@ionic-native/file';

import { GalleryPage } from '../pages/gallery/gallery';
import { ShotPage } from '../pages/shot/shot';
import { TrendingPage } from '../pages/trending/trending';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { QuickLinkPage } from '../pages/quicklink/quicklink';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    GalleryPage,
    ShotPage,
    TrendingPage,
    TabsPage,
    DetailPage,
    QuickLinkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GalleryPage,
    ShotPage,
    TrendingPage,
    TabsPage,
    DetailPage,
    QuickLinkPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera, IonicImageViewerModule, File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
