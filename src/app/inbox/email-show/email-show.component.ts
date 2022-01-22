import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailDetails } from 'src/app/shared/EmailDetails';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email:EmailDetails;

  constructor(private emailService:EmailService,private activatedRoute:ActivatedRoute,private router:Router) { 
    //get resolver's data
    console.log("resolvers data",this.activatedRoute.snapshot.data);
    
  }

  ngOnInit(): void {
    console.log("activated route", this.activatedRoute.params.subscribe((data)=>{
      const {id}= data;
    this.getEmailDetialsById(id);
    }));
    
   
  }
  getEmailDetialsById(id:string){

    this.emailService.getEmailDetailsById(id).subscribe((data)=>{
      this.email=data;
    },(err)=>{
      //if there is incorrect id , navigate to not found component
      this.router.navigateByUrl(`/inbox/not-found`)
    });
    console.log("inside email show", this.email);
    
  }

}
