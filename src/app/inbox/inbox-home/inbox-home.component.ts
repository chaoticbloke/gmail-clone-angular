import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
interface EmailDetails{
  id:string;
  text:string;
  to:string;
  from:String;
  subject:string;
  html:string;
}
@Component({
  selector: 'app-inbox-home',
  templateUrl: './inbox-home.component.html',
  styleUrls: ['./inbox-home.component.css']
})
export class InboxHomeComponent implements OnInit {

  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
  }
  showModal=false

}
