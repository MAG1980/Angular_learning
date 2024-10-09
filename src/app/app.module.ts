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
import { HomeWork3ModuleModule } from "./home-work3-module/home-work3-module.module";
import { BasicHighlighyDirective } from "./directives/basic-highlighy.directive";
import { BetterHighlightDirective } from './directives/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HomeWork2Component,
    BasicHighlighyDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServerModule,
    MonolithModule,
    HomeWork3ModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
