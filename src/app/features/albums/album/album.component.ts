import { Component, OnInit } from '@angular/core';
import { Album } from '../../../models/album';
import { NgForm } from '@angular/forms';
import { Albums } from 'src/app/services/album.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  myColumns = ['id', 'userId', 'title'];
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
    }
  ];

  albumsList: Album[];

  constructor(

    public albumsListervice: Albums,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.albumsListervice.get().subscribe((albumsList: Album[]) => {
      this.albumsList = albumsList;
    });
  }

  reciverAdd(data) {
    const currentAlbum = <Album>(data);
    this.albumsListervice.create(currentAlbum).subscribe(() => {
      this.successMessage();
      this.getAll();
    });
  }

  reciverUpdate(data) {
    const currentAlbum = <Album>(data);
    this.albumsListervice.update(currentAlbum).subscribe(() => {
      this.successMessage();
      this.getAll();
    });
  }

  reciverDelete(data) {
    const currentAlbum = <Album>(data);
    this.albumsListervice.delete(currentAlbum).subscribe(() => {
      this.successMessage();
      this.getAll();
    });
  }

  successMessage() {
    this._snackBar.open("Operação realizada com sucesso!", null, {
      duration: 2000,
    });
  }

}
