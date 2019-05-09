import { Component, OnInit, OnDestroy, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { VgStates, VgEvents } from 'videogular2/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RolesService } from '../../services/roles.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SubscriptionService } from '../../services/subscription.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: null, noPause: false, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('cardToggler') cardToggler:ElementRef;

  public contactForm: FormGroup;

  api: VgAPI;
  videoTag;
  activeSlideIndex:number;
  roles: any [ ] = [ ];
  rolesMobile: any [ ] = [ ];
  isActive:boolean = false;
  selectedIndex: number;
  noPause = true;
  quotesInterval = 25000;
  modalRef: BsModalRef;
  isSuccess: boolean = false;
  subscription: any = { };

  private ngUnsubscribe: Subject<any> = new Subject();
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, class: 'modal-dialog-ex'});
  }

  constructor ( private sanitizer: DomSanitizer,
                public router: Router,
                private modalService: BsModalService,
                private _rolesService: RolesService,
                private _subscriptionService: SubscriptionService,
                private formBuilder: FormBuilder ) {
    this.videoTag = this.getVideoTag();
  }

  ngOnInit() {
    this.roles = this._rolesService.getHomeRoles();
    this.rolesMobile = this._rolesService.getFindRoles();

    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      check: ['', [Validators.required]],
    });
  }

  // SUBSCRIPTION
  saveData() {
    this.isSuccess = true;
    console.log(this.contactForm.value);
    this.subscription = { email: this.contactForm.value.email};
    console.log(this.subscription);
    this._subscriptionService.postSubscription(this.subscription)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe( data => {
          console.log(data);
          this.contactForm.reset();
        },
        error => {
          console.error(error);
          this.modalRef.hide();
      });
  }

  redirect() {
    this.router.navigate([`/home`]);
  }

  private getVideoTag() {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<video id="videoHome" muted loop autoplay playsinline disableRemotePlayback style="width:100%">
        <source src="assets/videos/background-video.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
        </video>`
    );
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }

  stopPlayer() {
    this.api.pause();
    this.api.getDefaultMedia().currentTime = 0;
  }

  startPlayer() {
    this.api.play();
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
  removeIndex(index: number) {
    this.selectedIndex = null;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
