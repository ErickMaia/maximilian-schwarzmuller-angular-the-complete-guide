import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  @ViewChild("form") form!: NgForm

  user = {
    email: "", 
    subscription: "", 
    password: ""
  }

  defaultSubscription: string = ""

  submitted: boolean = false

  ngOnInit(): void {
    this.defaultSubscription = "Advanced"
  }

  onSubmit(){
    console.log(this.form.value)

    this.user = {
      email: this.form.value.email,
      subscription: this.form.value.subscription,
      password: this.form.value.password
    }

    this.submitted = true
  }
}
