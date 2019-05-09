import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './error/error.component';
import { IconsModule } from '../../icons.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
    FormsModule,
    IconsModule
  ],
  declarations: [
      ErrorComponent
  ]
})
export class ErrorModule { }
