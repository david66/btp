import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { VgAPI } from 'videogular2/core';
import { VgStates, VgEvents } from 'videogular2/core';
import { RolesService } from '../../../services/roles.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SubscriptionService } from '../../../services/subscription.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy {

  public contactForm: FormGroup;

  roleId: string;
  isActive: boolean = false;
  shareActive: boolean = false;
  isSuccess: boolean = false;
  api: VgAPI;
  video: string;
  role: any = { };
  modal: boolean = false;
  modalRef: BsModalRef;
  url: string = '';
  subscription: any = { };

  private ngUnsubscribe: Subject<any> = new Subject();
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, class: 'modal-dialog-ex'});
  }

  constructor ( private route: ActivatedRoute,
                public router: Router,
                private _rolesService: RolesService,
                private modalService: BsModalService,
                private _subscriptionService: SubscriptionService,
                private formBuilder: FormBuilder ) { }

  toggleMore(position) {
    position.isActive = !position.isActive;
  }

  ngOnInit() {

    this.url = this.router.url;

    this.route.params.subscribe (
      params => {
        this.roleId = params['id'];
        console.log(this.roleId);
        this.role = this._rolesService.getRole(this.roleId);
        console.log(this.role);
      }
    );

    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      check: ['', [Validators.required]],
    });
  }

  //SUBSCRIPTION
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

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }
  stopPlayer() {
    this.api.pause();
    this.api.getDefaultMedia().currentTime = 0;
  }

  viewVideo(video) {
    this.modal = true;
    this.video = video;
    console.log(this.video);
  }

  resetVideo() {
    this.modal = false;
  }

  closeApply(){
    this.isSuccess = false;
  }

  shareExpanded() {
    this.shareActive = !this.shareActive;
  }

  shareWithLine() {
    console.log(document.URL);
    window.open('https://lineit.line.me/share/ui?url=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL));
    return false;
  }

  copyMessage(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}



