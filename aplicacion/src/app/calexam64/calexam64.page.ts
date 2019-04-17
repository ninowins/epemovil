import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calexam64',
  templateUrl: './calexam64.page.html',
  styleUrls: ['./calexam64.page.scss'],
})
export class Calexam64Page implements OnInit {

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
    var epe1_ex64 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex64 = (parseFloat(this.epe2) * 0.14);
    var epe3_ex64 = (parseFloat(this.epe3) * 0.21);
    var eva1_ex64 = (parseFloat(this.eva1) * 0.07);
    var eva2_ex64 = (parseFloat(this.eva2) * 0.07);
    var eva3_ex64 = (parseFloat(this.eva2) * 0.14);

    var promex64 = (epe1_ex64 + epe2_ex64 + epe3_ex64 + eva1_ex64 + eva2_ex64 + eva3_ex64);

    return promex64;
  }
  vernotamin() {

    var epe1_ex64 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex64 = (parseFloat(this.epe2) * 0.14);
    var epe3_ex64 = (parseFloat(this.epe3) * 0.21);
    var eva1_ex64 = (parseFloat(this.eva1) * 0.07);
    var eva2_ex64 = (parseFloat(this.eva2) * 0.07);
    var eva3_ex64 = (parseFloat(this.eva2) * 0.14);

    var promex32 = (epe1_ex64 + epe2_ex64 + epe3_ex64 + eva1_ex64 + eva2_ex64 + eva3_ex64);
    var notaMin32 = (4 - (promex32)) / 0.3;

    return notaMin32;
  }
  /*Este metodo traspasa la nota de presentacion hacia calnotaf32 pasando  por exam32 
  (para calculo de promedio con la nota de examen) */

  mandarprom() {
    var epe1_ex64 = (parseFloat(this.epe1) * 0.07);
    var epe2_ex64 = (parseFloat(this.epe2) * 0.14);
    var epe3_ex64 = (parseFloat(this.epe3) * 0.21);
    var eva1_ex64 = (parseFloat(this.eva1) * 0.07);
    var eva2_ex64 = (parseFloat(this.eva2) * 0.07);
    var eva3_ex64 = (parseFloat(this.eva2) * 0.14);

    var prom2 = (epe1_ex64 + epe2_ex64 + epe3_ex64 + eva1_ex64 + eva2_ex64 + eva3_ex64);




    this.navCtrl.navigateForward(`/exam64/${prom2}`)

  }


  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}