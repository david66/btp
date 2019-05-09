import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
         HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AppSettings } from '../config/settings';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor ( private router: Router ) {
    }

    intercept ( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

        // request = request.clone({
        //     withCredentials: true
        // });

        return next.handle(request).pipe(catchError((error, caught) => {
            //intercept the response error and displace it to the console
            console.log(error);
            this.handleServiceError(error);
            return of(error);
        }) as any);
    }
    //handle your http error or rethrow
    private handleServiceError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401) {
            //navigate to index
            console.log('handled error: ' + err.status);
            this.router.navigate([`${AppSettings.INDEX_URL}`]);
            return of(err.message);
        } else if (err.status === 403 || err.status === 404 || err.status === 500) {
            //navigate to url depending on error status
            console.log('handled error: ' + err.status);
            this.router.navigate([`/error`, err.status]);
        }
        return of(err);
    }
}
