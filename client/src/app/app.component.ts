import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><button class='btn btn-success'>success</button>`,
})
export class AppComponent  { name = 'Angular'; }
