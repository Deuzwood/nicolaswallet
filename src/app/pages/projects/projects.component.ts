import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { projects } from 'src/app/data/projects';
import { tags } from 'src/app/data/tags';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(100)]),
      transition('* => void', [animate(100, style({ opacity: 0 }))]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects = projects;
  tags = tags;
  selectedProject: Project | null = null;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
    } else if (event.key === 'ArrowRight') {
      this.nextProject();
    } else if (event.key === 'ArrowLeft') {
      this.previousProject();
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.projects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  getImagePath(name: string): string {
    return `assets/projects/${name.toLowerCase().replace(/ /g, '_')}.webp`;
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  nextProject(): void {
    if (this.projects.length) {
      const index = this.projects.indexOf(this.selectedProject!);
      if (index < this.projects.length - 1) {
        this.selectedProject = this.projects[index + 1];
      }
    }
  }

  previousProject(): void {
    const index = this.projects.indexOf(this.selectedProject!);
    if (index > 0) {
      this.selectedProject = this.projects[index - 1];
    }
  }
}
