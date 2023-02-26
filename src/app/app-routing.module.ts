import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ListAllTasksComponent } from './list-all-tasks/list-all-tasks.component';
import { ListOneTaskComponent } from './list-one-task/list-one-task.component';


const routes: Routes = [
  
  { path: "listalltasks", component: ListAllTasksComponent},
  { path: "listalltasks/:taskid", component: ListOneTaskComponent},
  { path: "create", component: CreateTaskComponent},
  { path: "edit/:taskid", component: EditTaskComponent},
  { path: "", redirectTo: "listalltasks", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
