import { Injectable } from '@angular/core';
import { Document } from "../interfaces/document.interface";
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DocumentsService {

    // documentsURL:string = "https://api.obs.tv/documents?tag=";
    // documentURL:string = "https://api.obs.tv/documents";
    // documentsFilterURL:string = "https://api.obs.tv/categories/docs";

  constructor( public http: HttpClient ) { }

  //DOCUMENTS
  getDocuments(key$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'documents?tag='}${key$}`;
      console.log(url);
      return this.http.get(url);
  }
  //FILTER
  getFilterDocuments(): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'categories/docs'}`;
      console.log(url);
      return this.http.get(url);
  }
  //FILTER SELECTED
  getFilterSelectedDocuments(key$: string, filter$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'documents?tag='}${key$}&category=${filter$}`;
      console.log(url);
      return this.http.get(url);
  }
  getDocument(key$: string): Observable<any>{
       let url = `${AppSettings.API_ENDPOINT+'documents'}/${key$}`;
      return this.http.get(url);
   }
}
