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
  serverCreationStatus = 'No server was created!';
  tempServerName='';
  serverName='';
  servers: string[] = ['Testserver', 'Testserver 2'];
  twoWayBindingText='';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
    this.serverName = this.tempServerName;
    this.servers.push(this.serverName);
    this.tempServerName='';
    console.log(this.servers);
  }

  onUpdateServerName(event: Event) {
    this.serverName=''
    console.log(event);
    this.tempServerName= (<HTMLInputElement>event.target).value
    // this.serverName= (event.target as HTMLInputElement).value
    console.log(this.tempServerName);
  }

  clearTwoWayBindingText(){
    this.twoWayBindingText='';
  }
}
