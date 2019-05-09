import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryItemComponent } from '../models';

@Component({
  selector: 'thumbnail-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  template: `
    <div [lazyImage]="data.poster"><br>
        <div class="thumbTitle">
            <span class="badge badge-danger text-uppercase mr-2" *ngIf="data.order == 0">LIVE</span>
            <span class="primary">{{ data.order }}.</span>
            {{ data.title }}
        </div>
     </div>
     <span class="" style="position:relative; top:-120px; right: -120px; color:white;">{{ data.duration }}</span>
  `,
  styles: [`
    :host {
      width: 100%;
      height: 100%;
    }
    div {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class ThumbnailItemComponent implements GalleryItemComponent {
  @Input() data: any;
}
