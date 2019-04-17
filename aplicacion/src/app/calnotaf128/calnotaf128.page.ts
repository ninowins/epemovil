import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-calnotaf128',
  templateUrl: './calnotaf128.page.html',
  styleUrls: ['./calnotaf128.page.scss'],
})
export class Calnotaf128Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  prom: any;
  exam128: any;


  ngOnInit() {

    this.prom = this.activatedRouter.snapshot.paramMap.get('prom2');
    this.exam128 = this.activatedRouter.snapshot.paramMap.get('exam128');
  }

  verpromfinal() {

    var promex128 = parseFloat(this.prom);
    var notaexam128 = (parseFloat(this.exam128) * 0.3);

    var notaf = (promex128 + notaexam128);
    return notaf

  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}
