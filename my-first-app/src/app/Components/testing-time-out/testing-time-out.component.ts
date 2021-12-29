import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-testing-time-out',
  templateUrl: './testing-time-out.component.html',
  styleUrls: ['./testing-time-out.component.sass']
})
export class TestingTimeOutComponent implements OnInit {

  buttonIsEnabled: boolean = false; 

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.buttonIsEnabled = true; }, 3000)
  }

  printElement(element: any){
    console.log(element); 
  }

}
