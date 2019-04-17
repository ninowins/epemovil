import { Component } from '@angular/core';
import {NavController} from '@ionic/angular'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage {
  constructor(public navCtrl:NavController, public toastController: ToastController){}

irAcerca(){
    this.navCtrl.navigateForward('acerca')
  }

irHome(){
  this.navCtrl.navigateForward('home')
}

async salir() {
  const toast = await this.toastController.create({
    message: 'No va a salir, Te la creiste we',
    duration: 2000
  });
  toast.present();
}
}
