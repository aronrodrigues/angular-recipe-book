import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredients.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface ShoppingListState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const INITIAL_STATE: ShoppingListState = {
  ingredients: [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatoes', 2)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer (
    state: ShoppingListState = INITIAL_STATE, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [ ...state.ingredients, (<ShoppingListActions.AddIngredientAction>action).payload ]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [ ...state.ingredients, ...(<ShoppingListActions.AddIngredientsAction>action).payload ]
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const index: number = state.editedIngredientIndex;
      const deletedIngredients = [ ...state.ingredients ];
      deletedIngredients.splice(index, 1);
      return {
        ...state,
        ingredients: deletedIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const payload: Ingredient = (<ShoppingListActions.UpdateIngredientAction>action).payload;
      const ingredient: Ingredient = state.ingredients[state.editedIngredientIndex];
      const newIngredient: Ingredient = {
        ...ingredient,
        ...payload
      };
      const updatedIngredients = [ ...state.ingredients ];
      updatedIngredients[state.editedIngredientIndex] = newIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.START_EDIT:
      const editedIngredientIndex: number = (<ShoppingListActions.StartEditAction>action).payload;
      const editedIngredient: Ingredient = state.ingredients[editedIngredientIndex];
      return {
        ...state,
        editedIngredient,
        editedIngredientIndex
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
