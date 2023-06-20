import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription

  constructor() { }

  ngOnInit() {
    // this.subscription = interval(1000).subscribe(
    //   count => console.log(count)
    // )
    const customIntervalObservable = new Observable(
      observer => {
        let count = 0
        setInterval(
          () => {
            observer.next(count)
            if(count === 2){
              observer.complete()
            }
            if(count > 3){
              observer.error(new Error("Error: Count is greater than 3!"))
            }
            count++
          }
          ,
          1000
        )
      }
    )

    //Lesson 177. Operators
    let customIntervalObservableWithPipe = 
      customIntervalObservable.pipe(
          filter(
            (data: number) => data > 0
          ),
          map(
            (data: number) => "Round " + data
          ))

    this.subscription = customIntervalObservableWithPipe.subscribe(
      (data) => console.log(data),
      (error) => console.error(error), 
      () => console.log("Counting is complete.")
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  

}
