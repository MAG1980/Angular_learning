import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: `<p class="warning">Warning!</p>`,
  styles:[`
  .warning{
    color: red;
    border: 1px solid red;
    padding: 20px;
  }
  `]
})
export class WarningAlertComponent {}
