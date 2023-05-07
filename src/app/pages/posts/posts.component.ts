import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import data from 'src/assets/posts/posts.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: any[] = data;
}
