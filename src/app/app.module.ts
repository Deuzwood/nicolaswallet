import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { BadgeComponent } from './components/badge/badge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconsModule } from '@ng-icons/core';
import { NgParticlesModule } from 'ng-particles';
import { icons } from './data/icons';
import { PostsComponent } from './pages/posts/posts.component';
import { ViewComponent } from './app/pages/posts/view/view.component';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    PostsComponent,
    ProjectsComponent,
    ResumeComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons(icons),
    BrowserAnimationsModule,
    NgParticlesModule,
    AppRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
