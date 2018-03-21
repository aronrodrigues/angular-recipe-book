import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
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
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<ShoppingListState>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEditAction(index));
  }

}
