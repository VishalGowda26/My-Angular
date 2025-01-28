import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]',
})
export class CapitalDirective {
  constructor(private _elementRef: ElementRef) {}

  @HostListener('keyup')
  change() {
    // Get the current input value and convert it to uppercase
    const inputValue = this._elementRef.nativeElement.value;
    this._elementRef.nativeElement.value = inputValue.toUpperCase();
  }
}
