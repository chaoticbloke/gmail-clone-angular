import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, Validators } from "@angular/forms";

@Injectable({providedIn:'root'})
export class MatchPassword implements Validators{

/**
 * control : AbstractControl, means paramter could be either formGroup or FormControl.
 * we cam individually use it too either FormGroup or FormControl
 * @param control 
 * return null if all OK , in case of errors return object
 */
    validate(control:AbstractControl){
        const {password, passwordConfirmation} = control.value;
        if(password === passwordConfirmation){
            return null;
        } else{
            return {passwordDontMatch:true}      
        }
         
    }

}

//eg : signupForm.errors ==={passwordDontMatch :true} , in case of errors
