import { NgModule } from "@angular/core";
import { ServerComponent } from "./server.component";
import { NgClass, NgStyle } from "@angular/common";

@NgModule({
  declarations: [ServerComponent],
  providers: [],
  imports: [
    NgStyle,
    NgClass
  ],
  exports: [ServerComponent]
})
export class ServerModule {}
