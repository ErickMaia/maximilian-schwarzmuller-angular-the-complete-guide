import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.sass']
})
export class GameControlComponent {

  count: number = 0; 

  @Output() counting = new EventEmitter<number>(); 

  counter: any; 

  onStart(){
    this.counter = setInterval(() => this.counting.emit(this.count++), 1000)
  }

  onStop(){
    clearInterval(this.counter)
  }
}
