import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FrameworkTableComponent } from './components/framework-table/framework-table.component';
import { MaterialModule } from '../material-module.module';

import { DynamicFormBuilderComponent } from './components/dynamic-form-builder/dynamic-form-builder.component';
import { FieldBuilderComponent } from './components/dynamic-form-builder/field-builder/field-builder.component';
import { TextBoxComponent } from './components/dynamic-form-builder/atoms/textbox';
import { CheckBoxComponent } from './components/dynamic-form-builder/atoms/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

import { AddDialogComponent } from './components/dialogs/add/add.dialog.component';
import { EditDialogComponent } from './components/dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './components/dialogs/delete/delete.dialog.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [ 
    FrameworkTableComponent, 
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    CheckBoxComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],

  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],

  exports: [  
    FrameworkTableComponent, 
    DynamicFormBuilderComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ]

})
export class SharedModule { }
