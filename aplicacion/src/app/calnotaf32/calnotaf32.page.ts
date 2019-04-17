import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calnotaf32',
  templateUrl: './calnotaf32.page.html',
  styleUrls: ['./calnotaf32.page.scss'],
})
export class Calnotaf32Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  prom: any;
  exam32: any;


  ngOnInit() {

    this.prom = this.activatedRouter.snapshot.paramMap.get('prom2');
    this.exam32 = this.activatedRouter.snapshot.paramMap.get('exam32');
  }

  verpromfinal() {

    var promex32 = parseFloat(this.prom);
    var notaexam32 = (parseFloat(this.exam32)*0.3);

    var notaf =  (promex32+notaexam32);
    return notaf

  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}
