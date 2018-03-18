import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TrySigninAction } from '../ngrx/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/app.reducers';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private store: Store<AppState>) {}
  // constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new TrySigninAction({email, password}));
    // this.authService.signinUser(email, password);
  }
}
