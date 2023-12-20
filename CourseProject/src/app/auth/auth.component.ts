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
    isLoading = false; 
    error: string = null;

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode
    }

    onSubmit(authForm: NgForm){
        if(authForm.invalid){
            return; 
        }

        const email = authForm.value.email; 
        const password = authForm.value.password; 


        this.isLoading = true; 

        if(this.isLoginMode){
            // TODO add login logic
        }else{

        this.authService.signUp(email, password)
            .subscribe(
                response => {
                    console.log(response)
                    this.isLoading = false; 
                },
                errorMessage => {
                    console.log(errorMessage)
                    this.error = errorMessage;
                    this.isLoading = false; 
                }
            )
        }

        authForm.reset()

        
    }
}