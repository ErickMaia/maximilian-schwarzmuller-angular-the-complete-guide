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

  constructor(
    private shoppingListService: ShoppingListService, 
    private recipesService: RecipesService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let name: string = this.activatedRoute.snapshot.params['name']

    if(name === "" || name == undefined){
      this.router.navigate(['please-select', {relativeTo: this.activatedRoute.parent}])
    }

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        let recipeName = params['name']
        if(recipeName != ""){
          this.recipe = this.recipesService.getRecipe(recipeName)
        }
      }
    )
  }

  sendIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }

}
