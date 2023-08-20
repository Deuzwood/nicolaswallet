import { Component } from '@angular/core';
import { PostInfo } from 'src/app/interfaces/postInfo';
import data from 'src/assets/posts/posts.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: PostInfo[] = data;

  getLink(title: string) {
    return title.toLocaleLowerCase().replace(/ /g, '-');
  }
}
