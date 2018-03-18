import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
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
  // constructor(private authService: AuthService) {}

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new TrySignupAction({ email, password }));
    // this.authService.signupUser(email, password);
  }
}
