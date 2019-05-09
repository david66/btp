import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyProcessComponent } from './apply-process/apply-process.component';

const routes: Routes = [
  {
    path: '',
    component: ApplyProcessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyProcessRoutingModule { }
