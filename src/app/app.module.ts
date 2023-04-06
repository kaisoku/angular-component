import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WarningAlertComponent } from "./alert/warningAlert/warning.component";
import { SuccessAlertComponent } from "./alert/successAlert/success.component";
@NgModule({
  declarations: [AppComponent, WarningAlertComponent, SuccessAlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
