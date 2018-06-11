import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  constructor(public navCtrl: NavController) {

  }


  galleryList: any[] = [

		{name: 'Lorem Ipsum', size: '12x18', dp: 'assets/imgs/gallery-one.jpg'},
		{name: 'Site Dolor', size: '30x40', dp: 'assets/imgs/gallery-two.jpg'},
		{name: 'Amet Duet', size: '50x40', dp: 'assets/imgs/gallery-three.jpg'}

	];


	DetailView(galleryListData){
		this.navCtrl.push(DetailPage, {
			galleryListData:galleryListData
		});
	}

  

}
