import {Component} from '@angular/core';
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    {task: 'Task 1', checked: false},
    {task: 'Task 2', checked: false},
    {task: 'Task 3', checked: false},
    {task: 'Task 4', checked: true},
    {task: 'Task 5', checked: false},
  ];

}
