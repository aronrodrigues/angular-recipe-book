import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredients.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe;
  
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
