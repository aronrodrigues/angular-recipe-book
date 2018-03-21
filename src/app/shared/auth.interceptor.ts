import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { AuthState } from '../auth/ngrx/auth.reducers';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth')
    .take(1)
    .switchMap((authState: AuthState) => {
      const token: string = authState.token;
      const reqClone = req.clone({ params: req.params.set('auth', token) });
      return next.handle(reqClone);
    });

  }
}
