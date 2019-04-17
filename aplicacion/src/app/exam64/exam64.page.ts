import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-exam64',
  templateUrl: './exam64.page.html',
  styleUrls: ['./exam64.page.scss'],
})
export class Exam64Page implements OnInit {

  constructor(public activatedRouter:ActivatedRoute,public navCtrl:NavController) { }

  prom:any;
  exam64:any;
  
  ngOnInit() {

    this.prom=this.activatedRouter.snapshot.paramMap.get('prom2');

  }

  promfexam64(){

    this.navCtrl.navigateForward(`/calnotaf64/${this.prom}/${this.exam64}`)


  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}