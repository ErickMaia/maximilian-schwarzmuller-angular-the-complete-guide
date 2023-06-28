import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  projectForm: FormGroup = new FormGroup(
    {
      "name": new FormControl(null, [Validators.required], this.asyncProjectNameIsTest), 
      "email": new FormControl(null, [Validators.required, Validators.email]), 
      "status": new FormControl(null, Validators.required)
    }
  )

  onSubmit(){
    console.log(this.projectForm);
    
  }

  // SYNCHRONOUS CUSTOM VALIDATOR FOR PROJECT NAME
  projectNameIsTest(formControl: FormControl): {[s: string]: boolean} {
    if(formControl.value === "Test"){
      return {"projectNameIsTest": true}
    }else{
      return null
    }
  }

  // ASYNCHRONOUS CUSTOM VALIDATOR FOR PROJECT NAME
  asyncProjectNameIsTest(formControl: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            if(formControl.value === "Test"){
              resolve({"projectNameIsTest": true})
            }else{
              resolve(null)
            }
          }
          ,1500
        )
      }
    )
    return promise
  }

}
