import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscribe } from 'src/app/Models/model/subscribe.model';
const baseUrl  = 'http://localhost:8888/api/subscribe';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  constructor(private http: HttpClient) { }

  create_Subscribe(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAll(): Observable<Subscribe[]> {
    return this.http.get<Subscribe[]>(baseUrl);
  }
}
