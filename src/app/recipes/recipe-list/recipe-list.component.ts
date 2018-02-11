import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelectedOnItem = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      'Filet au poivre',
      'Filet com molho de pimenta e pure de batata',
      'https://panelinha-sitenovo.s3-sa-east-1.amazonaws.com/receita/963889200000-Filet-au-poivre.jpg'),
      new Recipe(
        'Filet a Oswaldo Aranha',
        'Filet frito na manteiga',
        'http://www.blogangeloni.com.br/wp-content/uploads/2015/08/p38-39-1024x1024.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe) {
    this.onRecipeSelectedOnItem.emit(recipe)
  }

}
