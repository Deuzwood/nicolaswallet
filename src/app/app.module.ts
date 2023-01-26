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
import { icons } from './data/icons';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProjectsComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons(icons),
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
