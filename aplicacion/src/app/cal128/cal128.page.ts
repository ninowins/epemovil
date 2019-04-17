import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-cal128',
  templateUrl: './cal128.page.html',
  styleUrls: ['./cal128.page.scss'],
})
export class Cal128Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  epe1: any;
  epe2: any;
  epe3: any;
  epe4: any;
  eva1: any;
  eva2: any;
  eva3: any;
  eva4: any;
  prom: any;

  ngOnInit() {

    this.epe1 = this.activatedRouter.snapshot.paramMap.get('epe1');
    this.epe2 = this.activatedRouter.snapshot.paramMap.get('epe2');
    this.epe3 = this.activatedRouter.snapshot.paramMap.get('epe3');
    this.epe4 = this.activatedRouter.snapshot.paramMap.get('epe4');
    this.eva1 = this.activatedRouter.snapshot.paramMap.get('eva1');
    this.eva2 = this.activatedRouter.snapshot.paramMap.get('eva2');
    this.eva3 = this.activatedRouter.snapshot.paramMap.get('eva3');
    this.eva4 = this.activatedRouter.snapshot.paramMap.get('eva4');

  }


  verprom() {
    /*calculo de porcentajes*/
    var epe1_128 = (parseFloat(this.epe1) * 0.1);
    var epe2_128 = (parseFloat(this.epe2) * 0.15);
    var epe3_128 = (parseFloat(this.epe3) * 0.25);
    var epe4_128 = (parseFloat(this.epe4) * 0.25);
    var eva1_128 = (parseFloat(this.eva1) * 0.05);
    var eva2_128 = (parseFloat(this.eva2) * 0.05);
    var eva3_128 = (parseFloat(this.eva3) * 0.05);
    var eva4_128 = (parseFloat(this.eva4) * 0.1);

    /*calculo de promedio*/
    var prom128 = (epe1_128 + epe2_128 + epe3_128 + epe4_128 + eva1_128 + eva2_128 + eva3_128 + eva4_128);
    /*retornar promedio*/
    return prom128;

  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
