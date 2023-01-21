import { Component, Input } from '@angular/core';
import { tags } from 'src/app/data/tags';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() name!: string;

  tags: Tag[] = tags;


  format(text: string): string {
    return text.toLowerCase().replace(/ /g, '');
  }

  getTag(): Tag {
    return (
      this.tags.find(
        (t) =>
          this.format(t.name) === this.format(this.name)
      ) || ({ name: this.name } as Tag)
    );
  }
}
