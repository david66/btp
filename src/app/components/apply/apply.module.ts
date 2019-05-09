import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRoutingModule } from './apply-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyComponent } from './apply/apply.component';
import { IconsModule } from '../../icons.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ApplyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    ModalModule
  ],
  declarations: [
      ApplyComponent
  ]
})
export class ApplyModule { }
