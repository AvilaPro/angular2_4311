import { AccountService } from './../services/account.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class LoginErrorInterceptor implements HttpInterceptor {

  constructor(private account: AccountService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err:HttpErrorResponse) =>{
      console.log(err);
      if (err.status == 400) {
        console.log("en el if");
        this.account.logOut();
      }
      const error = err.error?.message || err.statusText;
      console.log(error);
      return throwError(() => error);
    }))
  }
}
