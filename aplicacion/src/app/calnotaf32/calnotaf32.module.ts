import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Calnotaf32Page } from './calnotaf32.page';

const routes: Routes = [
  {
    path: '',
    component: Calnotaf32Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Calnotaf32Page]
})
export class Calnotaf32PageModule {}
