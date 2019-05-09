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
  selector: 'app-apply-process',
  templateUrl: './apply-process.component.html',
  styleUrls: ['./apply-process.component.scss']
})
export class ApplyProcessComponent implements OnInit, OnDestroy {

  isActive: boolean = false;
  isSuccess: boolean = false;
  modal: boolean = false;
  modalRef: BsModalRef;
  template: any = 'template';
  public contactForm: FormGroup;
  subscription: any = { };
  steps: any [ ] = [ ];

  expanded: boolean = false;
  isOpen: boolean = true;

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
                private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      check: ['', [Validators.required]],
    });

    this.steps = [
      {
        title: 'BTP in 3 steps',
        text: `
            <div class="containerCarrousel">
              <div class="row justify-content-center text-center">
                <div class="col-md-4">
                  <div class="card mb-4 animated">
                    <img class="card-img-top" src="assets/step1.png" alt="Card image cap">
                    <div class="card-body py-md-5">
                      <h5 class="card-title">1. Get to know the BTP</h5>
                      <p class="card-text text-left">Go through our website and learn more about OBS and the different areas offered through the BTP for the Olympic and Paralympic Games.
                        Attend an introduction presentation in May at one of our partner universities.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4 animated">
                    <img class="card-img-top" src="assets/step2.png" alt="Card image cap">
                    <div class="card-body py-md-5">
                      <h5 class="card-title">2. Online Application (May 2019)</h5>
                      <p class="card-text text-left">Complete the online form and select the training workshop you wish to attend. Students will be required to take a quick online English test.
                        Applications are accepted on a first-come, first-served basis. </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4 animated">
                    <img class="card-img-top" src="assets/step3.png" alt="Card image cap">
                    <div class="card-body py-md-5">
                      <h5 class="card-title">3. Training Workshop (Oct-Nov 2019)</h5>
                      <p class="card-text text-left">The BTP training workshops consist of a general session and, for most of the positions, a specialised training seminar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> `
      },
      {
        title: 'Preparing for the Application',
        text: `
          <div class="my-5">
            <h5 class="card-title my-5">Application checklist</h5>
            <ul class="card-text text-left">
              <li>Check your eligibility: You must be 18 years or over before Games-time; you are a student in good standing and enrolled in a Japanese
                university or a recent graduate student (out of university for less than two years); and you have at least an intermediate knowledge of English.</li>
              <li>Make a list of the areas you are most interested in.</li>
              <li>Contact us (or one of your professors) if you have any questions about the programme.</li>
            </ul>

            <h5 class="card-title my-5">Gather information</h5>
            <p>
              Various information will be requested during the application process so please ensure you have it handy when you apply.
            </p>
            <ul class="card-text text-left">
              <li>General applicant information: name, date of birth, address, email, phone</li>
              <li>Education: name of your university, current year, degree, etc.</li>
              <li>Previous work experience (if any): dates employed, role, main responsibilities etc.</li>
              <li>A digital ID photo (in .jpeg format, Minimum photo dimensions: 130x200 pixels)</li>
            </ul>
          </div>`
      },
      {
        title: 'Online Application',
        text: `
            <p class="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at malesuada nibh. Cras bibendum auctor diam. Mauris sit amet purus non lacus volutpat elementum. Fusce egestas tincidunt nibh ut egestas. Suspendisse arcu libero, luctus sed finibus sed,
              venenatis in urna. Donec mollis pretium turpis a venenatis. Maecenas hendrerit, nisi vitae pharetra maximus.
            </p>`
      }
    ]
  }



  toggleOpen(step) {
    step.isOpen = !step.isOpen;
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

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
