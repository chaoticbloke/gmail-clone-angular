import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
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
  }
}
