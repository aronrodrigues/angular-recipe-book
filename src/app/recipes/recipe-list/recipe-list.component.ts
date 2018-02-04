import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Filet au poivre',
      'Filet com molho de pimenta e pure de batata',
      'https://panelinha-sitenovo.s3-sa-east-1.amazonaws.com/receita/963889200000-Filet-au-poivre.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
