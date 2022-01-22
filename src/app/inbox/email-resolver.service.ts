import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EmailDetails } from '../shared/EmailDetails';

@Injectable({
  providedIn: 'root'
})

//resolve is an interface. just guids us not mandatory
//returns  : EmailDetails
export class EmailResolverService implements Resolve<EmailDetails>{

  email:EmailDetails={
    id:'',
    text:'null',
    to:'',
    from:'null',
    subject:'',
    html:''
  }
  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.email;
  }


}
