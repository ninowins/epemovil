import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Calnotaf128Page } from './calnotaf128.page';

const routes: Routes = [
  {
    path: '',
    component: Calnotaf128Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Calnotaf128Page]
})
export class Calnotaf128PageModule {}
