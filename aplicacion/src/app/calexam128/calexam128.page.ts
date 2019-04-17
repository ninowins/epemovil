import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-calexam128',
  templateUrl: './calexam128.page.html',
  styleUrls: ['./calexam128.page.scss'],
})
export class Calexam128Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  epe1: any;
  epe2: any;
  epe3: any;
  epe4: any;
  eva1: any;
  eva2: any;
  eva3: any;
  eva4: any;




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


  vernotapres() {
    var epe1_ex128 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex128 = (parseFloat(this.epe2) * 0.105);
    var epe3_ex128 = (parseFloat(this.epe3) * 0.175);
    var epe4_ex128 = (parseFloat(this.epe3) * 0.175);
    var eva1_ex128 = (parseFloat(this.eva1) * 0.035);
    var eva2_ex128 = (parseFloat(this.eva2) * 0.035);
    var eva3_ex128 = (parseFloat(this.eva2) * 0.035);
    var eva4_ex128 = (parseFloat(this.eva2) * 0.07);

    var promex128 = (epe1_ex128 + epe2_ex128 + epe3_ex128 + epe4_ex128 + eva1_ex128 + eva2_ex128 + eva3_ex128 + eva4_ex128);

    return promex128;
  }
  vernotamin() {

    var epe1_ex128 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex128 = (parseFloat(this.epe2) * 0.105);
    var epe3_ex128 = (parseFloat(this.epe3) * 0.175);
    var epe4_ex128 = (parseFloat(this.epe3) * 0.175);
    var eva1_ex128 = (parseFloat(this.eva1) * 0.035);
    var eva2_ex128 = (parseFloat(this.eva2) * 0.035);
    var eva3_ex128 = (parseFloat(this.eva2) * 0.035);
    var eva4_ex128 = (parseFloat(this.eva2) * 0.07);

    var promex128 = (epe1_ex128 + epe2_ex128 + epe3_ex128 + epe4_ex128 + eva1_ex128 + eva2_ex128 + eva3_ex128 + eva4_ex128);

    var notaMin128 = (4 - (promex128)) / 0.3;

    return notaMin128;
  }
  /*Este metodo traspasa la nota de presentacion hacia calnotaf32 pasando  por exam32 
  (para calculo de promedio con la nota de examen) */

  mandarprom() {
    var epe1_ex128 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex128 = (parseFloat(this.epe2) * 0.105);
    var epe3_ex128 = (parseFloat(this.epe3) * 0.175);
    var epe4_ex128 = (parseFloat(this.epe3) * 0.175);
    var eva1_ex128 = (parseFloat(this.eva1) * 0.035);
    var eva2_ex128 = (parseFloat(this.eva2) * 0.035);
    var eva3_ex128 = (parseFloat(this.eva2) * 0.035);
    var eva4_ex128 = (parseFloat(this.eva2) * 0.07);

    var prom2 = (epe1_ex128 + epe2_ex128 + epe3_ex128 + epe4_ex128 + eva1_ex128 + eva2_ex128 + eva3_ex128 + eva4_ex128);





    this.navCtrl.navigateForward(`/exam128/${prom2}`)

  }


  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}
