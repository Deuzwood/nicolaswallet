import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ViewComponent } from './pages/posts/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    pathMatch: 'full',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'blog',
    component: PostsComponent,
  },
  {
    path: 'blog/:title',
    component: ViewComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
