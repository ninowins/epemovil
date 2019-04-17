import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-cal64',
  templateUrl: './cal64.page.html',
  styleUrls: ['./cal64.page.scss'],
})
export class Cal64Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  epe1: any;
  epe2: any;
  epe3: any;
  eva1: any;
  eva2: any;
  eva3: any;
  prom: any;

  ngOnInit() {

    this.epe1 = this.activatedRouter.snapshot.paramMap.get('epe1');
    this.epe2 = this.activatedRouter.snapshot.paramMap.get('epe2');
    this.epe3 = this.activatedRouter.snapshot.paramMap.get('epe3');
    this.eva1 = this.activatedRouter.snapshot.paramMap.get('eva1');
    this.eva2 = this.activatedRouter.snapshot.paramMap.get('eva2');
    this.eva3 = this.activatedRouter.snapshot.paramMap.get('eva3');


  }


  verprom() {
    /*calculo de porcentajes*/
    var epe1_64 = (parseFloat(this.epe1) * 0.1);
    var epe2_64 = (parseFloat(this.epe2) * 0.2);
    var epe3_64 = (parseFloat(this.epe3) * 0.3);
    var eva1_64 = (parseFloat(this.eva1) * 0.1);
    var eva2_64 = (parseFloat(this.eva2) * 0.1);
    var eva3_64 = (parseFloat(this.eva3) * 0.2);
    /*calculo de promedio*/
    var prom64 = (epe1_64 + epe2_64 + epe3_64 + eva1_64 + eva2_64 + eva3_64);
    /*retornar promedio*/
    return prom64;

  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
