import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-exam128',
  templateUrl: './exam128.page.html',
  styleUrls: ['./exam128.page.scss'],
})
export class Exam128Page implements OnInit {

  constructor(public activatedRouter:ActivatedRoute,public navCtrl:NavController) { }

  prom:any;
  exam128:any;
  
  ngOnInit() {

    this.prom=this.activatedRouter.snapshot.paramMap.get('prom2');

  }

  promfexam128(){

    this.navCtrl.navigateForward(`/calnotaf128/${this.prom}/${this.exam128}`)


  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
