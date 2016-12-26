import {Directive, TemplateRef, ViewContainerRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[swatFor]'
})
export class ForDirective implements OnInit{
  private template: TemplateRef<any>;
  private container: ViewContainerRef;

  @Input() swatForFoo;

  constructor(template: TemplateRef<any>, container:ViewContainerRef) {
    this.template = template;
    this.container = container;
  }
  ngOnInit(): void {
    this.swatForFoo.forEach( item => {
     this.container.createEmbeddedView(this.template, {
       $implicit: item
     })
    })
  }
}
