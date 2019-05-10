import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CalendarEventsService {

    // eventsListURL:string = "https://api.obs.tv/events";
    // eventsURL:string = "https://api.obs.tv/events?tag=";

  constructor( public http: HttpClient ) { }

  getEventsList(): Observable<any>{
    return this.http.get(AppSettings.API_ENDPOINT+'events');
    }
  getEvents(key$: string): Observable<any>{
    let url = `${AppSettings.API_ENDPOINT+'events?tag='}${key$}`;
    console.log(url);
    return this.http.get(url);
    }
    getEvent(key$: string): Observable<any>{
        let url = `${AppSettings.API_ENDPOINT+'events'}/${key$}`;
        console.log(url);
        return this.http.get(url);
     }
}
