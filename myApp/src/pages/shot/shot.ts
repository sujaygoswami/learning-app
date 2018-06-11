import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageViewerController } from "ionic-img-viewer";
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-shot',
  templateUrl: 'shot.html'
})
export class ShotPage {

  shotImageHolder: string = 'assets/imgs/shot.jpg';

  public photos: any;
  public base64Image: string;	

  constructor(public navCtrl: NavController, private camera: Camera, private alertCtrl: AlertController, private file: File, public imageViewerCtrl: ImageViewerController) {

  }

  onClick(imageToView) {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

  ngOnInit(){
  	this.photos = [];
  }

  takephoto(){
  	const options: CameraOptions = {
	  quality: 25,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE,
	  sourceType: this.camera.PictureSourceType.CAMERA,
	  saveToPhotoAlbum: true
	}

	this.camera.getPicture(options).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64:
	 this.base64Image = 'data:image/jpeg;base64,' + imageData;
	 this.photos.push(this.base64Image);
	 this.photos.reverse();
	}, (err) => {
	 // Handle error
	});
  }

  deletephoto(index){
  	
		  	let alert = this.alertCtrl.create({
			    title: 'Are you sure about it?',
			    buttons: [
			      {
			        text: 'Not really',
			        role: 'cancel',
			        handler: () => {

			        }
			      },
			      {
			        text: 'Ya, sure!',
			        handler: () => {
			          this.photos.splice(index,1);
			        }
			      }
			    ]
			  });
			  alert.present();
   	}

}


