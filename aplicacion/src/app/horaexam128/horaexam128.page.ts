import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'


@Component({
  selector: 'app-horaexam128',
  templateUrl: './horaexam128.page.html',
  styleUrls: ['./horaexam128.page.scss'],
})
export class Horaexam128Page implements OnInit {

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

  cal128(){
    this.navCtrl.navigateForward(`/calexam128/${this.epe1}/${this.epe2}/${this.epe3}/${this.epe4}/${this.eva1}/${this.eva2}/${this.eva3}/${this.eva4}`)


  }


  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}
