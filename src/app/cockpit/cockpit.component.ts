import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output("bluePrintCreated") blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  /*  newServerName = '';
    newServerContent = '';*/
  //В качестве аргумента принимает локальную ссылку, название компонента или любой HTML-tag
  @ViewChild('serverContentInputLink') serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
