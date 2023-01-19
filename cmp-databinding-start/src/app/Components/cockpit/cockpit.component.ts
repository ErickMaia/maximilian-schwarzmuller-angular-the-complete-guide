import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>(); 
  @Output("bpCreated") blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent : string}>();

  onAddServer(serverNameInput: string, serverContentInput: string) {
    this.serverCreated.emit(
        {
          serverName: serverNameInput, 
          serverContent: serverContentInput
        }
      ); 
  }

  onAddBlueprint(serverNameInput: string, serverContentInput: string) {
    this.blueprintCreated.emit(
      {
        blueprintName: serverNameInput, 
        blueprintContent: serverContentInput
      }
    ); 
  }

}
