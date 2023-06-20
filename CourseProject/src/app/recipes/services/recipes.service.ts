import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>(); 

  private recipes: Recipe[] = [
    new Recipe(
      'Toasted bread', 
      'Toasted bread with some special ingredients', 
      'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      [new Ingredient('Bread', 1), 
       new Ingredient('Butter', 1)]), 
    new Recipe(
      'Chinese rice', 
      'Traditional chinese recipe', 
      'https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      [new Ingredient('Rice', 1), 
       new Ingredient('Fish sauce', 1), 
       new Ingredient('Oyster sauce', 1), 
       new Ingredient('Soy sauce', 1)])
  ]

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(recipeName: string){
    return this.recipes.find(
      (recipe) => recipe.name == recipeName
    )
  }
}
