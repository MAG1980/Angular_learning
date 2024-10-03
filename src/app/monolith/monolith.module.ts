import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { MonolithComponent } from './monolith.component';
import { AppModule } from "../app.module";

@NgModule({
  declarations: [
    MonolithComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppModule,
  ],
  providers: [],
  exports: [MonolithComponent]
})
export class MonolithModule { }
