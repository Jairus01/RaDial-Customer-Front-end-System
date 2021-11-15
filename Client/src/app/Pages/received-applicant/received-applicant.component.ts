import { Component, OnInit } from '@angular/core';
import { ReceivedApplicantService } from 'src/app/Shared/_services/received-applicant.service';

import { ReceivedApplicant } from 'src/app/Models/model/received-applicant.model';


@Component({
  selector: 'app-received-applicant',
  templateUrl: './received-applicant.component.html',
  styleUrls: ['./received-applicant.component.css']
})
export class ReceivedApplicantComponent implements OnInit {

  applicants?:ReceivedApplicant[];
  currentIndex = -1;
  name = '';


  constructor(private ApplicantService : ReceivedApplicantService) { }
  
  ngOnInit(): void {
    this.retrieveApplicant();
  }

  retrieveApplicant():void{
    this.ApplicantService.getAll()
      .subscribe(
        data => {
          this.applicants = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveApplicant();
    this.currentIndex = -1;
  }
}