import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form', {static: false})
  shoppingListForm: NgForm

  startedEditingSubscription: Subscription
  editMode: boolean = false;
  editedItemIndex: number; 
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true; 
        this.editedItemIndex = index; 
        this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex)
        this.shoppingListForm.setValue(
          {
            name: this.editedItem.name, 
            amount: this.editedItem.amount
          }
        )
      }
    )
  }

  addIngredient(form: NgForm){
    
    const newIngredient = new Ingredient(form.value.name, form.value.amount)

    this.shoppingListService.addIngredient(newIngredient)
  }

  ngOnDestroy(): void {
    this.startedEditingSubscription.unsubscribe();
  }

}
