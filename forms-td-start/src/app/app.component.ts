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
  user = {
    username: '', 
    email: '',
    secretQuestion: '', 
    answer: '', 
    gender: ''
  }

  submitted: boolean = false; 

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

    console.log(this.form.value.gender)

    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;

    this.submitted = true;

    this.form.reset();
  }
}
