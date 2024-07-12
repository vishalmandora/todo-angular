import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos!: string[];

  @Output() deleteTodo = new EventEmitter<number>();

  @Output() editTodo = new EventEmitter<{ index: number, updatedTodo: string }>();

  editIndex: number | null = null;
  updatedTodo: string = '';

  startEdit(index: number) {
    this.editIndex = index;
    this.updatedTodo = this.todos[index];
  }

  saveEdit(index: number) {
    this.editTodo.emit({ index, updatedTodo: this.updatedTodo });
    this.editIndex = null;
    this.updatedTodo = '';
  }

  cancelEdit() {
    this.editIndex = null;
    this.updatedTodo = '';
  }
}
