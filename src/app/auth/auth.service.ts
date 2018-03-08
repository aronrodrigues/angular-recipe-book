import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) {

  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => { console.log(response); })
    .catch((error) => { console.error(error); });
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      this.getToken();
      this.router.navigate(['/']);
    })
    .catch((error) => { console.error(error); });
  }

  getToken(): string {
    firebase.auth().currentUser.getToken()
    .then((token: string) => { this.token = token; });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  signoutUser() {
    firebase.auth().signOut().then((response) => { console.log(response); } );
    this.token = null;
  }
}
