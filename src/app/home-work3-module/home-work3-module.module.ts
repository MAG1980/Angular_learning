import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenComponent } from "./even/even.component";
import { GameControlComponent } from "./game-control/game-control.component";
import { OddComponent } from "./odd/odd.component";
import { NomeWork3Component } from "./nome-work3/nome-work3.component";


@NgModule({
  declarations: [
    NomeWork3Component,
    GameControlComponent,
    EvenComponent,
    OddComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NomeWork3Component]
})
export class HomeWork3ModuleModule {
}
