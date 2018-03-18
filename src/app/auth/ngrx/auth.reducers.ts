import * as AuthAction from './auth.actions';

export interface AuthState {
  token: string;
  authenticated: boolean;
}

const INITIAL_STATE: AuthState = {
  token: null,
  authenticated: false
};

export function authReducer (state: AuthState = INITIAL_STATE, action: AuthAction.Actions) {
  switch (action.type) {
    case (AuthAction.SIGNIN):
    case (AuthAction.SIGNUP):
      return {
        ...state,
        authenticated: true
      };
    case (AuthAction.LOGOUT):
      return {
        ...state,
        authenticated: false
      };
    case (AuthAction.SET_TOKEN):
    default:
      return state;
  }
}
