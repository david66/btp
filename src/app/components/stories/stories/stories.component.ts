import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { StoriesService } from '../../../services/stories.service';
import { VgAPI } from 'videogular2/core';
import { VgStates, VgEvents } from 'videogular2/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories: any [ ] = [ ];
  isActive:boolean = false;
  selectedIndex: number;
  api: VgAPI;
  modalRef: BsModalRef;
  video: string;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, class: 'modal-dialog-ex'});
  }

  constructor ( private sanitizer: DomSanitizer,
                public router: Router,
                private modalService: BsModalService,
                private _storiesService: StoriesService ) {
  }

  ngOnInit() {
    this.stories = this._storiesService.getStories();
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }

  stopPlayer() {
    this.api.pause();
    this.api.getDefaultMedia().currentTime = 0;
    this.video = null;
  }

  startPlayer(video) {
    this.video = video;
    console.log(this.video);
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
  removeIndex(index: number) {
    this.selectedIndex = null;
  }
}
