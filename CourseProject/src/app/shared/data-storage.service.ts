import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/services/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipesService: RecipesService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();

    this.httpClient
      .put(
        'https://angular-testing-bfa5c-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.httpClient.get<Recipe[]>(
          'https://angular-testing-bfa5c-default-rtdb.firebaseio.com/recipes.json',
          { params: new HttpParams().set('auth', user.token) }
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((response) => {
        this.recipesService.setRecipes(response);
      })
    );
  }
}
