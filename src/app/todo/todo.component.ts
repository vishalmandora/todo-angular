import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TodoListComponent} from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    TodoListComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  editTodo({ index, updatedTodo }: { index: number, updatedTodo: string }) {
    if (updatedTodo.trim()) {
      this.todos[index] = updatedTodo.trim();
    }
  }
}
