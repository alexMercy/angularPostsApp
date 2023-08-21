import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import {PostsRoutingModule} from "./posts-routing.module";
import {UiKitModule} from "../../ui-kit/ui-kit.module";



@NgModule({
  declarations: [
    PostsComponent
  ],
    imports: [
        PostsRoutingModule,
        CommonModule,
        UiKitModule
    ]
})
export class PostsModule { }
