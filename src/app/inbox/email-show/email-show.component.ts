import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailDetails } from 'src/app/shared/email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email:EmailDetails;

  constructor(private emailService:EmailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("activated route", this.activatedRoute.params.subscribe((data)=>{
      const {id}= data;
    this.getEmailDetialsById(id);
    }));
    
   
  }
  getEmailDetialsById(id:string){

    this.emailService.getEmailDetailsById(id).subscribe((data)=>{
      this.email=data;
    });
    console.log("inside email show", this.email);
    
  }

}
