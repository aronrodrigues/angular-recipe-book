import { Effect, Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { FETCH_RECIPES, FetchRecipesAction, SET_RECIPES, STORE_RECIPES, StoreRecipesAction } from './recipe.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureState, RecipeState } from './recipe.reducers';

@Injectable()
export class RecipeEffects {

  @Effect()
  recipeFetch = this.actions$
  .ofType(FETCH_RECIPES)
  .switchMap((action: FetchRecipesAction) => {
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-d3e9b.firebaseio.com/recipes.json');
  }).map((recipes) => {
    console.log(recipes);
    return {
      type: SET_RECIPES,
      payload: recipes
    };
  });

  @Effect({ dispatch: false })
  recipeStore = this.actions$
  .ofType(STORE_RECIPES)
  .withLatestFrom(this.store.select('recipes'))
  .switchMap(([value, state]) => {
    return this.httpClient.put('https://ng-recipe-book-d3e9b.firebaseio.com/recipes.json',
        state.recipes);
  });

  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<FeatureState>) {}

}
