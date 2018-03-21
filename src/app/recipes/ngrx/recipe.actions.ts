import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const STORE_RECIPES = 'STORE_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';

export class SetRecipesAction implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]) {}
}

export class AddRecipeAction implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}

export class UpdateRecipeAction implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: { recipe: Recipe, index: number }) {}
}

export class DeleteRecipeAction implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {}
}

export class StoreRecipesAction implements Action {
  readonly type = STORE_RECIPES;
}

export class FetchRecipesAction implements Action {
  readonly type = FETCH_RECIPES;
}

export type RecipeActions =
  SetRecipesAction |
  AddRecipeAction |
  UpdateRecipeAction |
  DeleteRecipeAction |
  StoreRecipesAction |
  FetchRecipesAction;
