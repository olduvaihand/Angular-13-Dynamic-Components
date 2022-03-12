import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <svg:svg class="dynamic-svg" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"></svg>
    <div class="dynamic-html"></div>
  `,
  styles: [
      'svg { border: 2px solid orange; }',
  ]
})
export class AppComponent {
  title = 'dynamic-svg';
}
