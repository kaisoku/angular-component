import { Component } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './success.component.html',
  styles: [
    `
      p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid green;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
