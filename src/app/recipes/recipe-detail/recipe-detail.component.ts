import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/app.reducers';
import * as ShoppingListActions from '../../shopping-list/ngrx/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipesService: RecipesService, private router: Router,
    private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    // this.recipe = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }

  addToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredientsAction(this.recipe.ingredients));
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
