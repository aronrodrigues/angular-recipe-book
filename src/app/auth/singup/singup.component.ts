import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppState } from '../../shared/app.reducers';
import { Store } from '@ngrx/store';
import { TrySignupAction } from '../ngrx/auth.actions';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  constructor(private store: Store<AppState>) {}

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new TrySignupAction({ email, password }));
  }
}
