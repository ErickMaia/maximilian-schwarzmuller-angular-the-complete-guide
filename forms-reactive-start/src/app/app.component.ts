import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  genders = ['male', 'female'];
  signUpForm: FormGroup
  forbiddenUserNames: string[] = ["Chris", "Anna"]

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), 
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male', Validators.required), //type your gender 
      'hobbies': new FormArray([])
    }); 
    // this.signUpForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
    this.signUpForm.statusChanges.subscribe(
      (value) => console.log(value)
    )
  }

  onSubmit(){
    console.log(this.signUpForm);
  }
  
  onAddHobby(){
    const control = new FormControl(null, Validators.required); 
    (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }

  getHobbies(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls
  }

  //custom validator
  forbiddenNames(formControl: FormControl) : {[s: string]: boolean} {
    if (this.forbiddenUserNames.includes(formControl.value)) {
      return { "nameIsForbidden":true }
    }else{
      return null; 
    }
  }

  //async custom validator
  forbiddenEmails(formControl: FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if(formControl.value === "test@test.com"){
            resolve({"emailIsForbidden": true})
          }else{
            resolve(null)
          }
        } , 1500)
      }
    )
    return promise
  }

}
