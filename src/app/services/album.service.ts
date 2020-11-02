import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Album } from '../models/Album';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Albums extends BaseService<Album> {

  constructor(httpClient: HttpClient) { 
    super(
      httpClient,
      environment.url,
      environment.endPointAlbum);
  }
}