import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("form") form: NgForm

  defaultQuestion = "pet"
  answer = ''
  genders = ['Male', 'Female']

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.form.setValue(
    //   {
    //     userData:{
    //       username: suggestedName, 
    //       email: 'testemail@provider.com'
    //     }, 
    //     secret: 'pet',
    //     questionAnswer: '', 
    //     gender: 'Female'
    //   }
    // )

    this.form.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    )
  }

  // onSubmit(form: NgForm){
  //   console.log(form.value)
  // }

  onSubmit(){
    console.log(this.form)
  }
}
