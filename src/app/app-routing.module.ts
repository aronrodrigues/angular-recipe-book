import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [{
    path: '', redirectTo: '/recipes', pathMatch: 'full'
}, {
    path: 'recipes',
    component: RecipesComponent,
    children: [{
        path: '', component: RecipeStartComponent
    }, {
        path: 'new', component: RecipeEditComponent, canActivate: [ AuthGuard ]
    }, {
        path: ':id/edit', component: RecipeEditComponent, canActivate: [ AuthGuard ]
    }, {
        path: ':id', component: RecipeDetailComponent
    }]
}, {
  path: 'shopping-list', component: ShoppingListComponent
}, {
  path: 'signup', component: SingupComponent
}, {
  path: 'signin', component: SinginComponent
}];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
