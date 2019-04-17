import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-hora32',
  templateUrl: './hora32.page.html',
  styleUrls: ['./hora32.page.scss'],
})
export class Hora32Page implements OnInit {

  constructor(public navCtrl:NavController) { }

  epe1:any;
  epe2:any;
  epe3:any;
  eva1:any;
  eva2:any;

  ngOnInit() {
  }

  cal32(){
    this.navCtrl.navigateForward(`/cal32/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}`)


  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
