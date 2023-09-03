import { Component, OnDestroy, OnInit } from '@angular/core';
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

  startedEditingSubscription: Subscription
  editMode: boolean = false;
  editedItemIndex: number; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true; 
        this.editedItemIndex = index; 
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
