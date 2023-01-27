import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>(); 

  recipes: Recipe[] = [
    new Recipe('Toasted bread', 'Toasted bread with some special ingredients', 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'), 
    new Recipe('Chinese rice', 'Traditional chinese recipe', 'https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipeDetails(recipeSelected: Recipe){
    this.recipeSelected.emit(recipeSelected)
  }

}
