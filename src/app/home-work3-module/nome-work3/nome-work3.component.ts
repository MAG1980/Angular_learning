import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-work3',
  templateUrl: './nome-work3.component.html',
  styleUrl: './nome-work3.component.css'
})
export class NomeWork3Component {
  oddNumbers: number[] = []
  evenNumbers: number[] = []

  addComponent($event: number) {
    if ( $event % 2 === 0 ) {
      this.oddNumbers.push($event)
    } else {
      this.evenNumbers.push($event)
    }
    console.log($event)
  }
}
