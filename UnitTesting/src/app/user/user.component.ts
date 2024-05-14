import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService]
})
export class UserComponent implements OnInit {

  user: {name: string} = {name: ''}
  isLoggedIn: boolean = false

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
      this.user = this.userService.user
  }

}
