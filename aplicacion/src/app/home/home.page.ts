import { Component } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl:NavController){}


/*
  enviartexto(){
    this.navCtrl.navigateForward(`/paginarecibe/${this.texto}/${this.texto2}/${this.texto3}`)
  
  }

*/
irnoexam(){
  this.navCtrl.navigateForward('elecnoexam')


}
irexam(){
  this.navCtrl.navigateForward('elecexam')

  
}

irMenu(){
  this.navCtrl.navigateForward('menu')
}
}
