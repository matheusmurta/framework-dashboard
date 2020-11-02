import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Todo } from 'src/app/models/todo';
import { Todos } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  myColumns = ['id', 'userId', 'title', 'completed'];
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
      label: 'Title',
      value: '',
      required: true
    },
    {
      type: 'checkbox',
      name: 'completed',
      label: '',
      options: [
        { key: 'completed', label: 'completed' }
      ]
    }
  ];

  todosList: Todo[];

  constructor(

    public todosListervice: Todos,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todosListervice.get().subscribe((todosList: Todo[]) => {
      this.todosList = todosList;
    });
  }

  reciverAdd(data) {
    const currentTodo = <Todo>(data);
    let { completed: { completed } } = data;
    completed = completed ? completed : false;
    currentTodo['completed'] = completed;

    this.todosListervice.create(currentTodo).subscribe(() => {
      this.successMessage();
      this.getAll();
    });
  }

  reciverUpdate(data) {
    const currentTodo = <Todo>(data);
    let { completed: { completed } } = data;
    completed = completed ? completed : false;
    currentTodo['completed'] = completed;

    this.todosListervice.update(currentTodo).subscribe(() => {
      this.successMessage();
      this.getAll();
    });
  }

  reciverDelete(data) {
    const currentTodo = <Todo>(data);
    this.todosListervice.delete(currentTodo).subscribe(() => {
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
