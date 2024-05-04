import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Increment, Decrement } from '../store/counter.actions';
// import { IncrementAction } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(Increment({value: 3}))
    // this.store.dispatch(new IncrementAction(3))
  }

  decrement() {
    this.store.dispatch(Decrement({value: 2}))
  }
}
