import {Component, OnInit} from '@angular/core';
import {Post, PostsService} from "../../services/posts.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})
export class PostsComponent  implements OnInit{

  posts$!: Observable<Post[]>
  loading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostsService,
  ) {}

  ngOnInit() {
     this.posts$ = this.postService.getPosts()
  }

  navigateToPost(id: number) {
    this.router.navigate([`${id}`], {relativeTo: this.route})
  }

  onLoad() {
    this.loading = false;
  }
}
