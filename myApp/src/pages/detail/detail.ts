import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer, private file: File) {
  	this.galleryListData = navParams.get('galleryListData');
  }

  readonly fileTransfer: FileTransferObject = this.transfer.create();

  download() {
  const url = 'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg';
  this.fileTransfer.download(url, this.file.dataDirectory + 'file.jpg').then((entry) => {
    console.log('download complete: ' + entry.toURL());
  }, (error) => {
    // handle error
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  goback() {
    this.navCtrl.push(GalleryPage);
  }

}
