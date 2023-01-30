import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.sass']
})
export class Test1Component {

  @Output() customEventEmitter = new EventEmitter<string>()

  customEventExample(){
    this.customEventEmitter.emit("from the deepest dungeons of the dark mountain inhuman echoes of craving could be heard...")
  }
}
