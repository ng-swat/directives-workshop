import {Component, Input} from '@angular/core';

@Component({
  selector: 'swat-nav',
  template: `
    <ul class="nav">
      <li class="nav-item" 
          *ngFor="let item of items"
          (click)="setActive(item)">
          
        <a class="nav-link"
           [ngClass]="{ active: item.active }"       
           href="#">{{ item.label }}</a>           
      </li>      
    </ul>
  `,
})
export class NavComponent  {
  @Input() items: any[];

  setActive(item){
    this.items.forEach( item => item.active = false);
    item.active = true;
  }
}
