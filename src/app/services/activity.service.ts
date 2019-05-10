import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActivityService {

  constructor( public http: HttpClient ) { }

      getActivity(): Observable<any>{
        return this.http.get(AppSettings.API_ENDPOINT+'activity')
      }
}
