import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotographersPage } from '../photographers/photographers';
import { LoginPage } from '../login/login';
import { GalleryPage } from '../gallery/gallery';


/**
 * Generated class for the QuickLinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quicklink',
  templateUrl: 'quicklink.html',
})
export class QuickLinkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickLinkPage');
  }


  PhotographersListViewPage(){
		this.navCtrl.push(PhotographersPage);
	}

  RegistrationViewPage(){
    this.navCtrl.push(LoginPage);
  }

  GalleryListViewPage(){
    this.navCtrl.push(GalleryPage);
  }

}
