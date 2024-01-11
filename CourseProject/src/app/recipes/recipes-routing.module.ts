import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { PleaseSelectRecipeForRecipeDetailComponent } from './recipe-detail/please-select-recipe-for-recipe-detail/please-select-recipe-for-recipe-detail.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeSelectedGuardService } from './recipe-detail/recipe-selected-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './services/recipes-resolver-service';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'detail/:id',
        component: RecipeDetailComponent,
        canActivate: [RecipeSelectedGuardService],
        resolve: [RecipesResolverService],
      },
      {
        path: 'please-select',
        component: PleaseSelectRecipeForRecipeDetailComponent,
      },
      { path: 'new', component: RecipeEditComponent },
      { path: 'edit/:id', component: RecipeEditComponent },
    ],
  },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class RecipesRoutingModule {}
