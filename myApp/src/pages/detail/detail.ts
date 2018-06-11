import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
	
  galleryListData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.galleryListData = navParams.get('galleryListData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  goback() {
    this.navCtrl.push(GalleryPage);
  }

}
