import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';
interface EmailSummary{
  id:string;
  subject:string;
  from:string;
}
@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {

  emails:EmailSummary[] =[]
  @Output()idEmail = new EventEmitter<string>();
  constructor(private emailService:EmailService,private router:Router) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((res)=>{
      this.emails=res;
    })
  }

  showEmail(id:string){
    console.log("inside emailIndex", id);
    
    //use child routes :id ; where id is wildcard param
    this.idEmail.emit(id);
   this.router.navigateByUrl(`/inbox/${id}`)
   
  }
}
