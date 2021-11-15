import { Component, OnInit } from '@angular/core';
import { ReceivedApplicant } from 'src/app/Models/model/received-applicant.model';
import { ReceivedApplicantService } from 'src/app/Shared/_services/received-applicant.service';

@Component({
  selector: 'app-r-applicant-list',
  templateUrl: './r-applicant-list.component.html',
  styleUrls: ['./r-applicant-list.component.css']
})
export class RApplicantListComponent implements OnInit {
  
  applicant:ReceivedApplicant = {
    name:'',
    position_applied:''

  };
  submitted= false;
  isSuccessful = false;

  constructor(private ApplicantService:ReceivedApplicantService) { }

  ngOnInit(): void {
  }
  
  saveApplicant(): void {
    const data = {
      name: this.applicant.name,
      position_applied: this.applicant.position_applied
    };

    this.ApplicantService.create_Applicant(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.isSuccessful = true;
        },
        error => {
          console.log(error);
        });
  }


  newApplicant(): void {
    this.submitted = false;
    this.applicant = {
      name: '',
      position_applied: ''
    };
  }
}
