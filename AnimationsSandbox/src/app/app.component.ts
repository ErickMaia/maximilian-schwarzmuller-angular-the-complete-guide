import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px)',
        })
      ),
      transition('normal <=> highlighted', animate(300)),
    ]),

    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)',
          'border-radius': '0'
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)',
          'border-radius': '0'
        })
      ),
      state(
        'shrunken',
        style({
          'background-color': 'green',
          transform: 'translateX(0) scale(0.5)',
        })
      ),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }), 
        animate(1000, style({
          'border-radius': '50px'
        })), 
        animate(500)
      ]),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal'; 
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal'; 
  }

  onShrink(){
    this.wildState = 'shrunken';
  }
}
