import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthService } from "../auth.service";
/**
 * Async validator class to make sure username is unique from server.
 * runs only once the sync validators are completed with no errors
 */
@Injectable({providedIn:'root'})
export class UniqueUsername implements AsyncValidator{
    errors:ValidationErrors ={notUniqueName:true}
    constructor(private service:AuthService){}

    validate=(control:AbstractControl)=>{
        const {value}=control;
        //usernameAvailable is serive method for making Network request
        return this.service.usernameAvailable(value)
        .pipe(map((val)=>{
            return null;
        }),catchError((err)=>{
            if(err.error.username){

                return of(this.errors)
            }
           else{

               return of({noConnection:true})
           }
        }))  
    }
    
}

