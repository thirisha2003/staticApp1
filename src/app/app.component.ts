import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Sample {{value}}</div>`,
})
export class AppComponent {
  value = 'Web App';
}
