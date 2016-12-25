import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[swatAutoDisable]'
})

export class AutoDisableDirective {

  @HostBinding() disabled;

  @HostListener('click')
  clickHandler(){
    this.disabled = true;
  }

}
