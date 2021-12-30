import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm= new FormGroup({
    username:new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-z0-9]+$/)],[this.uniqueUsername.validate]),
    password:new FormControl('',[Validators.required,Validators.minLength(4), Validators.maxLength(20)]),
    passwordConfirmation:new FormControl('',[Validators.required,Validators.minLength(4), Validators.maxLength(20)])
  },{validators:[this.customValidatorClass.validate]});


  constructor(private customValidatorClass : MatchPassword,
     private uniqueUsername:UniqueUsername
     ,private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("form data :", this.signupForm.value);

    //we can pass object in subscribe({next,complete,error})
    //complete not so useful, can be ignored
    this.authService.signup(this.signupForm.value).subscribe({
      next:(response)=>{
        console.log("response from server", response);
        //navigate to some other page/feature on signup
        this.router.navigateByUrl('/inbox')
      },
      complete:()=>{
        console.log("signup completed");
        
      },
      error:(err)=>{
         console.log("errors in signup", err);
         if(err.status === 0)
         this.signupForm.setErrors({noConnection:true})
         else{
           this.signupForm.setErrors({unknownError:true})
         }
      }
    })
    //this is another way we generally do
    // this.authService.signup(this.signupForm.value).subscribe((data)=>{
    //   console.log("response onSubmit from", data);
      
    // })
    this.signupForm.reset()
  }

}
