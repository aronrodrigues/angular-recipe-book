import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/app.reducers';
import { SigninAction, SignupAction, LogoutAction, SetTokenAction } from './ngrx/auth.actions';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router, private store: Store<AppState>) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
      this.store.dispatch(new SignupAction());
      firebase.auth().currentUser.getToken()
      .then((token: string) => {
        this.store.dispatch(new SetTokenAction(token));
      });
      this.router.navigate(['/']);
    })
    .catch((error) => { console.error(error); });
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      this.store.dispatch(new SigninAction());
      firebase.auth().currentUser.getToken()
      .then((token: string) => {
        this.store.dispatch(new SetTokenAction(token));
      });
      this.router.navigate(['/']);
    })
    .catch((error) => { console.error(error); });
  }

  signoutUser() {
    firebase.auth().signOut().then((response) => {
      this.store.dispatch(new LogoutAction());
    } );
    this.token = null;
  }
}
