import { Component, OnInit, ViewChild, OnDestroy, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SubscriptionService } from '../../../services/subscription.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit, OnDestroy {

  isActive: boolean = false;
  isSuccess: boolean = false;
  modal: boolean = false;
  modalRef: BsModalRef;
  template: any = 'template';
  public contactForm: FormGroup;
  subscription: any = { };

  //CHANGE TO TRUE TO CLOSE THE APPICATION FORM
  isClosed: boolean = true;

  private ngUnsubscribe: Subject<any> = new Subject();

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, class: 'modal-dialog-ex'});
  // }

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown: boolean = false;

  constructor ( private route: ActivatedRoute,
                public router: Router,
                private modalService: BsModalService,
                private _subscriptionService: SubscriptionService,
                private formBuilder: FormBuilder ) {
    this.showModal();
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      check: ['', [Validators.required]],
    });
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
    this.isSuccess = false;
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
