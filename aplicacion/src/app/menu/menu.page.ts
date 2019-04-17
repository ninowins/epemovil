import { Component } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage {
  constructor(public navCtrl:NavController){}

irAcerca(){
    this.navCtrl.navigateForward('acerca')
  }

irHome(){
  this.navCtrl.navigateForward('home')
}

}
