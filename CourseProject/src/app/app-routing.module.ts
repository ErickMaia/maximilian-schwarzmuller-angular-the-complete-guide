import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { PleaseSelectRecipeForRecipeDetailComponent } from './recipes/recipe-detail/please-select-recipe-for-recipe-detail/please-select-recipe-for-recipe-detail.component';
import { RecipeSelectedGuardService } from './recipes/recipe-detail/recipe-selected-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/recipes/please-select', pathMatch: 'full'},
  {component: RecipesComponent, path: 'recipes', children:[
    {component: RecipeDetailComponent, path: 'detail/:name'
    , canActivate: [RecipeSelectedGuardService]}, 
    {component: PleaseSelectRecipeForRecipeDetailComponent, path: 'please-select'}
  ]}, 
  {component: ShoppingListComponent, path: 'shopping-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
