import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activationCount: number = 0
  deactivationCount: number = 0

  constructor() { }

  print(): void{
    console.log("Activation count: " + this.activationCount)
    console.log("Deactivation count: " + this.deactivationCount)
  }

}
