import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[swatIf]'
})
export class IfDirective {

  private template: TemplateRef<any>;
  private container: ViewContainerRef;

 constructor(template: TemplateRef<any>, container:ViewContainerRef){
   this.template = template;
   this.container = container;
 }

@Input() set swatIf(flag){
   if(flag){
     this.container.createEmbeddedView(this.template);
   } else {
     this.container.clear();
   }
}

}
