import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindyourroleRoutingModule } from './findyourrole-routing.module';
import { FormsModule } from '@angular/forms';

import { FindyourroleComponent } from './findyourrole/findyourrole.component';
import { IconsModule } from '../../icons.module';

@NgModule({
  imports: [
    CommonModule,
    FindyourroleRoutingModule,
    FormsModule,
    IconsModule
  ],
  declarations: [
    FindyourroleComponent
  ]
})
export class FindyourroleModule { }
