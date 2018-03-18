import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipesService,
      private authService: AuthService) {}

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

    /*this.httpClient.get('https://ng-recipe-book-d3e9b.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'response', responseType: 'text'/blob/arraybuffer
    }).map((recipes) => {
      console.log(recipes);
      return []
    });*/
  }
}
