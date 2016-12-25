import {Component} from '@angular/core';

@Component({
  selector: 'swat-root',
  template: `  
    <div class="container">
      <swat-nav [items]="menuItems"></swat-nav>
      <swat-nav-inline [items]="menuItems"></swat-nav-inline>
    </div>  
  `,
})
export class AppComponent {

  menuItems = [
    {label: 'one', active: true },
    {label: 'two', active: false },
    {label: 'tree', active: false }
  ]

}
