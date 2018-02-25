import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form') form: NgForm;
  editMode = false;
  editIndex = -1;
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.editing.subscribe(
      (index) => {
        this.editIndex = index;
        this.editMode = true;
        const ingredient: Ingredient = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addItem() {
    const value = this.form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(ingredient);
  }

  saveItem() {
    const ingredient = new Ingredient(this.form.value.name, this.form.value.amount);
    this.shoppingListService.save(this.editIndex, ingredient);
    this.reset();
  }

  removeItem() {
    this.shoppingListService.removeIngredient(this.editIndex);
    this.reset();
  }

  reset() {
    this.form.reset();
    this.editMode = false;
    this.editIndex = -1;
  }
}
