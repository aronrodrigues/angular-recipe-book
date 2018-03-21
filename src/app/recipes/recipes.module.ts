import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RecipesRouting } from './recipes-routing.module';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './ngrx/recipe.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './ngrx/recipe.effects';

// 1.2M -> 789K Mar  8 20:22 main.4eda838665c9b91a5fef.bundle.js
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRouting,
    SharedModule,
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipeEffects])
  ]
})
export class RecipesModule {

}
