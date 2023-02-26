import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { Task } from 'src/taskModel';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-list-one-task',
  templateUrl: './list-one-task.component.html',
  styleUrls: ['./list-one-task.component.css']
})
export class ListOneTaskComponent implements OnInit {
  currentTask: Task = new Task();

taskID: number;

  constructor(private actRoute: ActivatedRoute, private myTaskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskID = parseInt(this.actRoute.snapshot.paramMap.get("taskid"));
    console.log(this.taskID);

    this.myTaskService.getOneTask(this.taskID).subscribe( response => {
      console.log(response);
      this.currentTask = response;
    } )
  }

  public deleteTask(id: number) {
    console.log("testing" + id);
    this.myTaskService.deleteTask(id).subscribe(response => {
      console.log(response);
      this.router.navigate(["listalltasks"]);
    })
  }

  
}
