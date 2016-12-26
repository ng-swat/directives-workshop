import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {CardComponent} from "./card/card.component";

@Component({
  selector: 'swat-root',
  template: `  
    <div class="container">
       <button (click)="createInstance()">crate</button>                                                                                                                                                        
       <div #container></div>      
    </div>  
  `,
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef}) container;
  private resolver: ComponentFactoryResolver;

  constructor(resolver:ComponentFactoryResolver) {
    this.resolver = resolver;
  }

  createInstance(){
    const cardFactory = this.resolver.resolveComponentFactory(CardComponent);
    const card = this.container.createComponent(cardFactory);
    card.instance.title = "Nir";
  }
}









