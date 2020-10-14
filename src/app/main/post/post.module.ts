import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: ':id',
    component: PostDetailComponent,
  },
];

@NgModule({
  declarations: [PostsComponent, PostDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostModule {}
