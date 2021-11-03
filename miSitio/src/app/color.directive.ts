import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.className = "error";
  }

  

}
