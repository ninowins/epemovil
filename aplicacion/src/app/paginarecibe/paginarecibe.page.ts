import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-paginarecibe',
  templateUrl: './paginarecibe.page.html',
  styleUrls: ['./paginarecibe.page.scss'],
})
export class PaginarecibePage implements OnInit {

  constructor(public activatedRouter:ActivatedRoute) { }
  text:any;
  text2:any;
  text3:any;

  ngOnInit() {

    this.text=this.activatedRouter.snapshot.paramMap.get('texto');
    this.text2=this.activatedRouter.snapshot.paramMap.get('texto2');
    this.text3=this.activatedRouter.snapshot.paramMap.get('texto3');
  }



}
