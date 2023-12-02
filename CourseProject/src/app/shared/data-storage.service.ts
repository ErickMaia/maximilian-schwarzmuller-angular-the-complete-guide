import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/services/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private httpClient: HttpClient, 
    private recipesService: RecipesService
  ) {

   }

  storeRecipes(){
    const recipes = this.recipesService.getRecipes(); 

    this.httpClient.put("https://angular-testing-bfa5c-default-rtdb.firebaseio.com/recipes.json", recipes)
    .subscribe(response => {
      console.log(response); 
    }); 
    ; 
  }

  fetchRecipes(){
    this.httpClient.get<Recipe[]>("https://angular-testing-bfa5c-default-rtdb.firebaseio.com/recipes.json")
    .pipe(map(
      recipes => {
        return recipes.map(recipe => {
          return {... recipe, ingredients: (recipe.ingredients ? recipe.ingredients : [])}; 
        })
      }
    ))
    .subscribe(response => {
      this.recipesService.setRecipes(response); 
    })
  }
}
