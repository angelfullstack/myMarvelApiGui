import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      params: req.params
      .set(
        'ts',
        environment.mvTs
      ).set(
        'hash',
        environment.mvHash
      ).set(
        'apikey',
        environment.mvPublicKey
      )
    })
    return next.handle(cloneReq)
  }

}