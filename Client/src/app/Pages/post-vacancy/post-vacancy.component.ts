import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/Shared/_services/token-storage.service';
import {Vacancy} from 'src/app/Models/model/vacancy.model'
import {VacancyService} from 'src/app/Shared/_services/vacancy.service'

interface edulevel {
  value: string;
  viewValue: string;
}
interface Personalities {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-post-vacancy',
  templateUrl: './post-vacancy.component.html',
  styleUrls: ['./post-vacancy.component.css']
})
export class PostVacancyComponent implements OnInit {
  max = 500;
  min = 0;
  step = 1;
  thumbLabel = true;
  budgetvalue = 0;
  edulevels: edulevel[] = [
    {value: 'none', viewValue: 'None'},
    {value: 'spm', viewValue: 'SPM'},
    {value: 'foundation', viewValue: 'A Level/Foundation/Form 6'},
    {value: 'diploma', viewValue: 'Diploma'},
    {value: 'degree', viewValue: 'Degree'},
    {value: 'master', viewValue: 'Master'},
    {value: 'phd', viewValue: 'PhD'},
    {value: 'other', viewValue: 'Other'},
    
  ];
  personalities: Personalities[] = [
    {value: 'none', viewValue: 'None'},
    {value: 'INFJ', viewValue: 'INFJ'},
    {value: 'INFP', viewValue: 'INFP'},
    {value: 'INTJ', viewValue: 'INTJ'},
    {value: 'INTP', viewValue: 'INTP'},
    {value: 'ISFJ', viewValue: 'ISFJ'},
    {value: 'ISFP', viewValue: 'ISFP'},
    {value: 'ISTJ', viewValue: 'ISTJ'},
    {value: 'ISTP', viewValue: 'ISTP'},
    {value: 'ENFJ', viewValue: 'ENFJ'},
    {value: 'ENFP', viewValue: 'ENFP'},
    {value: 'ENTJ', viewValue: 'ENTJ'},
    {value: 'ENTP', viewValue: 'ENTP'},
    {value: 'ESFJ', viewValue: 'ESFJ'},
    {value: 'ESFP', viewValue: 'ESFP'},
    {value: 'ESTJ', viewValue: 'ESTJ'},
    {value: 'ESTP', viewValue: 'ESTP'},
  ];

  vacancy: Vacancy = {
    company_name: '',
    company_location: '',
    daily_budget:'',
    age: '',
    job_desc: '',
    job_title :'',
    work_exp:'',
    edu_level:'',
    personalities:'',
  };
  submitted= false;
  isSuccessful = false;
  constructor(private VacancyService:VacancyService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }
  saveVacancy(): void {
    const user = this.tokenStorageService.getUser();
    const data = {
      company_name: this.vacancy.company_name,
      company_location: this.vacancy.company_location,
      job_desc: this.vacancy.job_desc,
      job_title :this.vacancy.job_title,
      age:this.vacancy.age,
      work_exp:this.vacancy.work_exp,
      edu_level:this.vacancy.edu_level,
      personalities:this.vacancy.personalities,
      daily_budjet:this.vacancy.daily_budget,
      start_date:new Date(),
      close_date:this.vacancy.close_date,
      owner: user.id,
      status:false,
    };
    
    this.VacancyService.create_Vacancy(data)
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
}
