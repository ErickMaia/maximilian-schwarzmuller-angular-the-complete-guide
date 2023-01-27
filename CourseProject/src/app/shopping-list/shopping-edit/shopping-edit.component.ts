import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInput; 
  @ViewChild("amountInput") amountInput; 

  @Output() ingredientAdded = new EventEmitter<Ingredient>(); 

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    this.ingredientAdded.emit(
      new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))
  }

}
