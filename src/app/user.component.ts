import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>Hello {{name}}</p>
    <p>I'm user component</p>
  `
})

export class UserComponent {
  name = 'Mario';

  onUserInput(event) {
    this.name = event.target.value;
  }
}
