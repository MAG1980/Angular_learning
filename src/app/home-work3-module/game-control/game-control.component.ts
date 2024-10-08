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
  startIsActive = true
  stopIsActive = false

  startGame() {
    this.interval = setInterval(() => {
      this.counter += 1
      this.elementNumberGenerated.emit(this.counter)
    }, 1000)
    this.startIsActive = false
    this.stopIsActive = true
  }

  stopGame() {
    clearInterval(this.interval)
    this.startIsActive = true
    this.stopIsActive = false
  }

  ngOnDestroy() {
    this.startGame()
  }
}
