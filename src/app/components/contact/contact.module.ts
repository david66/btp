import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { IconsModule } from '../../icons.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    IconsModule
  ],
  declarations: [
      ContactComponent
  ]
})
export class ContactModule { }
