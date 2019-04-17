import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-exam32',
  templateUrl: './exam32.page.html',
  styleUrls: ['./exam32.page.scss'],
})
export class Exam32Page implements OnInit {

  constructor(public activatedRouter:ActivatedRoute,public navCtrl:NavController) { }

  prom:any;
  exam32:any;
  
  ngOnInit() {

    this.prom=this.activatedRouter.snapshot.paramMap.get('prom2');

  }

  promfexam32(){

    this.navCtrl.navigateForward(`/calnotaf32/${this.prom}/${this.exam32}`)


  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
