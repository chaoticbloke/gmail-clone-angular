import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()individualInput:FormControl;
  @Input()label:string;
  constructor() { }

  ngOnInit(): void {
  }

  showErrors(){
    console.log("individula object :", this.individualInput);
    
    const {dirty, touched, errors}= this.individualInput;
    return touched || dirty && errors;
  }
}
