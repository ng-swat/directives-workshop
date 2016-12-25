import {Component, ViewChild, AfterViewInit, ViewChildren} from '@angular/core';
import {TabsComponent} from "./tabs/tabs.component";
import {TabComponent} from "./tab/tab.component";

@Component({
  selector: 'swat-root',
  template: `  
    <div class="container">
     <button swatAutoDisable class="btn btn-lg btn-primary">click</button>        
    </div>  
  `,
})
export class AppComponent {
  value = 0;
}









