import { Component, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from '../shared/alert/alert.component'; 
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth', 
    templateUrl: './auth.component.html'
})
export class AuthComponent{

    constructor(
        private authService: AuthService, 
        private router: Router, 
        private componentFactoryResolver: ComponentFactoryResolver){

    }

    @ViewChild(PlaceholderDirective)
    alertHost: PlaceholderDirective

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

        let authObservable : Observable<AuthResponseData>

        if(this.isLoginMode){
            authObservable = this.authService.login(email, password)
        }else{
            authObservable = this.authService.signUp(email, password)
        }

        authObservable.subscribe(
            response => {
                console.log(response)
                this.isLoading = false; 
                this.router.navigate(["/recipes"]); 
            },
            errorMessage => {
                console.log(errorMessage)
                this.error = errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading = false; 
            }
        )

        authForm.reset()

        
    }

    onHandleError(){
        this.error = null;
    }

    private showErrorAlert(errorMessage: string){
        // line below won't work. 
        //It'll just create the component in memory but won't render it in the DOM. 
        // const alertComp = new AlertComponent();

        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
            AlertComponent
        ); 
        
        const hostViewContainerRef = this.alertHost.viewContainerRef

        hostViewContainerRef.clear()

        hostViewContainerRef.createComponent(alertComponentFactory); 

    }
}