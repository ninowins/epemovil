import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calexam96',
  templateUrl: './calexam96.page.html',
  styleUrls: ['./calexam96.page.scss'],
})
export class Calexam96Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  epe1: any;
  epe2: any;
  epe3: any;
  eva1: any;
  eva2: any;
  eva3: any;



  ngOnInit() {

    this.epe1 = this.activatedRouter.snapshot.paramMap.get('epe1');
    this.epe2 = this.activatedRouter.snapshot.paramMap.get('epe2');
    this.epe3 = this.activatedRouter.snapshot.paramMap.get('epe3');
    this.eva1 = this.activatedRouter.snapshot.paramMap.get('eva1');
    this.eva2 = this.activatedRouter.snapshot.paramMap.get('eva2');
    this.eva3 = this.activatedRouter.snapshot.paramMap.get('eva3');

  }


  vernotapres() {
    var epe1_ex96 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex96 = (parseFloat(this.epe2) * 0.14);
    var epe3_ex96 = (parseFloat(this.epe3) * 0.21);
    var eva1_ex96 = (parseFloat(this.eva1) * 0.07);
    var eva2_ex96 = (parseFloat(this.eva2) * 0.07);
    var eva3_ex96 = (parseFloat(this.eva2) * 0.14);

    var promex96 = (epe1_ex96 + epe2_ex96 + epe3_ex96 + eva1_ex96 + eva2_ex96 + eva3_ex96);

    return promex96;
  }
  vernotamin() {

    var epe1_ex96 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex96 = (parseFloat(this.epe2) * 0.14);
    var epe3_ex96 = (parseFloat(this.epe3) * 0.21);
    var eva1_ex96 = (parseFloat(this.eva1) * 0.07);
    var eva2_ex96 = (parseFloat(this.eva2) * 0.07);
    var eva3_ex96 = (parseFloat(this.eva2) * 0.14);

    var promex32 = (epe1_ex96 + epe2_ex96 + epe3_ex96 + eva1_ex96 + eva2_ex96 + eva3_ex96);
    var notaMin32 = (4 - (promex32)) / 0.3;

    return notaMin32;
  }
  /*Este metodo traspasa la nota de presentacion hacia calnotaf32 pasando  por exam32 
  (para calculo de promedio con la nota de examen) */

  mandarprom() {
    var epe1_ex96 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex96 = (parseFloat(this.epe2) * 0.14);
    var epe3_ex96 = (parseFloat(this.epe3) * 0.21);
    var eva1_ex96 = (parseFloat(this.eva1) * 0.07);
    var eva2_ex96 = (parseFloat(this.eva2) * 0.07);
    var eva3_ex96 = (parseFloat(this.eva2) * 0.14);

    var prom2 = (epe1_ex96 + epe2_ex96 + epe3_ex96 + eva1_ex96 + eva2_ex96 + eva3_ex96);




    this.navCtrl.navigateForward(`/exam96/${prom2}`)

  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}