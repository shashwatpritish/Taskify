import { Component , OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  host:{
    'ngSkipHydration':'true'
  }
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() {
    this.todos=[]
  }

  ngOnInit(): void {
  }

  todoDelete(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
}
