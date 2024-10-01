import { Component } from '@angular/core';

export type LogItem = { id: number, date: Date }

@Component({
  selector: 'app-home-work2',
  templateUrl: './home-work2.component.html'
})
export class HomeWork2Component {
  showInformation: boolean = false
  log: LogItem[] = []

  onClickDisplayDetails() {
    this.showInformation = !this.showInformation
    this.log.push({
      id: this.log.length + 1,
      date: new Date(),
    })
  }
}
