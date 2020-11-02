import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Posts } from '../../../services/post.service';
import { Post } from '../../../models/post';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  myColumns = ['id', 'userId', 'title', 'body'];

  myFormFields: any[] = [
    {
      type: 'text',
      name: 'userId',
      label: 'userId',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'title',
      label: 'title',
      value: '',
      required: true
    },
    {
      type: 'text',
      name: 'body',
      label: 'body',
      value: '',
      required: true,
    }
  ];

  posts: Post[];

  constructor(
    public postService: Posts,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.postService.get().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  reciverAdd(data) {
    const currentPost = <Post>(data);
    this.postService.create(currentPost).subscribe(() => {
      this.successMessage();
      this.getAll();
    });
  }

  reciverUpdate(data) {
    const currentPost = <Post>(data);
    this.postService.update(currentPost).subscribe(() => {
      this.successMessage();
      this.getAll();
    });
  }

  reciverDelete(data) {
    const currentPost = <Post>(data);
     this.postService.delete(currentPost).subscribe(() => {
      this.successMessage();
       this.getAll();
     });
  }

  successMessage(){
    this._snackBar.open("Operação realizada com sucesso!", null, {
      duration: 2000,
    });
  }
}

