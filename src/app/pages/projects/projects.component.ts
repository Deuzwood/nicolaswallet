import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/data/projects';
import { tags } from 'src/app/data/tags';
import { Project } from 'src/app/interfaces/project';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = projects;
  tags = tags;
  selectedProject: Project | null = null;

  constructor() {}

  ngOnInit(): void {
    this.projects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  getImagePath(name: string): string {
    return `assets/projects/${name.toLowerCase().replace(/ /g, '_')}.webp`;
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  unselectProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
