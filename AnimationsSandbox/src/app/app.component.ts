import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          'transform': 'translateX(0)'
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          'transform': 'translateX(100px)'
        })
      ),
      transition("normal => highlighted", animate(300)),
      transition("highlighted => normal", animate(800))
    ]),
  ],
})
export class AppComponent {
  state = 'normal'

  onAnimate(){
    if(this.state == 'normal'){
      this.state = 'highlighted'
    }else{
      this.state = 'normal'
    }
    
  }
}
