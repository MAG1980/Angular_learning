import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ServerModule } from "./server/server.module";
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { HomeWork2Component } from './home-work2/home-work2.component';
import { MonolithModule } from "./monolith/monolith.module";

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HomeWork2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServerModule,
    MonolithModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
