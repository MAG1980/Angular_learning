import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { MonolithComponent } from './monolith.component';

@NgModule({
  declarations: [
    MonolithComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports: [MonolithComponent]
})
export class MonolithModule { }
