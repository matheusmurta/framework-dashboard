import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todos extends BaseService<Todo> {

  constructor(httpClient: HttpClient) { 
    super(
      httpClient,
      environment.url,
      environment.endPointTodo);
  }
}