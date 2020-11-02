import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule
  ]
})
export class TodosModule { }
