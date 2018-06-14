import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  username = '';
  email = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {


  	let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.push(LoginPage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

}
