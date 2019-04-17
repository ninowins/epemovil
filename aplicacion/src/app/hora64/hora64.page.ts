import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-hora64',
  templateUrl: './hora64.page.html',
  styleUrls: ['./hora64.page.scss'],
})
export class Hora64Page implements OnInit {

  constructor(public navCtrl:NavController) { }

  epe1:any;
  epe2:any;
  epe3:any;
  eva1:any;
  eva2:any;
  eva3:any;

  ngOnInit() {
  }

  cal64(){
    this.navCtrl.navigateForward(`/cal64/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}/${this.eva3}`)


  }
  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
