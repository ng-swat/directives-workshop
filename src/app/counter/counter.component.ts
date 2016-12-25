import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'swat-counter',
  template: `
    {{ countValue }}
    <button (click)="inc()">inc</button>
    <button (click)="dec()">inc</button>
  `,
  styles  : []
})
export class CounterComponent {

  // <swat-counter [count]="value" (countChange)="value = $event"></swat-counter>

  private countValue = 0;

  @Output() countChange = new EventEmitter();

  @Input() get count() {
    return this.countValue;
  }

  set count(val) {
    this.countValue = val;
    this.countChange.emit(this.countValue)
  }

  inc() {
    this.count += 1;
  }

}
