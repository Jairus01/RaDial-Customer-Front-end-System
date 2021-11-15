import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from 'src/app/Models/model/vacancy.model';


const baseUrl  = 'http://localhost:8888/api/vacancy';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient) { }

  create_Vacancy(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAll(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(baseUrl);
  }
  get(owner: any): Observable<any> {
    return this.http.get<Vacancy[]>(`${baseUrl}?owner=${owner}`);
  }
}
