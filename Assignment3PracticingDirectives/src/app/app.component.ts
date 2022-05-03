import { Component } from '@angular/core';
import { logItem } from './logitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  displaySecret: boolean = false; 

  log: logItem[] = []

  toggleDisplay(): void{
    
    let logMessage: string; 
    
    if(this.displaySecret){
      logMessage = "The secret message was hidden. "
    }else{
      logMessage = "The secret message was revealed. "
    }

    this.displaySecret = !this.displaySecret

    let newLogItem: logItem = {
      index: this.log.length + 1,
      value: logMessage
    }

    this.log.push(newLogItem)
    
  }

}
