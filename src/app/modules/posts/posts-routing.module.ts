import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./posts.component";


const routes: Routes = [
  {
    path: "",
    component: PostsComponent,
  },
  {
    path: ":id",
    loadChildren: () => import("../post/post.module").then(m => m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
