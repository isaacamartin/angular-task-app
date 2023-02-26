import { Component, OnInit } from '@angular/core';
import { Task } from 'src/taskModel';
import { TaskDataService } from '../task-data.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskList: Task[];

  constructor(private taskData: TaskDataService) {
    this.taskData.getTask().subscribe(c => (this.taskList = c))
  }

  ngOnInit(): void {
  }

}
