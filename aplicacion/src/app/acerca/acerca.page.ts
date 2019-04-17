import { Component } from '@angular/core';
import {NavController} from '@ionic/angular'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: 'acerca.page.html',
  styleUrls: ['acerca.page.scss'],
})
export class AcercaPage {
  constructor(public navCtrl:NavController, public alertController: AlertController){}

irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Contacto',
      subHeader: 'Si desea contactarnos, visitenos en:',
      message: 'www.AstoraEmpire.net',
      buttons: ['OK']
    });

    await alert.present();
  }

}
