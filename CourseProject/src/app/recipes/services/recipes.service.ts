import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService{

  recipesChanged = new Subject<Recipe[]>(); 

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Toasted bread', 
      'Toasted bread with some special ingredients', 
      'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      [new Ingredient('Bread', 1), 
       new Ingredient('Butter', 1)]), 
    new Recipe(
      1,
      'Chinese rice', 
      'Traditional chinese recipe', 
      'https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      [new Ingredient('Rice', 1), 
       new Ingredient('Fish sauce', 1), 
       new Ingredient('Oyster sauce', 1), 
       new Ingredient('Soy sauce', 1)])
  ]

  constructor() {

   }

   setRecipes(recipes: Recipe[]){
    this.recipes = recipes; 
    this.recipesChanged.next(recipes.slice()); 
   }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(recipeId: number){
    return this.recipes.find(
      (recipe) => recipe.id == recipeId
    )
  }

  addRecipe(newRecipe: Recipe){
    newRecipe.id = this.recipes.length
    this.recipes.push(newRecipe); 
    this.recipesChanged.next(this.recipes.slice()); 
  }

  updateRecipe(recipe: Recipe){
    let recipeIndex = this.recipes.findIndex(r => r.id == recipe.id)
    this.recipes[recipeIndex] = recipe; 
    this.recipesChanged.next(this.recipes.slice()); 
  }

  deleteRecipe(recipeId: number){
    let recipeIndex = this.recipes.findIndex(r => r.id == recipeId)
    this.recipes.splice(recipeIndex, 1); 
    this.recipesChanged.next(this.recipes.slice()); 
  }
}
