import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    // this.counter.update(v => ++v);
    this.counter.set(this.counter() + 1)
    this.actions.mutate((v) => v.push('INCREMENT'))
  }

  decrement() {
    this.counter.update(v => --v);
    this.actions.update(v => [... v, 'DECREMENT'])
  }
}
