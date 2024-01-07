import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy{

  userChangedSubscription: Subscription
  isAuthenticated: boolean = false

  constructor(
    private dataStorageService: DataStorageService, 
    private authService: AuthService
  ){

  }

  ngOnInit(){
    this.userChangedSubscription = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user
      }
    )
  }

  onSaveData(){
    this.dataStorageService.storeRecipes(); 
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(){
    this.userChangedSubscription.unsubscribe(); 
  }

}
