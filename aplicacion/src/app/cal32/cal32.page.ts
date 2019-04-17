import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-cal32',
  templateUrl: './cal32.page.html',
  styleUrls: ['./cal32.page.scss'],
})
export class Cal32Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  

  epe1: any;
  epe2: any;
  epe3: any;
  eva1: any;
  eva2: any;
  prom: any;

  ngOnInit() {

    this.epe1 = this.activatedRouter.snapshot.paramMap.get('epe1');
    this.epe2 = this.activatedRouter.snapshot.paramMap.get('epe2');
    this.epe3 = this.activatedRouter.snapshot.paramMap.get('epe3');
    this.eva1 = this.activatedRouter.snapshot.paramMap.get('eva1');
    this.eva2 = this.activatedRouter.snapshot.paramMap.get('eva2');

  }


  verprom() {
    /*calculo de porcentajes*/
    var epe1_32 = (parseFloat(this.epe1) * 0.1);
    var epe2_32 = (parseFloat(this.epe2) * 0.2);
    var epe3_32 = (parseFloat(this.epe3) * 0.3);
    var eva1_32 = (parseFloat(this.eva1) * 0.2);
    var eva2_32 = (parseFloat(this.eva2) * 0.2);
    /*calculo de promedio*/
    var prom32 = (epe1_32 + epe2_32 + epe3_32 + eva1_32 + eva2_32);
    /*retornar promedio*/
    return prom32

  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }


}
