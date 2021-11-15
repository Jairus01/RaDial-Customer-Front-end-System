import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReceivedApplicant } from 'src/app/Models/model/received-applicant.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })

  
export class VacancyShortlist {
    url = 'http://localhost:8888/'

    constructor(private http:HttpClient) { }
    
    listReceivedApplicant() {
      return this.http.get(this.url + "api/received-applicant2" )
    }
    saveInterviewSchedule(d:any) {
      return this.http.post(this.url + "api/interview-schedule",d )
    }

    getAll(): Observable<ReceivedApplicant[]> {
      return this.http.get<ReceivedApplicant[]>(this.url + "api/received-applicant" );
    }
}

export interface PostObject {
    data: any
  }
  
