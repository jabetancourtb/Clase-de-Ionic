import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MapPage');
  // }
constructor(public navCtrl: NavController, public navParams: NavParams){
}

ionViewDidLoad(){
 this.loadMap();
 console.log('ionViewDidLoad MapPage');
}

  loadMap(){
    let options: GoogleMapOptions = {
      controls: {
       compass: true,
       myLocation: true,
       myLocationButton: true,
       mapToolbar: true
      },
      gestures: {
        scroll: true,
        tilt: true,
        rotate: true,
        zoom: true 
      }
    };
   this.map = GoogleMaps.create('map_canvas', options);
  }

}