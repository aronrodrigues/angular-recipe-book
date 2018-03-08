import { Component } from '@angular/core';
import { DataStorageService } from '../shared/datastorage.service';
import { RecipesService } from '../recipes/recipes.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
      private recipesService: RecipesService, public authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((data) => { console.log(data); });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onSignout() {
    this.authService.signoutUser();
  }
}
