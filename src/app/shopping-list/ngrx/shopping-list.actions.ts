import { Action, UPDATE } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredients.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENTS';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredientAction implements Action {
  readonly type: string = ADD_INGREDIENT;
  constructor(public payload: Ingredient) {}
}

export class AddIngredientsAction implements Action {
  readonly type: string = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[]) {}
}

export class DeleteIngredientAction implements Action {
  readonly type: string = DELETE_INGREDIENT;
}

export class UpdateIngredientAction implements Action {
  readonly type: string = UPDATE_INGREDIENT;
  constructor(public payload: Ingredient) {}
}

export class StartEditAction implements Action {
  readonly type: string = START_EDIT;
  constructor(public payload: number) {}
}
export class StopEditAction implements Action {
  readonly type: string = STOP_EDIT;
}
export type ShoppingListActions = AddIngredientAction | AddIngredientsAction | DeleteIngredientAction |
    UpdateIngredientAction | StartEditAction | StopEditAction;
