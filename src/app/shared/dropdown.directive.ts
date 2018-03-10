import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    /*if (!this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, "open");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "open");
    }*/
    this.isOpen = !this.isOpen;
  }

}
