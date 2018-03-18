import { Action } from '@ngrx/store';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class SignupAction implements Action {
  readonly type = SIGNUP;
}
export class SigninAction implements Action {
  readonly type = SIGNIN;
}
export class LogouttAction implements Action {
  readonly type = LOGOUT;
}
export class SetTokenAction implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: String) {}
}

export type Actions = SigninAction | SignupAction | LogouttAction | SetTokenAction;
