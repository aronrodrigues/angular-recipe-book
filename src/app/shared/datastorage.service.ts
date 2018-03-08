import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipesService,
      private authService: AuthService) {}

  storeRecipes() {
    const token: string = this.authService.getToken();
    return this.httpClient.put('https://ng-recipe-book-d3e9b.firebaseio.com/recipes.json?auth=' + token,
        this.recipeService.getRecipes());

  }

  getRecipes() {
    const token: string = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-d3e9b.firebaseio.com/recipes.json?auth=' + token)
    .subscribe((data) => {
      const recipes: Recipe[] = data;
      this.recipeService.setRecipes(recipes);
    });
  }
}
