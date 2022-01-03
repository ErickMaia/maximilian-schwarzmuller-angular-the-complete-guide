import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.sass']
})
export class TwoWayDataBindingComponent implements OnInit {

  constructor() { }

  bindingProperty:string = "Type your text here"

  ngOnInit(): void {
  }

}
