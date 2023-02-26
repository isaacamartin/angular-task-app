import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/taskModel';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  myTaskURL: string = "http://localhost:3000/tasks"

  constructor(private http: HttpClient) { }

getAllTask(): Observable<Task[]>{
  return this.http.get<Task[]>(this.myTaskURL)
}


getOneTask (reqID: number): Observable<Task>{
  return this.http.get<Task>(`${this.myTaskURL}/${reqID}`)
}

updateTask(editID: number, edittedInfo:Task): Observable<Task>{
  return this.http.put<Task>(`${this.myTaskURL}/${editID}`, edittedInfo )
}

deleteTask(deleteID: number): Observable<any>{
  return this.http.delete<any>(`${this.myTaskURL}/${deleteID}` )
}

createTask(newTask: Task): Observable<Task>{
return this.http.post<Task>(this.myTaskURL, newTask )
}


}
