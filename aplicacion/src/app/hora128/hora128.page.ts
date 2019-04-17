import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-hora128',
  templateUrl: './hora128.page.html',
  styleUrls: ['./hora128.page.scss'],
})
export class Hora128Page implements OnInit {

 
  constructor(public navCtrl:NavController) { }

  epe1:any;
  epe2:any;
  epe3:any;
  epe4:any;
  eva1:any;
  eva2:any;
  eva3:any;
  eva4:any;

  ngOnInit() {
  }

  cal96(){
    this.navCtrl.navigateForward(`/cal128/${this.epe1}/${this.epe2}/${this.epe3}/${this.epe4}/${this.eva1}/${this.eva2}/${this.eva3}/${this.eva4}`)


  }
  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
