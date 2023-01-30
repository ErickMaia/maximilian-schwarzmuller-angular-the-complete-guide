import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  revealedMessage:string = ""

  showRevealedMessage(message: string){
    this.revealedMessage = message
  } 
}
