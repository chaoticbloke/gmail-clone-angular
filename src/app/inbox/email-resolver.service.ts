import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<any>{

  constructor() { }

  resolve(){
    console.log("inside resolve email")
  }
}
