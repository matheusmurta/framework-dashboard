import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../../dialogs/delete/delete.dialog.html',
  styleUrls: ['../../dialogs/delete/delete.dialog.scss']
})
export class DeleteDialogComponent {
  currentData : any; 
  isCanceled: boolean = false;


  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  confirmDelete(): void {
    this.currentData = this.data.element;
  }

  reciverCancel(isClosed){
    this.dialogRef.close();

    if(isClosed){
      this.isCanceled = true; 
    }
  }
}
