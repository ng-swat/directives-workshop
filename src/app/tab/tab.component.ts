import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'swat-tab',
  template: `
     <div class="tab-pane">
        <ng-content></ng-content>
     </div>          
  `,
})
export class TabComponent  {

  @Input() title: string = '';
  public active: boolean;
}
