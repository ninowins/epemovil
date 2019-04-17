import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-calnotaf96',
  templateUrl: './calnotaf96.page.html',
  styleUrls: ['./calnotaf96.page.scss'],
})
export class Calnotaf96Page implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public navCtrl: NavController) { }

  prom: any;
  exam96: any;


  ngOnInit() {

    this.prom = this.activatedRouter.snapshot.paramMap.get('prom2');
    this.exam96 = this.activatedRouter.snapshot.paramMap.get('exam96');
  }

  verpromfinal() {

    var promex96 = parseFloat(this.prom);
    var notaexam96 = (parseFloat(this.exam96) * 0.3);

    var notaf = (promex96 + notaexam96);
    return notaf

  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }
}