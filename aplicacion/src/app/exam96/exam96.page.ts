import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-exam96',
  templateUrl: './exam96.page.html',
  styleUrls: ['./exam96.page.scss'],
})
export class Exam96Page implements OnInit {

  constructor(public activatedRouter:ActivatedRoute,public navCtrl:NavController) { }

  prom:any;
  exam96:any;
  
  ngOnInit() {

    this.prom=this.activatedRouter.snapshot.paramMap.get('prom2');

  }

  promfexam96(){

    this.navCtrl.navigateForward(`/calnotaf96/${this.prom}/${this.exam96}`)


  }

  irMenu(){
    this.navCtrl.navigateForward('menu')
  }

  irHome(){
    this.navCtrl.navigateForward('home')
  
  }

}
