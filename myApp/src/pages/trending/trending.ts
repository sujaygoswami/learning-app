import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-trending',
  templateUrl: 'trending.html'
})

export class TrendingPage {



    constructor(public navCtrl: NavController) {

    }


  slides = [
    {
      title: "Nightmare Lady",
      image: "assets/imgs/slider-one.jpg",
    },
    {
      title: "Careless Look",
      image: "assets/imgs/slider-two.jpg",
    },
    {
      title: "Party Appearance",
      image: "assets/imgs/slider-three.jpg",
    }
  ];





}
