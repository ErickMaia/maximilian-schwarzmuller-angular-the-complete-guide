import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {

  id: number
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

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipesService.getRecipe(this.id)
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required, 
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup(
      {
        'id': new FormControl(this.id),
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImagePath, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredients': recipeIngredients
      }
    );
  }

  onSubmit() {

    // code commented because the names of the properties in the form are the same from the Recipe object
    // typescript can realise it and pass the appropriate fields to the appropriate properties in the object
    // let newRecipe = new Recipe(
    //   this.id, 
    //   this.recipeForm.value['name'], 
    //   this.recipeForm.value['amount'], 
    //   this.recipeForm.value['imagePath'], 
    //   this.recipeForm.value['ingredients'])

    if(this.editMode){
      this.recipesService.updateRecipe(this.recipeForm.value)
    }else{
      this.recipesService.addRecipe(this.recipeForm.value); 
    }
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    let ingredients = (<FormArray>this.recipeForm.get('ingredients'))

    ingredients.push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required, 
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

}
