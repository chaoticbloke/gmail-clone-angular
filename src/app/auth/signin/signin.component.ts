import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  signinForm = new FormGroup({
    username:new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-z0-9]+$/)]),
    password:new FormControl('',[Validators.required,Validators.minLength(4), Validators.maxLength(20)]),
  })

  onSubmit(){
    console.log(this.signinForm);
    
    this.authService.signin(this.signinForm.value).subscribe({
      next:()=>{
          this.router.navigateByUrl('/inbox')
      },
      error:(err)=>{
        const {username, password} =err;
        if(username || password){
          this.signinForm.setErrors({credentialsNotExist:true})
        }
        console.log("errors on login",err);
        
      }
    })
    this.signinForm.reset()
  }
}
