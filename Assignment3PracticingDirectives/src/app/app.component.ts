import { Component } from '@angular/core';
import { logItem } from './logitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  toggleDisplayButtonLabel: string = "Display details"; 

  displaySecret: boolean = false; 

  log: logItem[] = []

  toggleDisplay(): void{

    this.displaySecret = !this.displaySecret

    let logMessage: string; 
    
    if(this.displaySecret){
      logMessage = "The secret message was revealed. "
      this.toggleDisplayButtonLabel = "Hide details"
    }else{
      logMessage = "The secret message was hidden. "
      this.toggleDisplayButtonLabel = "Display details"
    }

    let newLogItem: logItem = {
      index: this.log.length + 1,
      value: logMessage
    }

    this.log.push(newLogItem)
    
  }

}
