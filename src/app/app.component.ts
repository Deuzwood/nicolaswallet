import { Component } from '@angular/core';
import { loadFull } from 'tsparticles';
import { Container, Engine } from 'tsparticles-engine';
import { particlesOptions } from './data/particles';
import { projects } from './data/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  particlesOptions = particlesOptions;
  projectsNumber = projects.length;
  open = false;

  particlesLoaded(): void {}

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
