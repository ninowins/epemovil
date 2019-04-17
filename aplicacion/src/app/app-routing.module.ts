import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'paginarecibe/:texto/:texto2/:texto3', loadChildren: './paginarecibe/paginarecibe.module#PaginarecibePageModule' },
  { path: 'elecnoexam', loadChildren: './elecnoexam/elecnoexam.module#ElecnoexamPageModule' },
  { path: 'hora32', loadChildren: './hora32/hora32.module#Hora32PageModule' },
  { path: 'hora64', loadChildren: './hora64/hora64.module#Hora64PageModule' },
  { path: 'hora96', loadChildren: './hora96/hora96.module#Hora96PageModule' },
  { path: 'hora128', loadChildren: './hora128/hora128.module#Hora128PageModule' },
  { path: 'cal32/:epe1/:epe2/:epe3/:eva1/:eva2', loadChildren: './cal32/cal32.module#Cal32PageModule' },
  { path: 'cal64/:epe1/:epe2/:epe3/:eva1/:eva2/:eva3', loadChildren: './cal64/cal64.module#Cal64PageModule' },
  { path: 'cal96/:epe1/:epe2/:epe3/:eva1/:eva2/:eva3', loadChildren: './cal96/cal96.module#Cal96PageModule' },
  { path: 'cal128/:epe1/:epe2/:epe3/:epe4/:eva1/:eva2/:eva3/:eva4', loadChildren: './cal128/cal128.module#Cal128PageModule' },
  { path: 'elecexam', loadChildren: './elecexam/elecexam.module#ElecexamPageModule' },
  { path: 'horaexam32', loadChildren: './horaexam32/horaexam32.module#Horaexam32PageModule' },
  { path: 'horaexam64', loadChildren: './horaexam64/horaexam64.module#Horaexam64PageModule' },
  { path: 'horaexam96', loadChildren: './horaexam96/horaexam96.module#Horaexam96PageModule' },
  { path: 'horaexam128', loadChildren: './horaexam128/horaexam128.module#Horaexam128PageModule' },
  { path: 'calexam32/:epe1/:epe2/:epe3/:eva1/:eva2', loadChildren: './calexam32/calexam32.module#Calexam32PageModule' },
  { path: 'calexam64/:epe1/:epe2/:epe3/:eva1/:eva2/:eva3', loadChildren: './calexam64/calexam64.module#Calexam64PageModule' },
  { path: 'calexam96/:epe1/:epe2/:epe3/:eva1/:eva2/:eva3', loadChildren: './calexam96/calexam96.module#Calexam96PageModule' },
  { path: 'calexam128/:epe1/:epe2/:epe3/:epe4/:eva1/:eva2/:eva3/:eva4', loadChildren: './calexam128/calexam128.module#Calexam128PageModule' },
  { path: 'exam32/:prom2', loadChildren: './exam32/exam32.module#Exam32PageModule' },
  { path: 'calnotaf32/:prom2/:exam32', loadChildren: './calnotaf32/calnotaf32.module#Calnotaf32PageModule' },
  { path: 'calnotaf64/:prom2/:exam64', loadChildren: './calnotaf64/calnotaf64.module#Calnotaf64PageModule' },
  { path: 'calnotaf96/:prom2/:exam96', loadChildren: './calnotaf96/calnotaf96.module#Calnotaf96PageModule' },
  { path: 'calnotaf128/:prom2/:exam128', loadChildren: './calnotaf128/calnotaf128.module#Calnotaf128PageModule' },
  { path: 'exam64/:prom2', loadChildren: './exam64/exam64.module#Exam64PageModule' },
  { path: 'exam96/:prom2', loadChildren: './exam96/exam96.module#Exam96PageModule' },
  { path: 'exam128/:prom2', loadChildren: './exam128/exam128.module#Exam128PageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'acerca', loadChildren: './acerca/acerca.module#AcercaPageModule' },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
