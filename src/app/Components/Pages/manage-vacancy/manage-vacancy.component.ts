import { Component, OnInit } from '@angular/core';
import { PostObject,CommonService } from './../../../common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Vacancy {
  _id:  String,
  jobTitle:  String,
  jobDescription:  String,
  StartDate:  Date,
  CloseDate:  Date,
  ShortListed: String,
  Status: String
}

@Component({
  selector: 'app-manage-vacancy',
  templateUrl: './manage-vacancy.component.html',
  styleUrls: ['./manage-vacancy.component.css']
})

export class ManageVacancyComponent implements OnInit {

  // vacancy_list = [
  //   {
  //     _id: new String,
  //     jobTitle: new String,
  //     jobDescription: new String,
  //     StartDate: new Date,
  //     CloseDate: new Date,
  //     ShortListed:new String,
  //     Status:new String
  //   }
  // ]

  vacancy_list : Vacancy[] = []
  temp_list : Vacancy[] = []

  page : any;
  pageSize : any;
  collectionSize : any;
  
  
  constructor(private service: CommonService,private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.listVacancy()
  }
  loadPaginator() {
    this.page = 1;
    this.pageSize = 5;
    this.collectionSize = this.vacancy_list.length;
  }
  refreshVacancyList() {
    this.vacancy_list = this.temp_list.map((vacancy, i) => ({id: i + 1, ...vacancy}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  isEmpty(): boolean {
    if(this.vacancy_list.length == 0){
      return true;
    }else{
      return false;
    }
  }

  listVacancy(): void {
    this.service.list_vacancy().subscribe(d=>{
      this.vacancy_list = this.temp_list = (d as PostObject).data
      this.loadPaginator()
      this.refreshVacancyList()
    })
  }

  deleteVacancy(o:any): void {
    this.service.delete_vacancy(o['_id']).subscribe(d=>{
      this.listVacancy()
    })
  }

  

  //Open modal window
  open(content: any,o:any) {
    this.modalService.open(content);
    document.getElementById('btnDelete')!.addEventListener('click', e =>{
        this.deleteVacancy(o)
    });
  }
}
