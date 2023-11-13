import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    TodoListComponent,
    TodoInputAddItemsComponent,
    TodoButtonDeleteAllComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
