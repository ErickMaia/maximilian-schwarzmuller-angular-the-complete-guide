import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
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
          'border-radius': '0',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)',
          'border-radius': '0',
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
          'background-color': 'orange',
        }),
        animate(
          1000,
          style({
            'border-radius': '50px',
          })
        ),
        animate(500),
      ]),
    ]),

    trigger('listItem', [
      state(
        'in',
        style({
          opacity: '1',
          transform: 'translateX(0px)',
        })
      ),
      transition('void => *', [
        style({
          opacity: '0',
          transform: 'translateX(-20px)',
        }),
        animate(500),
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800,
          style({
            transform: 'translateX(100px)',
            opacity: '0',
          })),
        ])
      ]),
    ]),

    trigger('listItem2', [
      state(
        'in',
        style({
          opacity: '1',
          transform: 'translateX(0px)',
        })
      ),
      transition('void => *', [
        
        animate(1000, keyframes([
          style({
            opacity: '0',
            transform: 'translateX(-100px)',
            offset: 0
          }),
          style({
            opacity: '0.5', 
            transform: 'translateX(-50px)',
            offset: 0.3
          }),
          style({
            opacity: '1', 
            transform: 'translateX(-20px)',
            offset: 0.8
          }),
          style({
            opacity: '1', 
            transform: 'translateX(0px)',
            offset: 1
          }),
        ])),
      ]),
    ]),

    
  ],
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';

  items: string[] = [];
  itemText: string = '';

  onInsertItem() {
    this.items.push(this.itemText);
    console.log(this.items)
  }

  onAnimate() {
    this.state == 'normal'
      ? (this.state = 'highlighted')
      : (this.state = 'normal');
    this.wildState == 'normal'
      ? (this.wildState = 'highlighted')
      : (this.wildState = 'normal');
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onDeleteItem(index: number){
    this.items.splice(index, 1)
    console.log(this.items)
  }
}
