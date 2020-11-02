import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  template: `
    <form (ngSubmit)="mySubmit()" [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9" mat-dialog-actions align="end">
          <button mat-button color="accent" mat-button  (click)="cancel()" class="btn btn-primary">Cancelar</button>
          <button mat-button color="primary" mat-button type="submit" [disabled]="!form.valid" (click)="save()" class="btn btn-primary">Salvar</button>

        </div>
      </div>
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() formdata?: any;

  formatedData: any;
  form: FormGroup;

  constructor() { }

  ngOnInit() {


    let fieldsCtrls = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);



    if (this.form && this.fields && this.formdata && this.formdata.element) {

      for (let f of this.fields) {
        this.form.patchValue({ [f.name]: this.formdata.element[f.name] });
      }

      //gambiarra checkbox infelizmente angular material nativo nao rolou
      if (this.formdata && this.formdata.element.completed) {
        this.form.controls.completed['controls'].completed.value = this.formdata.element.completed;
      }
    }

  }

  save() {
    if (this.form) {
      this.formatedData = { ...this.formatedData, ...this.form.value }
      if (this.formdata) {
        this.formatedData.id = this.formdata.element.id;
      }
    }
  }

  cancel() {
    this.onCancel.emit(true)
  }

  mySubmit() {
    this.onSubmit.emit(this.formatedData)
  }
}
