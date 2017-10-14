import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
@Input() tooltip: string;

constructor() { }

@HostListener('mouseenter') onMouseEnter() {
  console.log('Mouse entered Element');
}
@HostListener('mouseleave') onMouseLeave() {
  console.log('Mouse left Element');
}
}
