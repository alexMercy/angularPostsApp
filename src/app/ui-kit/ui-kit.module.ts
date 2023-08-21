import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {IconsModule} from "./icons/icons.module";
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
      ButtonComponent,
      LayoutComponent,
      HeaderComponent,
      ContentComponent,
      CardComponent
  ],
    exports: [
        ButtonComponent,
        LayoutComponent,
        HeaderComponent,
        ContentComponent,
        CardComponent,
    ],
  imports: [
    CommonModule,
    RouterOutlet,
    IconsModule,
    RouterLink
  ]
})
export class UiKitModule { }
