import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  user: {name: string} = {name: ''}
  isLoggedIn: boolean = false

  constructor(){

  }

  ngOnInit(): void {
      
  }

}
