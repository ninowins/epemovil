import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-elecexam',
  templateUrl: './elecexam.page.html',
  styleUrls: ['./elecexam.page.scss'],
})
export class ElecexamPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  cal32() {

    this.navCtrl.navigateForward('horaexam32')
  }
  cal64() {

    this.navCtrl.navigateForward('horaexam64')
  }
  cal96() {

    this.navCtrl.navigateForward('horaexam96')
  }
  cal128() {

    this.navCtrl.navigateForward('horaexam128')
  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

  

}
