import { Component, OnInit, Input } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { VgStates, VgEvents } from 'videogular2/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input ('source') source;
  api:VgAPI;

  constructor() {


  }
  onPlayerReady(api:VgAPI) {
      this.api = api;
  }
  stopPlayer(){
      this.api.pause();
      this.api.getDefaultMedia().currentTime = 0;
  }

    ngOnInit() {
  }
}
