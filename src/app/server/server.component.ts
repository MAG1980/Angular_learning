import { Component } from "@angular/core";

export type status = 'idle' | 'loading' | 'success' | 'error';
export type color = 'yellow' | 'blue' | 'green' | 'red';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    p {
      color: green;
    }
  `]
})
export class ServerComponent {
  serverId: number = 1;
  serverStatus: status = 'idle';
  statuses: status[] = ['idle', 'loading', 'success', 'error'];
  colors: color[] = ['yellow', 'blue', 'green', 'red'];
  color: color = 'yellow';

  constructor() {
    this.setServerStatus();
    this.color = this.setColor();
  }

  setServerStatus() {
    let randomNumber = Math.floor(Math.random() * this.statuses.length);
    this.serverStatus = this.statuses[randomNumber];
  }

  setColor() {
    switch ( this.serverStatus ) {
      case 'idle':
        return this.colors[0];
      case 'loading':
        return this.colors[1];
      case 'success':
        return this.colors[2];
      case 'error':
        return this.colors[3];
      default:
        return this.colors[0];
    }
  }
}
