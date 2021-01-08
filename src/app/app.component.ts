//add function that allows user to link to do event to certain date? show calendar with highlighted dates if they have 'todos' linked to them

//Referenced walkthrough from https://www.sitepoint.com/angular-2-tutorial/ for majority / set up (still learning!)

//Styling, removal + edit function, menu option, and a few other bits and pieces are my own code

import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  name = "Remi"; //allow user option to enter their name on start of app/once downloaded
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService){
  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  editTodo() {
    this.todoDataService.updateTodoById(this.newTodo.id);
    console.log('hi');
    console.log(this.newTodo.id);
  }

  toggleTodoComplete(todo: Todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo: Todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
