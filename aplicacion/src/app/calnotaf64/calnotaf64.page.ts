import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calnotaf64',
  templateUrl: './calnotaf64.page.html',
  styleUrls: ['./calnotaf64.page.scss'],
})
export class Calnotaf64Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  prom: any;
  exam64: any;


  ngOnInit() {

    this.prom = this.activatedRouter.snapshot.paramMap.get('prom2');
    this.exam64 = this.activatedRouter.snapshot.paramMap.get('exam64');
  }

  verpromfinal() {

    var promex64 = parseFloat(this.prom);
    var notaexam64 = (parseFloat(this.exam64) * 0.3);

    var notaf = (promex64 + notaexam64);
    return notaf

  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}