import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private http:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.http.signout().subscribe(()=>{
      //navigate to signin page or other page
         this.router.navigateByUrl("/")
         //navigates to root i.e localhost://4200
    })
  }

}
