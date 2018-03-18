import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignupAction implements Action {
  readonly type = TRY_SIGNUP;
  constructor(public payload: { email: string, password: string }) {}
}
export class SignupAction implements Action {
  readonly type = SIGNUP;
}
export class TrySigninAction implements Action {
  readonly type = TRY_SIGNIN;
  constructor(public payload: { email: string, password: string }) {}
}
export class SigninAction implements Action {
  readonly type = SIGNIN;
}
export class LogoutAction implements Action {
  readonly type = LOGOUT;
}
export class SetTokenAction implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type Actions =
    SigninAction |
    SignupAction |
    LogoutAction |
    SetTokenAction |
    TrySignupAction |
    TrySigninAction;
