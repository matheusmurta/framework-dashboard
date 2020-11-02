import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './post/post.component';
import { MaterialModule } from '../../material-module.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
