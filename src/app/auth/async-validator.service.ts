import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//backendAPI response data structure
interface UserNameAvailable{
  available:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService {

  constructor(private http:HttpClient) { }


  usernameAvailable(username:string){
    //note : if key-value in object are equal {username:username}
    // we can take just as {username}
    return this.http.post<UserNameAvailable>('https://api.angular-email.com/auth/username',{username:username})
  }
}
