import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit, OnDestroy {

  subscription: any = { };
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor( private route: ActivatedRoute,
               public router: Router,
               private _subscriptionService: SubscriptionService ) {}

  ngOnInit() {

    this.route.params.subscribe(params => console.log('parameters', params['id1'], params['id2']));

    this.route.params.subscribe(
      params => {
        this.subscription = {
          email: params['id1'],
          code: params['id2'],
        };
        console.log(this.subscription);
      });

    // SUBSCRIPTION
    this._subscriptionService.postSubscriptionConfirmation(this.subscription)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
          console.log(data);
          this.router.navigate([`/confirmation`]);
        },
        error => console.error(error));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
