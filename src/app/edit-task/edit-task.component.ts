import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/taskModel';
import { TaskService } from '../services/task.service';




@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {


  public editTask: Task = new Task();

   
  taskID: number;

  

  constructor(private actRoute: ActivatedRoute, private myTaskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskID = parseInt(this.actRoute.snapshot.paramMap.get("taskid"));
    console.log(this.taskID);

    this.myTaskService.getOneTask(this.taskID).subscribe(response => {
      console.log(response);
      this.editTask = response;
    })
  }

  updateTask() {
    this.myTaskService.updateTask(this.taskID, this.editTask).subscribe(response => {
      console.log(response);
      this.router.navigate(["listalltasks"]);
    })
  }





}
