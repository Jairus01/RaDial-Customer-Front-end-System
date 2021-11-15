import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReceivedApplicant } from 'src/app/Models/model/received-applicant.model';

const baseUrl  = 'http://localhost:8888/api/received-applicant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReceivedApplicantService {
  constructor(private http: HttpClient) { }

  create_Applicant(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAll(): Observable<ReceivedApplicant[]> {
    return this.http.get<ReceivedApplicant[]>(baseUrl);
  }

}