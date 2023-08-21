import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post, PostsService} from "../../services/posts.service";
import {Observable} from "rxjs";

enum Params {
  id = "id",
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostsService]
})
export class PostComponent implements OnInit{

  post!: Observable<Post>

  constructor(
    private readonly route: ActivatedRoute,
    private readonly postsService: PostsService,
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
      params => {
         this.post = this.postsService.getPostById(+params[Params.id]);
      }
    )
  }



}
