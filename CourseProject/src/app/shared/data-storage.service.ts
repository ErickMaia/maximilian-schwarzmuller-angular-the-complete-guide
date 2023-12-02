import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/services/recipes.service';
import { Recipe } from '../recipes/recipe.model';

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

    this.httpClient.put("http://localhost:5020/api/Recipes", recipes)
    .subscribe(response => {
      console.log(response); 
    }); 
    ; 
  }

  fetchRecipes(){
    this.httpClient.get<Recipe[]>("http://localhost:5020/api/Recipes")
    .subscribe(response => {
      this.recipesService.setRecipes(response); 
    })
  }
}
