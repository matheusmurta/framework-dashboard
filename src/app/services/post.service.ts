import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Posts extends BaseService<Post> {

  constructor(httpClient: HttpClient) { 
    super(
      httpClient,
      environment.url,
      environment.endPointPost);
  }
}