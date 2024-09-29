import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ServerModule } from "./server/server.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
