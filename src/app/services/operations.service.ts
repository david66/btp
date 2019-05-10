import { Injectable } from '@angular/core';
import { Operations } from "../interfaces/operations.interface";
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OperationsService {

    // operationsURL:string = "https://api.obs.tv/operations";

  constructor( public http: HttpClient ) { }

  getOperations(): Observable<any>{
    return this.http.get(AppSettings.API_ENDPOINT+'operations')
  }
}
