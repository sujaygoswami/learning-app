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
import { PhotographersPage } from '../pages/photographers/photographers';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    GalleryPage,
    ShotPage,
    TrendingPage,
    TabsPage,
    DetailPage,
    QuickLinkPage,
    PhotographersPage,
    RegistrationPage,
    LoginPage
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
    QuickLinkPage,
    PhotographersPage,
    RegistrationPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera, IonicImageViewerModule, File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
