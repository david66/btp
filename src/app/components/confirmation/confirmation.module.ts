import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { IconsModule } from '../../icons.module';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationRoutingModule,
    FormsModule,
    IconsModule
  ],
  declarations: [
      ConfirmationComponent
  ]
})
export class ConfirmationModule { }
