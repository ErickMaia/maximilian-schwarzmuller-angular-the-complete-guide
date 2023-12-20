import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

interface AuthResponseData{
    kind: string, 
    idToken: string, 
    email: string,
    refreshToken: string, 
    expiresIn: string, 
    localId: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(private httpClient: HttpClient){

    }

    signUp(email: string, password: string){

        let apiKey = "AIzaSyDqCggIG453WcBWmiFPbxucyaRRmdaqwRg"

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + apiKey

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

}