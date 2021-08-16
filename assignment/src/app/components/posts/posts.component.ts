import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : any[] = [];
  totalPosts:number = 0;
  page:number = 1;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res;
      this.totalPosts = res.length;
    });
  }

}
