import { Component } from '@angular/core';

@Component({
  selector: 'swat-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'swat works!';
}
