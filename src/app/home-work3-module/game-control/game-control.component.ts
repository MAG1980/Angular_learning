import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnDestroy {
  interval: ReturnType<typeof setInterval>
  counter = 0
  @Output() elementNumberGenerated = new EventEmitter<number>

  startGame() {
    this.interval = setInterval(() => {
      this.counter += 1
      this.elementNumberGenerated.emit(this.counter)
    }, 1000)

  }

  stopGame() {
    clearInterval(this.interval)
  }

  ngOnDestroy() {
    this.startGame()
  }
}
