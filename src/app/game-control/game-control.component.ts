import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() intervalEmitter = new EventEmitter<number>();
  intervalId: any;
  num = 0;

  constructor() {}

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.intervalEmitter.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.intervalId);
  }
}
