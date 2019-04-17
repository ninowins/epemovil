import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Calnotaf64Page } from './calnotaf64.page';

const routes: Routes = [
  {
    path: '',
    component: Calnotaf64Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Calnotaf64Page]
})
export class Calnotaf64PageModule {}
