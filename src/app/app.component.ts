import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isSigned:boolean=false;
   constructor(private authService:AuthService){}
  ngOnInit(): void {
    //another way we can subscribe through 'async' PIPE
    // we'd take reference to Observable/SubjectBehavour, eg: temp=authService.signedIn$
    //then in template, temp | async, here async would automatically subscribe
    this.authService.signedIn$.subscribe((data:boolean)=>{
      this.isSigned=data;
    })

    //check if user is signedIN
    this.authService.checkAuthStatus().subscribe((res:any)=>{
      this.isSigned=res.authenticated;
      
    })

    console.log("isSignedIn in App", this.isSigned);
    
  }
}
