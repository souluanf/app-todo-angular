import {booleanAttribute, Component, DoCheck} from '@angular/core';
import {TaskList} from "../../model/task-list";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];


  ngDoCheck(): void {
    this.taskList.sort(
      (first: { checked: boolean; }, last: { checked: boolean; }) => Number(first.checked) - Number(last.checked));
  }


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

  public validationInput(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm('Task vazia, deseja excluir?');
      if (confirm) {
        this.deleteTaskById(index);
      }

    }
  }



}
