import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  retrieveTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(`https://localhost:8443/tasks/list`);
  }

  postTask(task : Task | undefined) : Observable<Task> {
    return this.http.post<Task>("https://localhost:8443/tasks/create", task, this.httpOptions);
  }

  deleteTask(id : number | undefined) : Observable<Task>{
    return this.http.delete<Task>("https://localhost:8443/tasks/delete/" + id, this.httpOptions);
  }

  modifyTask(task : Task | undefined) : Observable<Task> {
    return this.http.put<Task>("https://localhost:8443/tasks/modify", task, this.httpOptions);
  }
}
