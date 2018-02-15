import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  recipe: Recipe;
  editMode: boolean = false;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=> {
      this.id = +params["id"];
      this.editMode = params["id"] != null
      this.recipe = this.recipesService.getRecipe(this.id)
    });
  }

}
