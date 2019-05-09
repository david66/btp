import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { Tokyo2020Component } from './tokyo2020/tokyo2020.component';

const routes: Routes = [
  {
    path: '',
    component: Tokyo2020Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    AnimateOnScrollModule
  ]
})
export class Tokyo2020RoutingModule { }
