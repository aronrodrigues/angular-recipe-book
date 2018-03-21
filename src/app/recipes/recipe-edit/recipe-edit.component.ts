import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
// import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from '../../shared/ingredients.model';
import { Store } from '@ngrx/store';
import { FeatureState, RecipeState } from '../ngrx/recipe.reducers';
import { UpdateRecipeAction, AddRecipeAction } from '../ngrx/recipe.actions';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipeIngredients: FormArray;

  constructor(
      // private recipesService: RecipesService,
      private router: Router,
      private route: ActivatedRoute,
      private store: Store<FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      // this.recipe = this.recipesService.getRecipe(this.id);
      this.initForm();
    });
  }

  private initForm() {
    let recipe = null;
    const recipeIngredients: FormArray = new FormArray([]);
    if (this.editMode) {
      // recipe = this.recipesService.getRecipe(this.id);
      this.store.select('recipes')
      .take(1)
      .subscribe((recipeState: RecipeState) => {
        recipe = recipeState.recipes[this.id];
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
          }));
        }
      });
    } else {
      recipe = new Recipe('', '', '', []);
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipe.name, Validators.required),
      imagePath: new FormControl(recipe.imagePath, Validators.required),
      description: new FormControl(recipe.description, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onSubmit() {

    const ingredients: Ingredient[] = [];

    for (const control of (<FormArray>this.recipeForm.get('ingredients')).controls) {
      ingredients.push(new Ingredient(control.value.name, control.value.amount));
    }

    const recipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      ingredients
    );

    if (this.editMode) {
      this.store.dispatch(new UpdateRecipeAction({recipe, index: this.id}));
      // this.recipesService.updateRecipe(this.id, recipe);
    } else {
      this.store.dispatch(new AddRecipeAction(recipe));
      // this.recipesService.addRecipe(recipe);
    }
    this.onCancel();

  }

  getIngredients(): FormArray {
    return (<FormArray>this.recipeForm.get('ingredients'));
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)]),
      })
    );
  }

  onDeleteIngredient(index) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
