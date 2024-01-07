import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user = new BehaviorSubject<User>(null); 

  constructor(private httpClient: HttpClient, private router: Router) {}

  // Just an API key for testing purposes on this course. It doesn't store important information and there is no problem for it to be explicit here.
  apiKey = 'AIzaSyDqCggIG453WcBWmiFPbxucyaRRmdaqwRg';

  signUp(email: string, password: string) {
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
      this.apiKey;

    return this.httpClient
      .post<AuthResponseData>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAutentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  private handleAutentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);

    localStorage.setItem('userData', JSON.stringify(user))
  }

  login(email: string, password: string) {
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      this.apiKey;

    return this.httpClient
      .post<AuthResponseData>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAutentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  logout(){
    localStorage.removeItem('userData')
    this.user.next(null)
    this.router.navigate(['/auth']);
  }

  autoLogin(){
    const userData: {
      email: string, 
      id: string,
      _token: string, 
      _tokenExpirationDate: string
     } = JSON.parse(localStorage.getItem('userData'))

    if(!userData) return

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))

    if(loadedUser.token){
      this.user.next(loadedUser); 
    }
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error ocurred.';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage =
          'The email address is already in use by another account.';
        break;
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD':
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage =
          'Invalid login. Please check if the email and password provided are correct.';
        break;
    }

    return throwError(errorMessage);
  }
}
