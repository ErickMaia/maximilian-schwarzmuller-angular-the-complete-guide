import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { PleaseSelectRecipeForRecipeDetailComponent } from './recipes/recipe-detail/please-select-recipe-for-recipe-detail/please-select-recipe-for-recipe-detail.component';
import { RecipeSelectedGuardService } from './recipes/recipe-detail/recipe-selected-guard.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/services/recipes-resolver-service';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes/please-select', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children:[
    {path: 'detail/:id', component: RecipeDetailComponent,
      canActivate: [RecipeSelectedGuardService], 
      resolve: [RecipesResolverService]},
    {path: 'please-select', component: PleaseSelectRecipeForRecipeDetailComponent}, 
    {path: 'new', component: RecipeEditComponent},
    {path: 'edit/:id', component: RecipeEditComponent}
  ]}, 
  {path: 'shopping-list', component: ShoppingListComponent}, 
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
