import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/taskModel';
import { TaskService } from '../services/task.service';



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  public newTask: Task = new Task();

  constructor(private myTaskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewTask() {
    this.myTaskService.createTask(this.newTask).subscribe( response => {
      console.log(response);
      this.router.navigate( ["listalltasks"] );
    } )
  }
}
