import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-horaexam32',
  templateUrl: './horaexam32.page.html',
  styleUrls: ['./horaexam32.page.scss'],
})
export class Horaexam32Page implements OnInit {

  constructor(public navCtrl:NavController) { }

  epe1:any;
  epe2:any;
  epe3:any;
  eva1:any;
  eva2:any;

  ngOnInit() {
  }

  cal32(){
    this.navCtrl.navigateForward(`/calexam32/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}`)


  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
