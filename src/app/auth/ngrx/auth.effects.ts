import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { TRY_SIGNUP, TrySignupAction, SIGNUP, SET_TOKEN, TrySigninAction, TRY_SIGNIN, SIGNIN, LOGOUT } from './auth.actions';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  authSignup = this.actions$
  .ofType(TRY_SIGNUP)
  .map((action: TrySignupAction) => {
    return action.payload;
  })
  .switchMap((payload: {email: string, password: string }) => {
    return fromPromise(firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password));
  })
  .switchMap(() => {
    return fromPromise(firebase.auth().currentUser.getToken());
  })
  .mergeMap((token) => {
    this.router.navigate(['/']);
    return [{
      type: SIGNUP
    }, {
      type: SET_TOKEN,
      payload: token
    }];
  });

  @Effect()
  authSignin = this.actions$
  .ofType(TRY_SIGNIN)
  .map((action: TrySigninAction) => {
    return action.payload;
  })
  .switchMap((payload: {email: string, password: string }) => {
    return fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password));
  })
  .switchMap(() => {
    return fromPromise(firebase.auth().currentUser.getToken());
  })
  .mergeMap((token) => {
    this.router.navigate(['/']);
    return [{
      type: SIGNIN
    }, {
      type: SET_TOKEN,
      payload: token
    }];
  });

  @Effect({dispatch: false})
  authLogout = this.actions$
  .ofType(LOGOUT)
  .do(() => {
    return fromPromise(firebase.auth().signOut());
  }).do(() => {
    this.router.navigate(['/']);
  });

  constructor (private actions$: Actions, private router: Router) {}

}
