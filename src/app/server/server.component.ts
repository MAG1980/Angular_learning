import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    p{
      color: green;
    }
    `]
})
export class ServerComponent {
  serverId: number = 1;
  serverStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  getServerStatus() {
    return this.serverStatus;
  }
}
