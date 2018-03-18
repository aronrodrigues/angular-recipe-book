import { ShoppingListState, shoppingListReducer } from '../shopping-list/ngrx/shopping-list.reducers';
// import { AuthState, authReducer } from './auth/ngrx/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  shoppingList: ShoppingListState;
  // auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: shoppingListReducer,
  // auth: authReducer
};
