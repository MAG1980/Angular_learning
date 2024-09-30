import { NgModule } from "@angular/core";
import { ServerComponent } from "./server.component";
import { NgStyle } from "@angular/common";

@NgModule({
  declarations: [ServerComponent],
  providers: [],
  imports: [
    NgStyle
  ],
  exports: [ServerComponent]
})
export class ServerModule {}
