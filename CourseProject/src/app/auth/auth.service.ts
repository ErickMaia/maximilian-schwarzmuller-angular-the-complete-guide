import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface AuthResponseData{
    kind: string
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(private httpClient: HttpClient){

    }

    // Just an API key for testing purposes on this course. It doesn't store important information and there is no problem for it to be explicit here.
    apiKey = "AIzaSyDqCggIG453WcBWmiFPbxucyaRRmdaqwRg"

    signUp(email: string, password: string){

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.apiKey

        return this.httpClient.post<AuthResponseData>
        (
            url, 
            {
                email: email, 
                password: password, 
                returnSecureToken: true
            }
        ).pipe(catchError(
            errorResponse => {

                let errorMessage = "An unknown error ocurred."

                if(!errorResponse.error || !errorResponse.error.error){
                    return throwError(errorMessage); 
                }

                switch(errorResponse.error.error.message){
                    case 'EMAIL_EXISTS': 
                        errorMessage = "The email address is already in use by another account."
                }

                return throwError(errorMessage); 
            }
        ))
    }


    login(email: string, password: string){
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.apiKey

        return this.httpClient.post<AuthResponseData>(
            url, 
            {
                email: email, 
                password: password, 
                returnSecureToken: true
            }
        )

    }

}