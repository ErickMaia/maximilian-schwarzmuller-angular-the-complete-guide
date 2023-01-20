import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'], 
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements 
                                    OnInit, 
                                    OnChanges, 
                                    DoCheck, 
                                    AfterContentInit,
                                    AfterContentChecked, 
                                    AfterViewInit, 
                                    AfterViewChecked, 
                                    OnDestroy {
  // @Input('srvElement')
  // element:{type:string, name: string, content: string}

  @Input() name: string

  constructor() { 
    console.log("Constructor called!")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called!");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called!");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called!");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called!");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
  }
  
  ngDoCheck(): void {
    console.log("ngDoCheck called!"); 
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called!")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called!")
  }

}
