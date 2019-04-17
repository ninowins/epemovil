import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-horaexam96',
  templateUrl: './horaexam96.page.html',
  styleUrls: ['./horaexam96.page.scss'],
})
export class Horaexam96Page implements OnInit {

  constructor(public navCtrl:NavController) { }

  epe1:any;
  epe2:any;
  epe3:any;
  eva1:any;
  eva2:any;
  eva3:any;

  ngOnInit() {
  }

  cal96(){
    this.navCtrl.navigateForward(`/calexam96/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}/${this.eva3}`)


  }


  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}