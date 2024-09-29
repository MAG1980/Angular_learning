import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ServerModule } from "./server/server.module";
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent
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
