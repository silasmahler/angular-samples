import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input()
  set tooltip(newVal) {this.tooltipElement.innerText = newVal; }

  tooltipElement: HTMLDivElement = document.createElement('div');

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.appendChild(this.tooltipElement);
  }

@HostListener('mouseenter') onMouseEnter() {
  console.log('Mouse entered Element');
  this.tooltipElement.hidden = false;
}
@HostListener('mouseleave') onMouseLeave() {
  console.log('Mouse left Element');
  this.tooltipElement.hidden = true;
}
}
