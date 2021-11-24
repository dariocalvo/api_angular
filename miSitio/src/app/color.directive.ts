import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.elemento.nativeElement.className = "error";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elemento.nativeElement.className = "efecto";
  }

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.className = "error";
  }

}
