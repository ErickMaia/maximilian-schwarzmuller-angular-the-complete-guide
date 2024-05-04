import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Decrement, Increment,  } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(Increment({value: 2}))
    // this.store.dispatch(new IncrementAction(3))
  }

  decrement() {
    this.store.dispatch(Decrement({value: 2}))
  }
}
