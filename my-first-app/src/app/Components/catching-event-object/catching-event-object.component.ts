import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catching-event-object',
  templateUrl: './catching-event-object.component.html',
  styleUrls: ['./catching-event-object.component.sass']
})
export class CatchingEventObjectComponent implements OnInit {

  constructor() { }

  estilo = {
    'background-color': 'white'
  }

  ngOnInit(): void {
  }

  printEvent(event: Event){
    //read more about type casting below at <https://www.typescripttutorial.net/typescript-tutorial/type-casting/>
    let corDeFundo: string = (event.target as HTMLInputElement).style.backgroundColor; 
    let cor: string = window.getComputedStyle((<HTMLInputElement>event.target)).color; 
    console.log("Cor de fundo: " + corDeFundo);
    console.log("Cor: " + cor.toString());
  }

}
