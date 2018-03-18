import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [{
  // path: '', redirectTo: '/recipes', pathMatch: 'full'
  path: '',
  component: HomeComponent
}, {
  path: 'recipes',
  loadChildren: './recipes/recipes.module#RecipesModule'
}, {
  path: 'shopping-list',
  component: ShoppingListComponent
}];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
