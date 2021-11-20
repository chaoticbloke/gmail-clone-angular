import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {tap} from 'rxjs/operators'
 
interface UserNameAvailable{
  available:boolean;
}
interface SignUpResponse{
  username:string
}
interface SignUpCredentials{
  username:string;
  password:string;
  passwordConfirmation:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl ='https://api.angular-email.com/auth';

  //community convention to put $ sign for Observable
  //we are using here to store the status of userSignedIN and to let other
  //component know that user is signedIn.
  signedIn$ = new BehaviorSubject(false);

  constructor(private http:HttpClient) { }

/**
 * make request to server for unique username
 * @param username 
 * @returns 
 */
  usernameAvailable(username:string){
    //note : if key-value in object are equal {username:username}
    // we can take just as {username}
    return this.http.post<UserNameAvailable>(`${this.rootUrl}/username`,{username:username})
  }

  /**
   * signup/ register new user
   * @param credentials 
   */
  signup(credentials:SignUpCredentials){
      return this.http.post<SignUpResponse>(`${this.rootUrl}/signup`, credentials)
      .pipe(tap(()=>{
        //tap operator skips error part.
        //it runs only if we have successful response
        this.signedIn$.next(true);
      }))
  }


}
