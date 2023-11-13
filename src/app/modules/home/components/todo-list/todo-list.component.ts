import {Component} from '@angular/core';
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [];

  public deleteTaskById(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTasks(): void {
    const confirm = window.confirm('Você realmente deseja excluir todas as tarefas?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmittedTaskList(event: string): void {
    this.taskList.push({task: event, checked: false});
  }

}
