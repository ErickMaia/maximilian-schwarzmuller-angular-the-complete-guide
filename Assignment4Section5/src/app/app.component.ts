import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  numbers: number[] = []

  onCounting(count: number){
    this.numbers.push(count)
  }

}
