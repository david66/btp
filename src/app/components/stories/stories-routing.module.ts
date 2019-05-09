import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

const routes: Routes = [
  {
    path: '',
    component: StoriesComponent
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
export class StoriesRoutingModule { }
