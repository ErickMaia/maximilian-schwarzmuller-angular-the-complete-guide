import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {

  id:number
  editMode: boolean = false
  recipeForm: FormGroup

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.editMode = (params['id'] != null); 
        this.initForm();
      }
    )
  }

  private initForm(){
    let recipeName = ''; 
    let recipeImagePath = ''; 
    let recipeDescription = ''; 

    if(this.editMode){
      const recipe = this.recipesService.getRecipe(this.id)
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description
    }
    
    this.recipeForm = new FormGroup(
      {
        'name': new FormControl(recipeName), 
        'imagePath': new FormControl(recipeImagePath),
        'description': new FormControl(recipeDescription)
      }
    ); 
  }

}
