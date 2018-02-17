import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    private ingredients : Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 2)
    ];

    ingredientsChanged = new Subject<Ingredient[]>()

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}