import { Component } from '@angular/core';
import { TaskService } from 'src/shared/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  taskToAdd : Task | undefined;
  tasks: Task[] = [];
  titleNewTask: string | undefined;
  
  constructor(private taskService : TaskService) { }

  ngOnInit(){
    this.retrieveTasks();
  }

  retrieveTasks(){
    this.taskService.retrieveTasks().subscribe({
      next: dato => {
        this.tasks = dato;
        console.log(dato);  
      },
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
  }

  addTask() {
    this.taskToAdd = new Task(undefined, this.titleNewTask, false);
    this.taskService.postTask(this.taskToAdd).subscribe({
      next: dato => {
        this.retrieveTasks();
        console.log(dato);  
      },
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
  }

  deleteTask(taskId : number | undefined){
    this.taskService.deleteTask(taskId).subscribe({
      next: dato => {
        this.retrieveTasks();
        console.log(dato);  
      },
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
  }
}
