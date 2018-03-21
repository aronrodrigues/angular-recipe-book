import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../ngrx/shopping-list.actions';
import { AppState } from '../../shared/app.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form') form: NgForm;
  editMode = false;
  editedItem: Ingredient = null;
  subscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe((data) => {
      if (data.editedIngredientIndex >= 0) {
        this.editMode = true;
        this.editedItem = data.editedIngredient;
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEditAction());
  }

  addItem() {
    const value = this.form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    this.store.dispatch(new ShoppingListActions.AddIngredientAction(ingredient));
  }

  saveItem() {
    const ingredient = new Ingredient(this.form.value.name, this.form.value.amount);
    this.store.dispatch(new ShoppingListActions.UpdateIngredientAction(ingredient));
    this.reset();
  }

  removeItem() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredientAction());
    this.reset();
  }

  reset() {
    this.form.reset();
    this.editMode = false;
  }
}
