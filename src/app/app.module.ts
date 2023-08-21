import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitModule } from "./ui-kit/ui-kit.module";
import {IsLoggedService} from "./services/isLogged.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    UiKitModule,
  ],
  providers: [IsLoggedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
