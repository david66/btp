import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyProcessRoutingModule } from './apply-process-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyProcessComponent } from './apply-process/apply-process.component';
import { IconsModule } from '../../icons.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ApplyProcessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    ModalModule
  ],
  declarations: [
    ApplyProcessComponent
  ]
})
export class ApplyProcessModule { }
