import {Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'swat-tabs',
  template: `
    <ul class="nav nav-tabs">
        <li class="nav-item" *ngFor="let tab of tabs">
          <a class="nav-link"
             (click)="activateTab(tab)"
             [ngClass]="{ active: tab.active }"  
              href="#">{{ tab.title }}</a>
        </li>
    </ul>
  
    <div class="tab-content">
      <ng-content></ng-content>
    </div>
  `,

})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<any>;

  ngAfterContentInit(): void {
    this.tabs.toArray()[0].active = true;
  }

  activateTab(tab){
    this.tabs.forEach( tab => tab.active = false );
    tab.active =true;
  }

}
