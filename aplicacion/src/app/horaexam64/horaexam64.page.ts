import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-horaexam64',
  templateUrl: './horaexam64.page.html',
  styleUrls: ['./horaexam64.page.scss'],
})
export class Horaexam64Page implements OnInit {

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
    this.navCtrl.navigateForward(`/calexam64/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}/${this.eva3}`)


  }


  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}
