import { Directive, HostListener, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[type=number][formControlName],input[type=number][formControl]',
})
export class NumberInputDirective {
  constructor(@Self() private control: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    this.control.control!.setValue(parseFloat(value));
  }
}
