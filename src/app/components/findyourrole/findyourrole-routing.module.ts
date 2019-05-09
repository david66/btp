import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { FindyourroleComponent } from './findyourrole/findyourrole.component';

const routes: Routes = [
  {
    path: '',
    component: FindyourroleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    AnimateOnScrollModule
  ]
})
export class FindyourroleRoutingModule { }
