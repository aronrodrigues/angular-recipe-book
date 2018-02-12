import { Ingredient } from "../shared/ingredients.model";

export class Recipe {
    
    constructor(private name: string, private description: string, private imagePath: string, private ingredients: Ingredient[]) {
    }
}