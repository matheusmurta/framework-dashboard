import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => import('./features/home/home.module').then(m => m.HomeModule), 
  },
  {
    path: 'album',
    loadChildren : () => import('./features/albums/albums.module').then(m => m.AlbumsModule), 
  },
  {
    path: 'todo',
    loadChildren : () => import('./features/todos/todos.module').then(m => m.TodosModule), 
  },
  {
    path: 'post',
    loadChildren : () => import('./features/posts/posts.module').then(m => m.PostsModule), 
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
