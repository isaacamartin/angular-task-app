import { Component, OnInit } from '@angular/core';

import { Task } from 'src/taskModel';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-list-all-tasks',
  templateUrl: './list-all-tasks.component.html',
  styleUrls: ['./list-all-tasks.component.css']
})
export class ListAllTasksComponent implements OnInit {

public listOfTasks: Task[] = [];

  constructor(private myTaskService: TaskService) { }

  ngOnInit(): void {
    this.myTaskService.getAllTask().subscribe(response => {
      console.log(response);
      this.listOfTasks = response;
    })
  }


  
  public deleteTask(id: number) {
    console.log("testing" + id);
    this.myTaskService.deleteTask(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    })
  }

}
