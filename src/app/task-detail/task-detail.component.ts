import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/taskModel';
import { TaskDataService } from '../task-data.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  myTask: Task;
  id: number;

  constructor( private taskData: TaskDataService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.taskData.getTaskById( this.id ).subscribe( c =>  ( this.myTask = c ))
    });
  }

}
