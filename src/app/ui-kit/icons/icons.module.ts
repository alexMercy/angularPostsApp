import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import {SignInComponent} from "./sign-in/sign-in.component";



@NgModule({
    declarations: [
        LogInComponent,
        SignOutComponent,
        SignInComponent
    ],
  exports: [
    LogInComponent,
    SignOutComponent,
    SignInComponent
  ],
    imports: [
        CommonModule
    ]
})
export class IconsModule { }
