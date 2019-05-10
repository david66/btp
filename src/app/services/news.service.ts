import { Injectable } from '@angular/core';
import { New } from "../interfaces/new.interface";
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {

    constructor(    public http: HttpClient ) { }

    //GET NEWS LIST
    getNews(key$: string): Observable<any>{
        let url = `${AppSettings.API_ENDPOINT+'news?access=private&tag='}${key$}`;
        console.log(url);
        return this.http.get(url)
    }

    //GET NEW DETAIL
    getNew(key$: string): Observable<any>{
        let url = `${AppSettings.API_ENDPOINT+'news'}/${key$}`;
        return this.http.get(url)
    }
}
