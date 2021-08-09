import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

 @Input() todo: Todo 
 @Output() clickedTodo: EventEmitter<void> = new EventEmitter()
 @Output() clickedEdit: EventEmitter<void> = new EventEmitter()
 @Output() clickedDelete: EventEmitter<void> = new EventEmitter()

 

  constructor() { }

  ngOnInit(): void {
  }

clickedOnTodo(){
  this.clickedTodo.emit()
}

clickedOnEdit(){
this.clickedEdit.emit()
}

clickedOnDelete(){
  this.clickedDelete.emit()
}


}
