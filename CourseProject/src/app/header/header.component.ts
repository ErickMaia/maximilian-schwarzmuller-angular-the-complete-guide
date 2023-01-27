import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderNavigation } from '../shared/header-navigation';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() navigateTo = new EventEmitter<HeaderNavigation>(); 

  constructor() { }

  ngOnInit(): void {
  }

  navigateToRecipes(){
    this.navigateTo.emit(HeaderNavigation.Recipes)
  }

  navigateToShoppingList(){
    this.navigateTo.emit(HeaderNavigation.ShoppingList)
  }
}
