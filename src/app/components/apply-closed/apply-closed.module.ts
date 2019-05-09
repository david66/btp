import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyClosedRoutingModule } from './apply-closed-routing.module';
import { FormsModule } from '@angular/forms';
import { ApplyClosedComponent } from './apply-closed/apply-closed.component';
import { IconsModule } from '../../icons.module';

@NgModule({
  imports: [
    CommonModule,
    ApplyClosedRoutingModule,
    FormsModule,
    IconsModule
  ],
  declarations: [
    ApplyClosedComponent
  ]
})
export class ApplyClosedModule { }
