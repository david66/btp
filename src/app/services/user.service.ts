import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserSettings } from "../interfaces/user-settings.interface";

@Injectable()
export class UserService {

  constructor( public http: HttpClient ) { }

  //USER INFO
  getUserInfo(): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'users/logged/info'}`;
      console.log(url);
      return this.http.get(url)
  }
  //USER SETTINGS
  getUserSettings(): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'users/logged/settings'}`;
      console.log(url);
      return this.http.get(url)
  }
  putUserSettings( userSettings:UserSettings ): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'users/logged/settings'}`;
      let params = userSettings;
      console.log(params);
      let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      console.log(url);
      return this.http.put(url, params, {headers: headers})
   }
}
