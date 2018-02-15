import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Filet au poivre',
          'Filet com molho de pimenta e pure de batata',
          'https://panelinha-sitenovo.s3-sa-east-1.amazonaws.com/receita/963889200000-Filet-au-poivre.jpg',
        [new Ingredient("Meat", 1), new Ingredient("Pepper", 1), new Ingredient("Potato", 4)]),
          new Recipe(
            'Filet a Oswaldo Aranha',
            'Filet frito na manteiga',
            'http://www.blogangeloni.com.br/wp-content/uploads/2015/08/p38-39-1024x1024.jpg',
            [new Ingredient("Meat", 2), new Ingredient("Butter", 1), new Ingredient("Rice", 3)])
    ]

    constructor(private shoppingListService:ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id]
    } 

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }
}