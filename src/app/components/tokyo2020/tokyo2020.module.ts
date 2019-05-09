import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tokyo2020RoutingModule } from './tokyo2020-routing.module';
import { FormsModule } from '@angular/forms';
import { Tokyo2020Component } from './tokyo2020/tokyo2020.component';
import { IconsModule } from '../../icons.module';
import { PipeModule } from '../../pipe.module';

@NgModule({
  imports: [
    CommonModule,
    Tokyo2020RoutingModule,
    FormsModule,
    IconsModule,
    PipeModule
  ],
  declarations: [
    Tokyo2020Component
  ]
})
export class Tokyo2020Module { }
