import { Subject } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>(); 

  startedEditing = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Apples", 10)
  ]

  constructor() { }

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(... ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
