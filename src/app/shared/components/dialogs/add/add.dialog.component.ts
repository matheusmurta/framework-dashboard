import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.scss']
})

export class AddDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ) { }
  
   public formFields: any

  currentData : any; 
  isCanceled: boolean = false;

  ngOnInit() {
  }

  public confirmAdd(): void {
    this.currentData = this.data.elementData;
  }
  getFields() {
    return this.data.formFields;
  }

  reciverSubmit(submitData) {
    this.dialogRef.close(1);
    this.currentData = submitData
  }

  reciverCancel(isClosed){
    if(isClosed){
      this.isCanceled = true; 
    }
  }
}
