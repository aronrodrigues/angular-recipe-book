import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { FeatureState, RecipeState } from '../ngrx/recipe.reducers';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeState: Observable<RecipeState>;
  subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<FeatureState>) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
    /* this.recipes = this.recipesService.getRecipes();
    this.subscription = this.recipesService.recipesChanged.subscribe(
      (recipes) => { this.recipes = recipes; }
    ); */
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route});
  }

}
