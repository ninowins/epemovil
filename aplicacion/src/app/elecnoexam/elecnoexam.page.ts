import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-elecnoexam',
  templateUrl: './elecnoexam.page.html',
  styleUrls: ['./elecnoexam.page.scss'],
})
export class ElecnoexamPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }


  cal32(){

    this.navCtrl.navigateForward('hora32')
  }
  cal64(){

    this.navCtrl.navigateForward('hora64')
  }
  cal96(){

    this.navCtrl.navigateForward('hora96')
  }
  cal128(){

    this.navCtrl.navigateForward('hora128')
  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
