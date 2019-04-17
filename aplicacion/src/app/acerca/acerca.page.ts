import { Component } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-acerca',
  templateUrl: 'acerca.page.html',
  styleUrls: ['acerca.page.scss'],
})
export class AcercaPage {
  constructor(public navCtrl:NavController){}

irMenu(){
    this.navCtrl.navigateForward('menu')
  }

}
