import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/Shared/_services/vacancy.service';
import { Vacancy } from 'src/app/Models/model/vacancy.model';
import { TokenStorageService } from 'src/app/Shared/_services/token-storage.service';

@Component({
  selector: 'app-manage-vacancy',
  templateUrl: './manage-vacancy.component.html',
  styleUrls: ['./manage-vacancy.component.css']
})
export class ManageVacancyComponent implements OnInit {

  vacancies?:Vacancy[];
  currentIndex = -1;
  job_title = '';
  constructor(private VacancyService: VacancyService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.retrieveVacancy();
  }

  retrieveVacancy():void{
    const user = this.tokenStorageService.getUser();
    this.VacancyService.getAll()
      .subscribe(
        data => {
          this.vacancies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveVacancy();
    this.currentIndex = -1;
  }
}
