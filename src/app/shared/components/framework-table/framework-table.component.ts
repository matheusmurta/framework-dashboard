import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { EditDialogComponent } from '../dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete/delete.dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-framework-table',
  templateUrl: './framework-table.component.html',
  styleUrls: ['./framework-table.component.scss']
})
export class FrameworkTableComponent implements OnInit {

  @Input() tabledata: any;
  @Input() tablecolumns: any;
  @Input() formFields: any;
  @Input() tableTitle: string;

  isEmptyData: boolean = false;
  index: number;
  id: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Output() sendNewData?= new EventEmitter();
  @Output() sendRemovedData?= new EventEmitter();
  @Output() sendUpdatedData?= new EventEmitter();

  constructor(public dialog: MatDialog) { }


  displayedColumns: string[] = ['edit', 'remove'];

  dataSource: any;

  columns: string[] = [];

  headerText: string;

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['tabledata'].currentValue != 'undefined') {
      this.isEmptyData = false;
      this.renderTable();
    }
  }

  ngOnInit() {

    if (this.tabledata) {
      this.renderTable();
    } else {
      this.isEmptyData = true;
    }
  }



  renderTable() {
    this.dataSource = new MatTableDataSource(this.tabledata);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.columns.length == 0) {
      this.getColumns().then((cols: string[]) => {
        this.displayedColumns.unshift(...cols);
        this.columns = cols;
      })
    }

  }


  getColumns() {
    return new Promise((resolve, reject) => {
      resolve(this.tablecolumns);
    })
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent,
      {
        width: '50%',
        height: '50%',
        panelClass: 'custom-dialog-container',
        data: { formFields: this.formFields, elementData: {} }
      }
    );


    dialogRef.afterClosed().subscribe(result => {
      if (result === 1 && !dialogRef.componentInstance.isCanceled) {
        let data = dialogRef.componentInstance.currentData;
        this.sendNewData.emit(data);
      }
    });
  }

  startEdit(element) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '50%',
      height: '50%',
      panelClass: 'custom-dialog-container',
      data: {
        formFields: this.formFields,
        elementData: { element }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1 && !dialogRef.componentInstance.isCanceled) {
        let data = dialogRef.componentInstance.currentData;
        this.sendUpdatedData.emit(data);
      }
    });
  }

  deleteItem(element) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
     
      panelClass: 'custom-dialog-container',
      data: {
        element
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1 && !dialogRef.componentInstance.isCanceled) {
        let data = dialogRef.componentInstance.currentData;
        this.sendRemovedData.emit(data);
      }
    });
  }

}


