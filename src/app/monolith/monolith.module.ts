import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { MonolithComponent } from './monolith.component';
import { CockpitComponent } from "../cockpit/cockpit.component";
import { ServerElementComponent } from "../server-element/server-element.component";
import { NgFor, NgIf } from "@angular/common";

@NgModule({
  declarations: [
    MonolithComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    FormsModule,
    NgFor,
    NgIf
  ],
  providers: [],
  exports: [MonolithComponent]
})
export class MonolithModule {}
