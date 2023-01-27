import { Component } from '@angular/core';
import { HeaderNavigation } from './shared/header-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  activePage: HeaderNavigation = HeaderNavigation.Recipes

  navigateTo(page: HeaderNavigation){
    this.activePage = page
  }

  activePageIsRecipes():boolean{
    return this.activePage == HeaderNavigation.Recipes
  }

  activePageIsShoppingList(): boolean{
    return this.activePage == HeaderNavigation.ShoppingList
  }
  
}
