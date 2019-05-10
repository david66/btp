import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Follows } from "../interfaces/follows.interface";

@Injectable()
export class FollowingService {

  constructor( public http: HttpClient ) { }

  //FOLLOWING CONTENT
  getFollows(): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'users/logged/follows'}`;
      console.log(url);
      return this.http.get(url)
  }
  postFollows( follows:Follows): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'users/logged/follows'}`;
      let params = follows;
      console.log(params);
      let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      console.log(url);
      return this.http.post(url, params, {headers: headers})
   }
   deleteFollows( follows:Follows): Observable<any>{
       let url = `${AppSettings.API_ENDPOINT+'users/logged/follows'}`;
       console.log(url);
       const httpOptions = {
           headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: follows
       };
       console.log(httpOptions);
       return this.http.delete(url, httpOptions)
    }
}
