import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElecnoexamPage } from './elecnoexam.page';

const routes: Routes = [
  {
    path: '',
    component: ElecnoexamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElecnoexamPage]
})
export class ElecnoexamPageModule {}
