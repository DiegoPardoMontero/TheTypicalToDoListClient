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
    return this.http.get<Task[]>(`http://localhost:8080/tasks/list`);
  }
}
