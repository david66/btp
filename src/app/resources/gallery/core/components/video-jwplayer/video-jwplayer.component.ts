import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';


declare var jwplayer: any;

@Component({
  selector: 'app-video-jwplayer',
  templateUrl: './video-jwplayer.component.html',
  styleUrls: ['./video-jwplayer.component.scss']
})
export class VideoJwplayerComponent implements OnInit, OnChanges, AfterViewInit {

    @Input ('source') source;
    @Input ('poster') poster;
    @Input ('order') order;

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {

  }

   ngAfterViewInit() {
       jwplayer.key="EvTXUhs+qAG5+9k3zS6SV726FzYQjWVpw148kA==";
       jwplayer(this.order).setup({
           "file": this.source,
           "image": this.poster,
           "height": 788,
           "width": 1050
       });
   }

}
