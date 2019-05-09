import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor ( public http: HttpClient ) {
  }

  postSubscription(subscription: any): Observable<any> {
    let url = `${AppSettings.API_ENDPOINT + '/subscribe'}`;
    let params = subscription;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    console.log(url);
    return this.http.post(url, params, {headers: headers});
  }

  postSubscriptionConfirmation(subscription: any): Observable<any> {
    let url = `${AppSettings.API_ENDPOINT + '/subscribe/confirm'}`;
    let params = subscription;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    console.log(url);
    return this.http.post(url, params, {headers: headers});
  }
}
