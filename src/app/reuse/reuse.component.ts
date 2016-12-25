import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'swat-reuse',
  template: `
  <h1>{{ title }}</h1>
  <button (click)="clicked.emit()">click</button>
  `,
})
export class ReuseComponent {

  @Input() title: string;
  @Output() clicked = new EventEmitter<any>();


}
