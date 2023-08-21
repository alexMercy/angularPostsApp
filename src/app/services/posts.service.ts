import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, find, map, Observable} from "rxjs";


export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts():Observable<Post[]> {
    // return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    return this.http.get<Post[]>("assets/posts.json")
  }

  getPostById(id: number):Observable<Post> {
    // return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return this.http.get<Post[]>("assets/posts.json")
      .pipe(map(posts => posts.find(item => item.id === id)!))
  }
}
