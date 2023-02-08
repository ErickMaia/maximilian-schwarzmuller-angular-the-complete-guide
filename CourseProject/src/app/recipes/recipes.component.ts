import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'], 
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe; 

  constructor() { }

  ngOnInit(): void {
  }

  loadRecipeDetails(recipe: Recipe){
    this.selectedRecipe = recipe
  }

}
