import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor( public http: HttpClient ) { }

  //SEARCH RESULTS
  getSearch(keyword$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'search/'}${keyword$}`;
      console.log(url);
      return this.http.get(url)
  }

  //SEARCH SELECTED
  getSelectedSearch(tag$: string, keyword$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'search/'}${tag$}/${keyword$}`;
      console.log(url);
      return this.http.get(url)
  }
}
