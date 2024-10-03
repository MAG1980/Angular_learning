import { Component } from '@angular/core';

@Component({
  selector: 'app-monolith',
  templateUrl: './monolith.component.html',
  styleUrls: ['./monolith.component.css']
})
export class MonolithComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
}
