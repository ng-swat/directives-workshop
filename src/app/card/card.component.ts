import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swat-card',
  template: `
    <p>
      {{title}}
    </p>
  `,
  styles: []
})
export class CardComponent {

  public title: string = ''

}
