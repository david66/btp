import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyClosedComponent } from './apply-closed/apply-closed.component';

const routes: Routes = [
  {
    path: '',
    component: ApplyClosedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyClosedRoutingModule { }
