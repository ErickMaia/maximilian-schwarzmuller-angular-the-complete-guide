import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>(); 
  @Output("bpCreated") blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent : string}>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: string) {
    this.serverCreated.emit(
        {
          serverName: serverNameInput, 
          serverContent: this.serverContentInput.nativeElement.value
        }
      ); 
  }

  onAddBlueprint(serverNameInput: string) {
    this.blueprintCreated.emit(
      {
        blueprintName: serverNameInput, 
        blueprintContent: this.serverContentInput.nativeElement.value
      }
    ); 
  }
}
