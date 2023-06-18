import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {component: RecipesComponent, path: 'recipes'}, 
  {component: ShoppingListComponent, path: 'shopping-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
