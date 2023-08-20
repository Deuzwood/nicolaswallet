import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import data from 'src/assets/posts/posts.json';
import { PostInfo } from 'src/app/interfaces/postInfo';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  
  post!: string;
  posts: PostInfo[] = data;

  constructor(private markdownService: MarkdownService,private httpClient: HttpClient, private route: ActivatedRoute) {
    this.getPost(this.route.snapshot.paramMap.get('title')!).subscribe(data => this.post = data);
  }

  onReady() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      if(text.startsWith('title:')) {
        return ''
      }
      return '<h' + level + ' class="text-lg py-2">' +
               text +
             '</h' + level + '>';
    };
  }

  getPost(title: string) {
    return this.httpClient.get('assets/posts/' + this.getFileName(title), { responseType: 'text' });
  }

  getFileName(title: string) {
    return this.posts.find(el => el.title.toLocaleLowerCase().replace(/ /g, '-') === title)?.fileName
  }
}
