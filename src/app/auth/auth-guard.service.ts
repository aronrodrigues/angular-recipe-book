import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/app.reducers';
import { AuthState } from './ngrx/auth.reducers';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.store.select('auth')
    .take(1)
    .map((authState: AuthState) => {
      return authState.authenticated;
    });
  }
}
