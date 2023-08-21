import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {IconsModule} from "../../ui-kit/icons/icons.module";
import {ReactiveFormsModule} from "@angular/forms";
import {UiKitModule} from "../../ui-kit/ui-kit.module";



@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IconsModule,
    ReactiveFormsModule,
    UiKitModule,
  ]
})
export class LoginModule { }
