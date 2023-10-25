import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService, 
    private recipesService: RecipesService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = +this.activatedRoute.snapshot.params['id']

    if(this.id === null || this.id === undefined){
      this.router.navigate(['please-select'], {relativeTo: this.activatedRoute.parent})
    }

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        let recipeId = +params['id']
        if(recipeId != 0 || recipeId != undefined){
          this.recipe = this.recipesService.getRecipe(recipeId)
        }
      }
    )
  }

  sendIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(["edit", this.id], {relativeTo: this.activatedRoute.parent})
  }

  onDeleteRecipe(){
    this.recipesService.deleteRecipe(this.id)
    this.router.navigate(['please-select'], {relativeTo: this.activatedRoute.parent})
  }

}
