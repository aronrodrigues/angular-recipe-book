import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/datastorage.service';
import { RecipesService } from '../../recipes/recipes.service';
import { AuthService } from '../../auth/auth.service';
import { AppState } from '../../shared/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AuthState } from '../../auth/ngrx/auth.reducers';
import { LogoutAction } from '../../auth/ngrx/auth.actions';
import { FetchRecipesAction, StoreRecipesAction } from '../../recipes/ngrx/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<AuthState>;

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }
  constructor(private dataStorageService: DataStorageService,
      private recipesService: RecipesService, public authService: AuthService,
      private store: Store<AppState>) {}

  onSaveData() {
    this.store.dispatch(new StoreRecipesAction());
    // this.dataStorageService.storeRecipes().subscribe((data) => { console.log(data); });
  }

  onFetchData() {
    this.store.dispatch(new FetchRecipesAction());
    // this.dataStorageService.getRecipes();
  }

  onSignout() {
    // this.authService.signoutUser();
    this.store.dispatch(new LogoutAction());
  }
}
