import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmailDetails } from '../shared/EmailDetails';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})

//resolve is an interface. just guids us not mandatory
//returns  : EmailDetails
export class EmailResolverService implements Resolve<EmailDetails>{
email:EmailDetails;
  constructor(private emailService:EmailService,private router:Router) { }
  resolve(route: ActivatedRouteSnapshot) {

   const {id} = route.params;
     
      
      return this.emailService.getEmailDetailsById(id)
      .pipe(catchError((err)=>{
        //if user navigates to wrong url id for email navigate to not-found
        //return EMPTY obser to just make happy typescript
        this.router.navigateByUrl("/inbox/not-found")
          return EMPTY;
      }))
  }


}
