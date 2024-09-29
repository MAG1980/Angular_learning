import { Component } from '@angular/core';

@Component({
  selector: '.app-servers.',
  templateUrl: './servers.component.html',
  styles: [`
    .servers-wrapper {
      background-color: lightgray;
    }
  `]
})
export class ServersComponent {
  allowNewServer = false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true
    }, 2000)
  }
}
