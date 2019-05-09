import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Gallery } from './services/gallery.service';
import { GalleryConfig } from './models';
import { GALLERY_CONFIG } from './utils/gallery.token';

import { GalleryComponent } from './components/gallery.component';
import { GalleryCoreComponent } from './components/gallery-core.component';
import { GalleryNavComponent } from './components/gallery-nav.component';
import { GalleryThumbComponent } from './components/gallery-thumb.component';
import { GalleryDotsComponent } from './components/gallery-dots.component';
import { GallerySliderComponent } from './components/gallery-slider.component';
import { GalleryCounterComponent } from './components/gallery-counter.component';

import { LazyDirective } from './directives/lazy.directive';
import { TapClickDirective } from './directives/tap-click.directive';
import { GalleryItemDirective } from './directives/gallery-item.directive';
import { ImageItemComponent } from './templates/image-item.component';
import { VideoItemComponent } from './templates/video-item.component';
import { IframeItemComponent } from './templates/iframe-item.component';
import { ThumbnailItemComponent } from './templates/thumbnail-item.component';

import { VideoComponent } from './components/video/video.component';

import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgCoreModule} from 'videogular2/core';
import { VideoJwplayerComponent } from './components/video-jwplayer/video-jwplayer.component';


export function galleryFactory(galleryConfig: GalleryConfig) {
  return new Gallery(galleryConfig);
}

@NgModule({
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [
      VideoComponent,
    GalleryComponent,
    GalleryCoreComponent,
    GalleryNavComponent,
    GalleryThumbComponent,
    GalleryDotsComponent,
    GallerySliderComponent,
    GalleryCounterComponent,
    ImageItemComponent,
    VideoItemComponent,
    IframeItemComponent,
    ThumbnailItemComponent,
    GalleryItemDirective,
    LazyDirective,
    TapClickDirective,
    VideoJwplayerComponent
  ],
  exports: [
    GalleryComponent,
    LazyDirective,
    TapClickDirective
  ],
  entryComponents: [
    IframeItemComponent,
    ImageItemComponent,
    VideoItemComponent,
    ThumbnailItemComponent
  ]
})
export class GalleryModule {
  static forRoot(config?: GalleryConfig) {

    return {
      ngModule: GalleryModule,
      providers: [
        {
          provide: GALLERY_CONFIG,
          useValue: config
        },
        {
          provide: Gallery,
          useFactory: galleryFactory,
          deps: [GALLERY_CONFIG]
        }
      ]
    };
  }
}
