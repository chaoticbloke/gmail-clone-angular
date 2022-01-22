import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,OnDestroy {

  @Output() dismiss = new EventEmitter();
  constructor(private el:ElementRef) { }
 
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
   this.el.nativeElement.remove();
  }
  isClicked=true
  onDismissClick(){
    this.isClicked=false
    this.dismiss.emit();
  }

}
