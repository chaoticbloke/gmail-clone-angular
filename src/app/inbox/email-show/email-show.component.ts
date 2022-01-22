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
  this.activatedRoute.data.subscribe(res=>{
    console.log("resolver res in component", res);
    const {emailDetails} = res;
    this.email = emailDetails;
  })
    
  }

  ngOnInit(): void {
  
   
  }
  getEmailDetialsById(id:string){
 // as we are getting data from the resolver
    // this.emailService.getEmailDetailsById(id).subscribe((data)=>{
    //   this.email=data;
    // },(err)=>{
    //   //if there is incorrect id , navigate to not found component
    //   this.router.navigateByUrl(`/inbox/not-found`)
    // });
    // console.log("inside email show", this.email);
    
  }

}
