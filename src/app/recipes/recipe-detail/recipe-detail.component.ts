import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/ngrx/shopping-list.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { RecipeState, FeatureState } from '../ngrx/recipe.reducers';
import { DeleteRecipeAction } from '../ngrx/recipe.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // recipe: Recipe[];
  recipeState: Observable<RecipeState>;
  id: number;

  constructor(private recipesService: RecipesService, private router: Router,
    private route: ActivatedRoute, private store: Store<FeatureState>) { }

  ngOnInit() {
    // this.recipe = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeState = this.store.select('recipes');
      // this.recipe = this.recipesService.getRecipe(this.id);
    });
  }

  addToShoppingList() {
    this.store.select('recipes')
    .take(1)
    .subscribe((recipeState: RecipeState) => {
      this.store.dispatch(new ShoppingListActions.AddIngredientsAction(recipeState.recipes[this.id].ingredients));
    });
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    // this.recipesService.deleteRecipe(this.id);
    this.store.dispatch(new DeleteRecipeAction(this.id));
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
