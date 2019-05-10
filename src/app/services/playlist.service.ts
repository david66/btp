import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlaylistService {

    constructor( public http: HttpClient ) { }

    getPlaylist(): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'playlist'}`;
      console.log(url);
      return this.http.get(url)
    }
}
