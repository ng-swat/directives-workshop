import {Directive, ElementRef, AfterViewInit, Renderer} from '@angular/core';

@Directive({
  selector: '[swatFocus]'
})
export class FocusDirective implements AfterViewInit{
  private element: ElementRef;
  private renderer: Renderer;

  constructor(element: ElementRef, renderer:Renderer) {
    this.element = element;
    this.renderer = renderer;
  }

  ngAfterViewInit(): void {
    this.renderer.invokeElementMethod(this.element.nativeElement, 'focus');
  }
}
