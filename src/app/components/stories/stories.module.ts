import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesRoutingModule } from './stories-routing.module';
import { FormsModule } from '@angular/forms';
import { StoriesComponent } from './stories/stories.component';
import { IconsModule } from '../../icons.module';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

@NgModule({
  imports: [
    CommonModule,
    StoriesRoutingModule,
    FormsModule,
    IconsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  declarations: [
      StoriesComponent
  ]
})
export class StoriesModule { }
