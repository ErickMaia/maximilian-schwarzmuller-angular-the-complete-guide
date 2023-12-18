import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth', 
    templateUrl: './auth.component.html'
})
export class AuthComponent{

    constructor(private authService: AuthService){

    }

    isLoginMode = true; 

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode
    }

    onSubmit(authForm: NgForm){
        if(authForm.invalid){
            return; 
        }

        const email = authForm.value.email; 
        const password = authForm.value.password; 


        if(this.isLoginMode){
            // TODO add login logic
        }else{

        this.authService.signUp(email, password)
            .subscribe(
                response => {
                    console.log(response)
                },
                error => {
                    console.log(error)
                }
            )
        }

        authForm.reset()
    }
}