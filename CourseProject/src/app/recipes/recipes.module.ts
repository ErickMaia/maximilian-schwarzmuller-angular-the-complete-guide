import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { PleaseSelectRecipeForRecipeDetailComponent } from "./recipe-detail/please-select-recipe-for-recipe-detail/please-select-recipe-for-recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        PleaseSelectRecipeForRecipeDetailComponent,
        RecipeEditComponent,
    ], 
    imports: [
        RouterModule, 
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        PleaseSelectRecipeForRecipeDetailComponent,
        RecipeEditComponent,
    ]

})
export class RecipesModule{

}