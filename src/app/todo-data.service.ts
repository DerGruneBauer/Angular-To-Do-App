import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable(
  {providedIn: 'root'}
  )
export class TodoDataService {

  lastId: number = 0;

  todos: Todo[] = [];

  constructor() { }

  //Adding todos
addTodo(todo: Todo): TodoDataService {
  if (!todo.id) {
    todo.id = ++this.lastId;
  }
  console.log(this.todos);
  this.todos.push(todo);
  return this;
}

//Deleting todos
deleteTodoById(id: number): TodoDataService {
  this.todos = this.todos.filter(todo => todo.id !== id);
  return this;
}

//updating todos
updateTodoById(id: number, values: Object = {}): Todo {
  let todo = this.getTodoById(id);
  if(!todo) {
    return null;
  }
  Object.assign(todo, values);
  return todo;
}

//getting all Todos
getAllTodos(): Todo[] {
  return this.todos;
}

//get single todo item by ID
getTodoById(id: number): Todo {
  return this.todos.filter(todo => todo.id === id).pop();
}

//toggling complete/incomplete
toggleTodoComplete(todo: Todo){
  let updatedTodo = this.updateTodoById(todo.id, {
    complete: !todo.complete
  });
  return updatedTodo;
}
}
