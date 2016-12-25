import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'swat-tab',
  template: `
     <div class="tab-pane" [ngClass]="{ active: active}">
        <ng-content></ng-content>
     </div>          
  `,
})
export class TabComponent  {

  @Input() title: string = '';
  public active: boolean;
}
