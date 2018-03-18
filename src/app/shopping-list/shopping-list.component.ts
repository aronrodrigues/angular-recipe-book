import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
// import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as ShoppingListActions from './ngrx/shopping-list.actions';
import { AppState } from '../shared/app.reducers';
import { ShoppingListState } from './ngrx/shopping-list.reducers';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[];
  // subscription: Subscription;
  shoppingListState: Observable<ShoppingListState>;

  constructor(// private shoppingListService: ShoppingListService,
      private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    /*
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients) => this.ingredients = ingredients
    );
    */
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    // this.shoppingListService.editing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEditAction(index));
  }

}
