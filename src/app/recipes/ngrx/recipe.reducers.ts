import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import { AppState } from '../../shared/app.reducers';

export interface FeatureState extends AppState {
  recipes: RecipeState;
}

export interface RecipeState {
  recipes: Recipe[];
}

const INITIAL_STATE: RecipeState = {
  recipes: []
};

export function recipeReducer(state: RecipeState = INITIAL_STATE, action: RecipeActions.RecipeActions) {
  let recipes: Recipe[] = null;
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      recipes = (<RecipeActions.SetRecipesAction>action).payload;
      return {
        ...state,
        recipes
      };
    case (RecipeActions.ADD_RECIPE):
      const recipe: Recipe = (<RecipeActions.AddRecipeAction>action).payload;
      return {
        ...state,
        recipes: [ ...state.recipes, recipe ]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const payload: {recipe: Recipe, index: number} = (<RecipeActions.UpdateRecipeAction>action).payload;
      recipes = [ ...state.recipes ];
      recipes[payload.index] = payload.recipe;
      return {
        ...state,
        recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const index: number = (<RecipeActions.DeleteRecipeAction>action).payload;
      recipes = [ ...state.recipes ].splice(index, 1);
      return {
        ...state,
        recipes
      };
    default:
      return state;
  }
}
