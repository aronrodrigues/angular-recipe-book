import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipesService) {}

  storeRecipes() {
    return this.httpClient.put('https://ng-recipe-book-d3e9b.firebaseio.com/recipes.json',
        this.recipeService.getRecipes());

  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-d3e9b.firebaseio.com/recipes.json')
    .subscribe((data) => {
      const recipes: Recipe[] = data;
      this.recipeService.setRecipes(recipes);
    });
  }
}
