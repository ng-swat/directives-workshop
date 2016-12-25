import {Component} from "@angular/core";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'swat-nav-inline',
  template: `
    <nav class="nav nav-inline">
      <a *ngFor="let item of items" 
         class="nav-link" [ngClass]="{active: item.active}" href="#">
          {{item.label}} 
        </a>  
    </nav>
  `,
})
export class NavInlineComponent extends NavComponent {

}
