import { Component, OnInit } from '@angular/core';
import { PostObject,CommonService } from './../../../common.service';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

interface Vacancy {
  _id:  String,
  cname: String,
  clocation: String,
  jobtitle:String,
  age:String,
  hEducation:String,
  wExperience:String,
  personality:String, 
  jobDesc:String,
  sDate:String,
  eDate:String,
  Status:String,
  Published:Boolean
}
@Component({
  selector: 'app-manage-vacancy',
  templateUrl: './manage-vacancy.component.html',
  styleUrls: ['./manage-vacancy.component.css']
})

export class ManageVacancyComponent implements OnInit {

  vacancy_list : Vacancy[] = []
  temp_list : Vacancy[] = []
  
  vacancy : any;

  page : any;
  pageSize : any;
  collectionSize : any;
  datePipe: DatePipe = new DatePipe('en-US');

  modalRef: NgbModalRef | any;
  
  constructor(private service: CommonService,private modalService: NgbModal) {}
  ngOnInit(): void {
    this.listVacancy()
  }

  isEmpty(): boolean {
    if(this.vacancy_list.length == 0){
      return true;
    }else{
      return false;
    }
  }

  /* Manage Vacancy */
  listVacancy(): void {
    this.service.list_vacancy().subscribe(d=>{
      this.vacancy_list = this.temp_list = (d as PostObject).data

      this.loadPaginator()
      this.refreshVacancyList()
    })
  }
  updateVacancy(o:any): void {
    this.service.update_vacancy(o['_id'],o).subscribe(d=>{
      this.listVacancy()
    })
  }
  /* End Manage Vacancy */
  
  /* Modal */
  openUpdate(content: any,o:any) {
    this.modalRef = this.modalService.open(content, { 
      centered: true, 
      size:'xl' 
    });
    (<HTMLInputElement>document.getElementById("eDate")).setAttribute("min", o.sDate);

    this.vacancy = o;

    //Format date to 'dd-MM-yyyy'
    //var close_date = this.datePipe.transform(o.CloseDate, 'dd-MM-yyyy') || String();
    //(<HTMLInputElement>document.getElementById('closingDate')).setAttribute('value',close_date);
    //(<HTMLInputElement>document.getElementById('sltStatus')).value = o.Status;
  }
  openView(content: any,o:any) {
    this.modalRef = this.modalService.open(content, { 
      centered: true, 
      size:'xl' 
    });
    this.vacancy = o;

  }

  openPublish(content: any,o:any) {
    this.modalRef = this.modalService.open(content)
    this.vacancy = o;

    document.getElementById('btnPublish')!.addEventListener('click', e =>{
      this.vacancy.Published = !this.vacancy.Published;
      this.updateVacancy(this.vacancy);
    });
  }

  onSubmit(myForm: NgForm) {
    if(myForm.valid) {
        this.vacancy.Status = myForm.value.Status;
        this.vacancy.jobDesc = myForm.value.jobDesc;
        this.vacancy.eDate = myForm.value.eDate;
        this.updateVacancy(this.vacancy);
        
        myForm.resetForm();
        this.modalRef.dismiss();
    } else {
        alert("Please fill in all the fields.");
    }
  }
  /* End Modal */


  /* Pagination */
  loadPaginator() {
    this.page = 1;
    this.pageSize = 8;
    this.collectionSize = this.vacancy_list.length;
  }
  refreshVacancyList() {
    this.vacancy_list = this.temp_list.map((vacancy, i) => ({id: i + 1, ...vacancy}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  /* End Pagination  */
}
