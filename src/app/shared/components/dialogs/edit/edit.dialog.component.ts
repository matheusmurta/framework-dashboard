import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.scss']
})
export class EditDialogComponent {



  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public formFields: any

  currentData: any;
  isCanceled: boolean = false;

  ngOnInit() {
     this.currentData = this.data.elementData;
  }

  public confirmAdd(): void {
     this.currentData = this.data.elementData;
  }


  getFields() {
    return this.data.formFields;
  }

  reciverSubmit(submitData, id) {
    this.dialogRef.close(1);
    this.currentData = submitData

  }


  reciverCancel(isClosed) {
    if (isClosed) {
      this.isCanceled = true;
    }
  }
}
