import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface EmailSummary{
  id:string;
  subject:string;
  from:string;
}
interface EmailDetails{
  id:string;
  text:string;
  to:string;
  from:String;
  subject:string;
  html:string;
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  rootUrl='https://api.angular-email.com';
  constructor(private http:HttpClient) { }

  getEmails(){
    //return this.http.get(this.rootUrl + "/emails");
    //withCredentials object is already implemented and added by interceptor
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }
  getEmailDetailsById(id:string){
      return this.http.get<EmailDetails>(`${this.rootUrl}/emails/${id}`)
  }
}
